import { Request, Response } from "express";
import httpStatusCode from "http-status-codes";

const notFound = (req: Request, res: Response) => {
  res.status(httpStatusCode.NOT_FOUND).json({
    success: false,
    message: "Route not found",
  });
};

export default notFound;
