import mongoose, {Schema} from "mongoose";

const categoryModel = new Schema({
    name:{
        type: String,
        require: true
    }
})

const Category = mongoose.model("Category", categoryModel);

export default Category;