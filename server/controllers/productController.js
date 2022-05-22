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
};

module.exports = ProductController;
