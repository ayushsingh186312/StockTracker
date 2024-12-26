import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ayushsingh186312:e3fyj7cjkDcaApq5@cluster0.1bxn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}
