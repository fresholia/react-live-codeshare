import express from 'express';
import { body } from 'express-validator';

import { LOGIN_ROUTE } from './route-defs';
import { login } from '../controllers/auth.controller';

const loginRouter = express.Router();

loginRouter.post(
  LOGIN_ROUTE,
  [
    body('username')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Email field may not be blank.'),
    body('password')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Password field may not be blank.')
  ],
  login
);

export default loginRouter;