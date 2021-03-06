module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    userId: DataTypes.INTEGER,
    exchangeRate: DataTypes.STRING,
    officialRate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {});
  Rate.associate = (models) => {
    Rate.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  return Rate;
};
