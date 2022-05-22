const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { Sequelize } = require('../db');

const Op = Sequelize.Op;

const Category = sequelize.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const Product = sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    //   p_description: {
    //     type: DataTypes.TEXT,
    //   },
    //   p_weight: {
    //     type: DataTypes.STRING,
    //   },
    //   p_weight_range: {
    //     type: DataTypes.STRING,
    //   },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
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
  },
  {
    timestamps: false,
  }
);

const Cart = sequelize.define(
  'cart',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    products_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const WishList = sequelize.define(
  'wishList',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

const Coupone = sequelize.define(
  'coupone',
  {
    coupone_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    coupone_code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    coupone_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    discount_start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    discount_exp_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const Payment = sequelize.define(
  'payment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

const Order = sequelize.define(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'PENDING',
      allowNull: false,
    },
    delivery_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_notes: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const Address = sequelize.define(
  'address',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appartment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

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

const OrderProduct = sequelize.define(
  'order_product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

Coupone.hasMany(Cart);
Cart.belongsTo(Coupone);

Address.hasOne(User);
User.belongsTo(Address);

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasOne(WishList);
WishList.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(WishList);
WishList.belongsTo(Product);

Product.hasMany(Cart);
Cart.belongsTo(Product);

Category.hasMany(Product);
Product.belongsTo(Category);

Payment.hasOne(Order);
Order.belongsTo(Payment);

Order.belongsToMany(Product, { through: OrderProduct, onDelete: 'CASCADE' });
Product.belongsToMany(Order, { through: OrderProduct, onDelete: 'CASCADE' });

module.exports = {
  Op,
  User,
  Category,
  Cart,
  WishList,
  Coupone,
  Order,
  Payment,
  Product,
  Address,
  OrderProduct,
};
