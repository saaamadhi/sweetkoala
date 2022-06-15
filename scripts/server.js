require('dotenv').config();
const app = require('../server/app');
const sequelize = require('../server/db');
const models = require('../server/models/models');
const PORT = process.env.SERVER_PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();//подключение к БД
    await sequelize.sync(); // сверяет сост БД со схемой
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }
  catch (e) {
    console.log(e);
  }
}

start();
