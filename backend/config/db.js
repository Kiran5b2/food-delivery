import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://skiranFD:lnsk17FD@cluster0.tmtxlp8.mongodb.net/FD').then(()=>console.log("DB connected"));
}