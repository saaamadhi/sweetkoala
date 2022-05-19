const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { Sequelize } = require('../db');

// const Category = sequelize.define('category', {
//   category_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   category_name: {
//     type: DataTypes.STRING,
//     unique: true,
//   },
// });

// const Product = sequelize.define('product', {
//   p_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   p_name: {
//     type: DataTypes.STRING,
//     unique: true,
//   },
//   p_description: {
//     type: DataTypes.TEXT,
//   },
//   p_weight: {
//     type: DataTypes.STRING,
//   },
//   p_weight_range: {
//     type: DataTypes.STRING,
//   },
//   p_price: {
//     type: DataTypes.DOUBLE,
//   },
//   p_max_quantity: {
//     type: DataTypes.DOUBLE,
//   },
//   p_max_quantity_range: {
//     type: DataTypes.STRING,
//   },
//   p_company: {
//     type: DataTypes.STRING,
//   },
//   p_manufacturer: {
//     type: DataTypes.STRING,
//   },
//   p_on_sale: {
//     type: DataTypes.BOOLEAN,
//   },
//   p_discount_price: {
//     type: DataTypes.DOUBLE,
//   },
//   p_thumb: {
//     type: DataTypes.STRING,
//   },
// });

// const Cart = sequelize.define('cart', {
//   cart_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   products_quantity: {
//     type: DataTypes.INTEGER,
//   },
// });

// const WishList = sequelize.define('wishList', {
//   w_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
// });

// const Coupone = sequelize.define('coupone', {
//   coupone_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   coupone_code: {
//     type: DataTypes.STRING,
//     unique: true,
//   },
//   coupone_status: {
//     type: DataTypes.STRING,
//   },
//   discount_percent: {
//     type: DataTypes.INTEGER,
//   },
//   discount_amount: {
//     type: DataTypes.DOUBLE,
//     allowNull: true,
//   },
//   discount_start_date: {
//     type: DataTypes.DATE,
//   },
//   discount_exp_date: {
//     type: DataTypes.DATE,
//   },
// });

// const Payment = sequelize.define('payment', {
//   payment_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   payment_type: {
//     type: DataTypes.STRING,
//   },
//   payment_status: {
//     type: DataTypes.STRING,
//   },
//   payment_number: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   payment_date: {
//     type: DataTypes.DATE,
//     allowNull: true,
//   },
// });

// const Order = sequelize.define(
//   'order',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     user_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_surname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_phone: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
//       allowNull: false,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
//     },
//     status: {
//       type: DataTypes.STRING,
//       defaultValue: 'PENDING',
//       allowNull: false,
//     },
//     delivery_type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     delivery_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     total_amount: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     total_price: {
//       type: DataTypes.DOUBLE,
//       allowNull: false,
//     },
//     delivery_address: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     order_notes: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

// const Address = sequelize.define(
//   'address',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     country: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     region: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     city: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     postcode: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     street: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     appartment: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'CLIENT',
      allowNull: false,
    },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // surname: {
    //   type: DataTypes.STRING,
    // },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // phone: {
    //   type: DataTypes.STRING,
    // },
    // avatar: {
    //   type: DataTypes.STRING,
    // },
  },
  {
    timestamps: false,
  }
);

// const OrderProduct = sequelize.define('order_product', {
//   op_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
// });

// Product.hasMany(Cart);
// Cart.belongsTo(Product);

// Coupone.hasMany(Cart);
// Cart.belongsTo(Coupone);

// Cart.hasOne(User);
// User.belongsTo(Cart, {
//   foreignKey: {
//     allowNull: true,
//   },
// });

// Product.hasMany(WishList);
// WishList.belongsTo(Product);

// User.belongsTo(Address, {
//   foreignKey: {
//     allowNull: true,
//   },
// });

// Category.hasMany(Product, {
//   foreignKey: {
//     allowNull: true,
//   },
//   onDelete: 'RESTRICT',
// });
// Product.belongsTo(Category);

// Order.belongsTo(User, {
//   foreignKey: {
//     allowNull: false,
//   },
// });

// WishList.hasOne(User);
// User.belongsTo(WishList, {
//   foreignKey: {
//     allowNull: true,
//   },
// });

// Payment.hasOne(Order);
// Order.belongsTo(Payment);

// Order.belongsToMany(Product, { through: OrderProduct, onDelete: 'CASCADE' });
// Product.belongsToMany(Order, { through: OrderProduct, onDelete: 'CASCADE' });

module.exports = {
  User,
  // Cart,
  // WishList,
  // Coupone,
  // Order,
  // Payment,
  // Product,
  // Address,
  // OrderProduct,
};
