import { Request, Response } from "express";
import type { ProductInterface } from "./product.interface";

import ProductService from "./product.service";

export default class ProductController{
    private Service = new ProductService();

    async get(){
        const products = await this.Service.get();
        return products;
        
    };

    async getById(req: Request<{},{},{id:string}>){
        await this.Service.getById(req.body.id)
    };

    async create(req: Request<{},{},ProductInterface>): Promise<void> {
        
        const product = req.body;
        await this.Service.create(product);
    };

    async update(req:Request<{},{},ProductInterface>){
        const id = req.body._id;
        const product = req.body;

        if(!id) return;
        await this.Service.update(id, product);
    };

    async delete(req: Request<{},{}, {id: string}>){
        await this.Service.delete(req.body.id)
    }
}