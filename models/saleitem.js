export default (sequelize, DataTypes) => {
  const SaleItem = sequelize.define('SaleItem', {
    saleId: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER,
    priceId: DataTypes.INTEGER,
    paidPrice: DataTypes.DOUBLE,
    debtPrice: DataTypes.DOUBLE,
    quantity: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    commissionPrice: DataTypes.DOUBLE,
    commissionPriceUsd: DataTypes.DOUBLE,
  }, {});
  SaleItem.associate = (models) => {
    SaleItem.belongsTo(models.Price, { as: 'price' });
    SaleItem.belongsTo(models.Stock, { as: 'stock' });
    SaleItem.belongsTo(models.Sale, { as: 'sale' });
  };
  return SaleItem;
};
