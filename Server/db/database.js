import mongoose from "mongoose";

export const connectToMongo=()=>{
    mongoose.connect('Your mogodb url').then(()=>{
        console.log("--------Database connected succesfully---------")
    }).catch((error)=>{
        console.log(error.message);
    })
}