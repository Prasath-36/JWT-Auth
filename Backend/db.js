import mongoose from "mongoose";

const connectDB = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log("Could not connect to the database");
    console.log(error.message);
  }
};

export default connectDB;
