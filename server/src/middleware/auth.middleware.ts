import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from '../exceptions/WrongAuthenticationTokenException';
import DataStoredInToken from '../interfaces/dataStoredInToken';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import userModel from '../user/user.model';

async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
  try {
    const cookies = request.cookies;
    if (!cookies?.Authorization) {
      next(new WrongAuthenticationTokenException());
      return;
    }
    const secret = process.env.JWT_SECRET;
    const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
    const id = verificationResponse._id;
    const user = await userModel.findById(id);

    if (!user) {
      next(new WrongAuthenticationTokenException());
      return;
    }
    request.user = user;
    next();
  } catch {
    next(new AuthenticationTokenMissingException());
  }
}

export default authMiddleware;
