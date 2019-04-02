export default (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    arrival_date: DataTypes.DATE,
    expiry_date: DataTypes.DATE,
    defected: DataTypes.BOOLEAN,
    warehouseId: DataTypes.INTEGER,
  }, {});
  Stock.associate = (models) => {
    Stock.belongsTo(models.Warehouse, { as: 'warehouse', foreignKey: 'warehouseId' });
    Stock.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
  };
  return Stock;
};