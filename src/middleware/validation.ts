import type { Request, Response, NextFunction } from "express";
import { ZodType, ZodError } from "zod";

export const validateBody = (schema: ZodType<any>) => {
  // this is the middleware function returned by our validation function. Notice it has the three required parameters for the middleware
  return (req: Request, res: Response, next: NextFunction) => {
    // try-catch is used because of possible errors found by zod when checking the schema
    try {
      const validatedData = schema.parse(req.body);
      // this 'validatedData' object is reassigned to the original req.body to make sure the next function has
      // eventual type coersions or default's assignments by zod schema validations
      req.body = validatedData;
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        return res.status(400).json({
          error: "Schema validation failed",
          /* This indicates where the validation error occurred */
          details: e.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });
      }
      // if it's not a schema validation error, throw it forward to be handled by the next function in the chain
      next(e);
    }
  };
};
