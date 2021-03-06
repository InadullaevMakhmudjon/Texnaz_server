import { validationResult, checkSchema } from 'express-validator/check';
import models from '../../models';
import exists from '../check';

export const check = checkSchema({
  icc: {
    isString: true,
  },
  name: {
    isString: true,
  },
  itn: {
    isString: true,
  },
  contactPerson: {
    isString: true,
  },
  phone: {
    isString: true,
  },
  sphere: {
    isString: true,
  },
  provinceId: {
    isInt: true,
  },
  managerId: {
    isInt: true,
    custom: {
      options: id => exists(models.User, id),
    },
  },
  createdAt: {
    isString: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.client = {
      icc: req.body.icc,
      name: req.body.name,
      itn: req.body.itn,
      contactPerson: req.body.contactPerson,
      phone: req.body.phone,
      provinceId: req.body.provinceId,
      regionId: req.body.regionId,
      sphere: req.body.sphere,
      managerId: req.body.managerId,
      createdAt: req.body.createdAt,
    };
    next();
  }
}
