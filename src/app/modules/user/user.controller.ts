import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // throw new Error("Fake error");
    const user = await UserServices.createUser(req.body);
    res.status(httpStatus.CREATED).json({
      message: "User created successfully",
      user,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    next(err);
  }
};

export const UserControllers = {
  createUser,
};
