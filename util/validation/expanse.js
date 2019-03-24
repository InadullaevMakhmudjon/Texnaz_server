import { validationResult, checkSchema } from 'express-validator/check';

export const check = checkSchema({
  name: {
    isString: true,
  },
  is_transport: {
    isBoolean: true,
  },
  is_cash: {
    isBoolean: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({
      errors: errors.array(),
    });
  } else {
    req.expanse = {
      name: req.body.name,
      is_transport: req.body.is_transport,
      is_cash: req.body.is_cash,
    };
    next();
  }
}
