const { Order, Payment, OrderItem, Op } = require('../models/models');

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
    const {
      name,
      surname,
      email,
      phone,
      status,
      deliveryType,
      deliveryDate,
      deliveryAddress,
      totalAmount,
      totalPrice,
      orderNotes = '',
      products,
    } = req.body;

    const paymentId = Payment.create({
      status: 'Pending',
    });

    const userId = null;

    const items = products.forEach((element) => {
      const item = OrderItem.create({});
    });

    //todo: add all needed attr here
    try {
      await Order.create({
        user_name: name,
        user_surname: surname,
        user_email: email,
        user_phone: phone,
        status: status,
        delivery_type: deliveryType,
        delivery_date: deliveryDate,
        delivery_address: deliveryAddress,
        total_amount: totalAmount,
        total_price: totalPrice,
        order_notes: orderNotes,
        // createdAt:
        // updatedAt:
        userId: userId,
        paymentId: paymentId,
        items: products,
        // productId: productId,
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
