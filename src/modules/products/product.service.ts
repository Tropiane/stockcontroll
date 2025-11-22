import type { ProductInterface } from "./product.interface";

import { ProductDAO } from "./product.dao";

export default class ProductService{
    private DAO = new ProductDAO();

    async get(){
        await this.DAO.get()
    };

    async getById(id: string){
        await this.DAO.getById(id)
    };

    async create(product: ProductInterface){
        await this.DAO.create(product);
    };

    async update(id: string, product: ProductInterface){
        await this.DAO.update(id, product)
    };

    async delete(id: string){
        await this.DAO.delete(id)
    }
}