import { BadRequest } from "../exceptions/BadRequest.exception";
import { NotFound } from "../exceptions/NotFound.exception";
import { productCreateData, productUpdateData } from "../types";
import { prisma } from "../utils/prima.util";

export const productService = {
  //Kiểm tra xem tồn tại product chưa
  async create(productData: productCreateData) {
    const existingProduct = await prisma.product.findFirst({
      where: { 
        name: {
          equals: productData.name,
          mode: 'insensitive' 
        } 
      },
    });

    if(existingProduct) {
      throw new BadRequest("The product already exists!");
    };

    return prisma.product.create({
      data: productData
    });
  },
  getAll() {
    return prisma.product.findMany();
  },
  async getById(id: number) {
    const productData = await prisma.product.findUnique({
      where: {
        id
      }
    });
    if(!productData?.name) {
      throw new NotFound("No product found!");
    };
    return productData;
  },
  async update(id: number, dataUpdate: productUpdateData) {
    const existingProduct = await prisma.product.findFirst({
      where: { 
        id
      },
    }); 
    if(!existingProduct?.name) {
      throw new NotFound("No product found!");
    };

    return prisma.product.update({
      where: {id},
      data: dataUpdate
    })
  },
  async delete(id: number) {
    const existingProduct = await prisma.product.findFirst({
      where: { 
        id
      },
    }); 
    if(!existingProduct?.name) {
      throw new NotFound("No product found!");
    };
    
    return prisma.product.delete({
      where: {id}
    })
  }
}