const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '3h',
  });
};

const validateAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ msg: "User isn't authorized!" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ msg: "User isn't authorized!" });
  }
};

const checkUserRole = (role) => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(401).json({ msg: "User isn't authorized!" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (decoded.role !== role) {
        return res.status(403).json({ msg: "User doesn't have a permission!" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ msg: "User isn't authorized!" });
    }
  };
};

const UserController = {
  registration: async (req, res) => {
    const { role, email, password } = req.body;

    try {
      if (!email || !password) {
        res.status(400).json({ msg: 'Incorrect email or password!' });
      }

      const potentialUser = await User.findOne({ where: { email } });

      if (potentialUser) {
        res.status(400).json({ msg: 'User already exist!' });
      }

      const hashPassword = await bcrypt.hash(password, 4);
      const user = await User.create({ role, email, password: hashPassword });

      const token = generateToken(user.id, user.email, user.role);

      return res.json({ token });
    } catch (e) {
      res.status(500).json({ msg: "User can't be created" });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        res.status(400).json({ msg: "This user doesn't exist!" });
      }

      const comparePassword = bcrypt.compareSync(password, user.password);

      if (!comparePassword) {
        res.status(400).json({ msg: 'Password is incorrect!' });
      }

      const token = generateToken(user.id, user.email, user.role);

      return res.json({ token });
    } catch (e) {
      res.status(500).json({ msg: "Can't login user!" });
    }
  },
  authentication: (req, res, next) => {
    try {
      validateAuth(req, res, next);
      const token = generateToken(req.user.id, req.user.email, req.user.role);

      return res.json({ token });
    } catch (e) {
      res.status(500).json({ msg: "Can't authenticate user!" });
    }
  },
  getAll: async (req, res) => {
    try {
      checkUserRole(req.body.role);
      const users = await User.findAll();

      return res.json(users);
    } catch (e) {
      res.status(500).json({ msg: "Can't get all users!" });
    }
  },
  getUser: async (req, res) => {
    const { field } = req.body;

    try {
      const user = await User.findOne({ where: { field } });

      if (!user) {
        res.status(400).json({ msg: "Can't find user!" });
      }

      return res.json(user);
    } catch (e) {
      res.status(500).json({ msg: "Can't find user!" });
    }
  },
};

module.exports = UserController;
