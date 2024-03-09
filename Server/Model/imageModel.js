import mongoose from "mongoose";

const imageSchema=new mongoose.Schema({
    images:[]
})


export const Image=mongoose.model('Image',imageSchema);