import { Request, Response } from "express";
import type { ProductInterface } from "./product.interface";

import ProductService from "./product.service";

export default class ProductController{
    private Service = new ProductService();

    async get(){
        return await this.Service.get()
    };

    async getById(req: Request<{},{},{id:string}>){
        await this.Service.getById(req.body.id)
    };

    async create(req: Request<{},{},{product:ProductInterface}>){
        console.log(req.body.product);
        
        await this.Service.create(req.body.product);
    };

    async update(req:Request<{},{},{id: string, product:ProductInterface}>){
        const id = req.body.id;
        const product = req.body.product;
        await this.Service.update(id, product);
    };

    async delete(req: Request<{},{}, {id: string}>){
        await this.Service.delete(req.body.id)
    }
}