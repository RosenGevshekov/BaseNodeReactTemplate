const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: 'mysql',
    }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Blog = require('./Blog')(sequelize, Sequelize);
db.Page = require('./Page')(sequelize, Sequelize);

module.exports = db;
