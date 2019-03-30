import auth from './auth';
import users from './users';
import roles from './roles';
import brands from './brands';
import products from './products';
import purposes from './purposes';
import units from './units';
import tags from './tags';
import productTypes from './product-types';
import warehouses from './warehouses';
import configurations from './configurations';
import expanses from './expanses';
import batches from './batches';

export default (app) => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/roles', roles);
  app.use('/api/products', products);
  app.use('/api/purposes', purposes);
  app.use('/api/units', units);
  app.use('/api/tags', tags);
  app.use('/api/product_types', productTypes);
  app.use('/api/brands', brands);
  app.use('/api/warehouses', warehouses);
  app.use('/api/configurations', configurations);
  app.use('/api/expanses', expanses);
  app.use('/api/batches', batches);
};
