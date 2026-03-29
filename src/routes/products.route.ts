import express from "express";
import { productsController } from "../controllers/products.controller";
import { createProductSchema, productSchema } from "../schemas/productSchema";
import { validate } from "../middlewares/validate.middleware";

const router = express.Router();

router.post("/products", validate(productSchema), productsController.createProduct);
router.get("/products",productsController.getAllProducts);
router.get("/products/:id",productsController.getProduct);
router.put("/products/:id", validate(createProductSchema), productsController.updateProduct);
router.delete("/products/:id", productsController.deleteProduct);

export default router;