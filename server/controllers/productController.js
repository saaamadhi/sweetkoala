const { Product, Op } = require('../models/models');

const ProductController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.findAll();

      return res.json(products);
    } catch (e) {
      res.status(500).json({ msg: "Can't get all products!" });
    }
  },
  getProduct: async (req, res) => {
    const { field, fieldValue } = req.body;

    try {
      const product = await Product.findOne({
        where: { field: { [Op.like]: `%${fieldValue}%` } },
      });

      if (!product) {
        res.status(400).json({ msg: "Can't find product!" });
      }

      return res.json(product);
    } catch (e) {
      res.status(500).json({ msg: "Can't find product!" });
    }
  },
  delete: async (req, res) => {
    const { productId } = req.body;

    try {
      const product = await Product.destroy({ where: { id: productId } });

      if (!product) {
        res.status(400).json({ msg: "Can't find any product with that id!" });
      }

      return res.json({ msg: `deleted row(s): ${product}` });
    } catch (e) {
      res.status(500).json({ msg: "Can't delete product!" });
    }
  },
  add: async (req, res) => {
    const { name } = req.body;

    //todo: add all needed attr here
    try {
      await Product.create({
        name: name,
      });

      return res.json({ msg: 'product added' });
    } catch (e) {
      res.status(500).json({ msg: "Can't add product!" });
    }
  },
  update: async (req, res) => {
    const { productId, newValue } = req.body;

    //todo: add all needed attr here
    try {
      await Product.upsert({
        id: productId,
        lastName: newValue,
      });

      return res.json({ msg: 'product row updated' });
    } catch (e) {
      res.status(500).json({ msg: "Can't update product row!" });
    }
  },
};

module.exports = ProductController;
