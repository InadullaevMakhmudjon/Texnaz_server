export default (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    number: DataTypes.STRING,
    comment: DataTypes.STRING,
    approved: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    ratio: DataTypes.DOUBLE,
    currentClientBalance: DataTypes.DOUBLE,
    managerId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    sum: DataTypes.DOUBLE,
    currency: DataTypes.INTEGER,
    exchangeRate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    provinceId: DataTypes.INTEGER,
  }, {});
  Payment.associate = (models) => {
    Payment.belongsTo(models.Brand, { as: 'brand' });
    Payment.belongsTo(models.Client, { as: 'client' });
    Payment.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Payment.belongsTo(models.User, { as: 'manager', foreignKey: 'managerId' });
    Payment.belongsTo(models.Province, { as: 'province', foreignKey: 'provinceId' });
  };
  return Payment;
};
