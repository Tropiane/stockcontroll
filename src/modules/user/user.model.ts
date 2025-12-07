import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    role: ["admin", "editor", "viewer"]
});

const User = mongoose.model("User", userSchema);

export default User;