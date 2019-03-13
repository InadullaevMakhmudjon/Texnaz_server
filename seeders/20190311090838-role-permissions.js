module.exports = {
  up: queryInterface => queryInterface.bulkInsert('RolePermission', [{
    roleId: 1,
    permissionId: 1,
  },
  {
    roleId: 1,
    permissionId: 2,
  },
  {
    roleId: 1,
    permissionId: 3,
  },
  {
    roleId: 1,
    permissionId: 4,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('RolePermission', null, {}),
};