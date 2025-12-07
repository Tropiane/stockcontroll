import mongoose, {Schema} from "mongoose";

const warehouseSchema = new Schema({
    name:{
        type: String,
        require: true
    }
})

const Warehouse = mongoose.model("Warehouse", warehouseSchema);
export default Warehouse;