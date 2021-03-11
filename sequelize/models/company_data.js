'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  company_data.init({
    logo: DataTypes.STRING,
    url: DataTypes.STRING,
    name: DataTypes.STRING,
    dni: DataTypes.STRING,
    phone: DataTypes.STRING,
    alt_phone: DataTypes.STRING,
    sales_email: DataTypes.STRING,
    support_email: DataTypes.STRING,
    operations_email: DataTypes.STRING,
    current_date: DataTypes.DATE,
    current_hour: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'company_data',
  });
  return company_data;
};