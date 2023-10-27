import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Food', 'root', 'admin123', {
  host: 'localhost',     
  dialect: 'mysql',
  port:3306,
});

export default sequelize;
