import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb+srv://abderrazakelouazghi02:R4jjhDAI1jkJBjFq@cluster0.h4iwnjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};