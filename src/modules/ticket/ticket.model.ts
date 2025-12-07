import mongoose, {Schema} from "mongoose";

const ticketSchema = new Schema({
    date:{
        type: Date,
        require: true
    },
    total:{
        type: Number,
        require: true
    },
    orderId:{
        type: String,
        require: true
    }
});

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;