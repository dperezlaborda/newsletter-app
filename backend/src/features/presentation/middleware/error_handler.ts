import { Response, Request, NextFunction } from 'express';

export const ErrorHandler = async (err: Error, req: Request, res: Response, next: NextFunction ) => {
  return res.status(500).json({ 
    statusCode: 500,
    message: "Internal Server Error",
  });
};

