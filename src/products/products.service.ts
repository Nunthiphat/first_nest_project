import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private readonly products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
    ]
    
    getAllProducts() {
        return this.products;
    }

    createProduct(product){
        this.products.push(product);
        return this.products;
    }
}
