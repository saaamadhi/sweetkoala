const { Order, Op } = require('../models/models');

const OrderController = {
  getAll: async (req, res) => {
    try {
      const orders = await Order.findAll();

      return res.json(orders);
    } catch (e) {
      res.status(500).json({ msg: "Can't get all orders!" });
    }
  },
  delete: async (req, res) => {
    const { orderId } = req.body;

    try {
      const order = await Order.destroy({ where: { id: orderId } });

      if (!order) {
        res.status(400).json({ msg: "Can't find any order with that id!" });
      }

      return res.json({ msg: `deleted row(s): ${order}` });
    } catch (e) {
      res.status(500).json({ msg: "Can't delete an order!" });
    }
  },
  add: async (req, res) => {
    const { name } = req.body;

    //todo: add all needed attr here
    try {
      await Order.create({
        name: name,
      });

      return res.json({ msg: 'order added' });
    } catch (e) {
      res.status(500).json({ msg: "Can't add order!" });
    }
  },
  update: async (req, res) => {
    const { orderId, newValue } = req.body;

    //todo: add all needed attr here
    try {
      await Order.upsert({
        id: orderId,
        lastName: newValue,
      });

      return res.json({ msg: 'order row updated' });
    } catch (e) {
      res.status(500).json({ msg: "Can't update order row!" });
    }
  },
};

module.exports = OrderController;
