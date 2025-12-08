"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_dao_1 = require("./product.dao");
class ProductService {
    constructor() {
        this.DAO = new product_dao_1.ProductDAO();
    }
    async get() {
        await this.DAO.get();
    }
    ;
    async getById(id) {
        await this.DAO.getById(id);
    }
    ;
    async create(product) {
        await this.DAO.create(product);
    }
    ;
    async update(id, product) {
        await this.DAO.update(id, product);
    }
    ;
    async delete(id) {
        await this.DAO.delete(id);
    }
}
exports.default = ProductService;
