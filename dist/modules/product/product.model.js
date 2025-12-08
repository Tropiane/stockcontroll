"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductModel = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    cost: {
        type: Number,
        require: true
    },
    warehouseId: {
        type: String,
        require: true
    },
    categoryId: String,
    variants: []
});
exports.Product = (0, mongoose_1.model)("Product", ProductModel, "products");
