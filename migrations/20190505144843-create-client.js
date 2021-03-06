module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Clients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    icc: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    balance: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
    },
    itn: {
      type: Sequelize.STRING,
    },
    contactPerson: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    provinceId: {
      type: Sequelize.INTEGER,
    },
    regionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Regions',
        key: 'id',
      },
    },
    sphere: {
      type: Sequelize.STRING,
    },
    managerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('Clients'),
};
