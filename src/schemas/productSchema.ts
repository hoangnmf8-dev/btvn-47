import z from "zod";

export const productSchema = z.object({
  name: z.string().trim()
  .min(1, "This field must not be left blank!")
  .max(100, "Name must not exceed 100 characters!"),
  price: z.number({
    message: "Only enter numbers!"
  })
  .min(1, "This field must not be left blank!"),
  description: z.string().optional(),
});

export const createProductSchema = z.object({
  name: z.string().trim()
  .max(100, "Name must not exceed 100 characters!")
  .optional(),
  price: z.number({
    message: "Only enter numbers!"
  })
  .optional(),
  description: z.string().optional(),
});

