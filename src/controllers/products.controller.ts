import { Request, Response, NextFunction } from "express";
import { productService } from "../services/product.service";
import { successResponse } from "../utils/response.util";

export const productsController = {
  createProduct: async (req: Request, res: Response) => {
    const productData = await productService.create(req.body);
    return successResponse(res, "Successfully created a new product.", productData, 201);
  },
  getAllProducts: async (req: Request, res: Response) => {
    const productsData = await productService.getAll();
    return successResponse(res, "Get all products successfully", productsData);
  },
  getProduct: async (req: Request, res: Response) => {
    const productData = await productService.getById(+req.params.id!);
    return successResponse(res, "Get product successfully", productData);
  },
  updateProduct: async (req: Request, res: Response) => {
    const productData = await productService.update(+req.params.id!, req.body);
    return successResponse(res, "Update succesfully", productData);
  },
  deleteProduct: async (req: Request, res: Response) => {
    const productData = await productService.delete(+req.params.id!);
    return successResponse(res, "Delete succesfully", productData, 204);
  },
}