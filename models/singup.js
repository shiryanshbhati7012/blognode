import mongoose from "mongoose";



const singupschema = mongoose.Schema({
    name: String,
    email: String,
    password: String

})
const SingupModel = mongoose.model("singup", singupschema)

export default SingupModel;