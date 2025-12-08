"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDAO = void 0;
const product_model_1 = require("./product.model");
class ProductDAO {
    constructor() {
        this.DB = product_model_1.Product;
    }
    async get() {
        return await this.DB.find({}).lean();
    }
    ;
    async getById(id) {
        return await this.DB.findById(id).lean();
    }
    ;
    async create(product) {
        return (await this.DB.insertOne(product)).save();
    }
    ;
    async update(id, product) {
        return (await this.DB.findByIdAndUpdate(id, { $set: product }))?.save();
    }
    ;
    async delete(id) {
        return (await this.DB.findByIdAndDelete(id));
    }
    ;
}
exports.ProductDAO = ProductDAO;
