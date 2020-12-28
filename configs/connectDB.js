const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://thanhlong123:thanhlong@cluster0.6vknj.mongodb.net/thanhlong123?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => console.log("connected MongoDB")
    );
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
