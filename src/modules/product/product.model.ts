import {model, Schema} from 'mongoose';

const ProductModel = new Schema({
    name: {
        type: String,
        require: true
    },
    description:{
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
})

export const Product = model("Product", ProductModel, "products");