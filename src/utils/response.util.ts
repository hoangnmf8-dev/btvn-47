import { Response } from "express";

export const errorResponse = (res: Response, message: string = "Internal Server Error", status = 500) => {
  return res.status(status).json({
    success: false,
    status, 
    message
  })
}

export const successResponse = <T>(res: Response, message: string, data: T, status = 200) => {
  return res.status(status).json({
    success: true,
    status,
    data
  })
}