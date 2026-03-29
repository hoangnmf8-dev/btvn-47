import { ZodError, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch(error) {
      if(error instanceof ZodError) {
        const zodErrors = Object.fromEntries(
          error.issues.map(({ path, message }) => {
            return [path[0], message];
          }),
        );
        return res.status(400).json(zodErrors);
      }
    }
  }
}