import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const result = new this.productModel(createProductDto);
    return result.save();
  }

  async findAll(): Promise<Product[]> {  
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<ProductDocument | null> { 
    return this.productModel.findById(id).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const result = this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
    return result;
  }

  remove(id: string) {
    const result = this.productModel.findByIdAndDelete(id).exec();
    return result[id], " has been deleted successfully.";
  }
}
