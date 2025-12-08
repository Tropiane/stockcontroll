import { Product } from "./product.model";
import type { ProductInterface } from "./product.interface";

export class ProductDAO{
    DB = Product;

    async get(){
        const products = await this.DB.find({}).lean()
        return products
    };

    async getById(id: string){
        return await this.DB.findById(id).lean()
    };

    async create(product: ProductInterface){
        return (await this.DB.insertOne(product)).save()
    };

    async update(id: string, product:ProductInterface){
        return (await this.DB.findByIdAndUpdate(id, {$set:product}))?.save();
    };

    async delete(id: string){
        return(await this.DB.findByIdAndDelete(id))
    };
}