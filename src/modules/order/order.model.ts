import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    date:{
        type: Date,
        require: true
    },
    userId:{
        type: String,
        require: true
    },
    status:{
        type: String,
        require: true
    },
    items: [
        {
            productId: {
                type: String,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            },
            unitPrice: {
                type: Number,
                require: true
            }
        }
    ]  
});

export const Order = mongoose.model("Order", orderSchema, "orders");