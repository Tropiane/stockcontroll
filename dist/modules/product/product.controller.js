"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("./product.service"));
class ProductController {
    constructor() {
        this.Service = new product_service_1.default();
    }
    async get() {
        return await this.Service.get();
    }
    ;
    async getById(req) {
        await this.Service.getById(req.body.id);
    }
    ;
    async create(req) {
        console.log(req.body.product);
        await this.Service.create(req.body.product);
    }
    ;
    async update(req) {
        const id = req.body.id;
        const product = req.body.product;
        await this.Service.update(id, product);
    }
    ;
    async delete(req) {
        await this.Service.delete(req.body.id);
    }
}
exports.default = ProductController;
