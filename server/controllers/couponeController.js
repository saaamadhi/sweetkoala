const { Coupone, Op } = require('../models/models');

const CouponeController = {
  getAll: async (req, res) => {
    try {
      const coupones = await Coupone.findAll();

      return res.json(coupones);
    } catch (e) {
      res.status(500).json({ msg: "Can't get all coupones!" });
    }
  },
  delete: async (req, res) => {
    const { couponeId } = req.body;

    try {
      const coupone = await Coupone.destroy({ where: { id: couponeId } });

      if (!coupone) {
        res.status(400).json({ msg: "Can't find any coupone with that id!" });
      }

      return res.json({ msg: `deleted row(s): ${coupone}` });
    } catch (e) {
      res.status(500).json({ msg: "Can't delete coupone!" });
    }
  },
  add: async (req, res) => {
    const { name } = req.body;

    //todo: add all needed attr here
    try {
      await Coupone.create({
        name: name,
      });

      return res.json({ msg: 'coupone added' });
    } catch (e) {
      res.status(500).json({ msg: "Can't add coupone!" });
    }
  },
  update: async (req, res) => {
    const { couponeId, newValue } = req.body;

    //todo: add all needed attr here
    try {
      await Coupone.upsert({
        id: couponeId,
        lastName: newValue,
      });

      return res.json({ msg: 'coupone row updated' });
    } catch (e) {
      res.status(500).json({ msg: "Can't update coupone row!" });
    }
  },
};

module.exports = CouponeController;
