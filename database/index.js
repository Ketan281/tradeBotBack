const mongoose = require("mongoose");
//const dotenv = require("dotenv").config();

//mongoose.connect("mongodb://localhost:27017/cryptobot");
// mongoose.connect(
//   "mongodb+srv://cryptobotdb23:s6GhArv6hHWzelvt@crypto-bot-db-cluster1.c3dvarw.mongodb.net/cbbackenddb23"
// );
// mongoose.connect(
//   "mongodb+srv://vaibhavkulkarni1608:1QhRyG0Qy7LyAvoU@cluster0.grqpmo7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// );
mongoose.connect(
  "mongodb+srv://Ketan281:lqEgwZRLYPNHWRb1@cluster0.ux6oa.mongodb.net/mydatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//mongoose.connect(
//  "mongodb+srv://cryptobot-backenduser:fOTwsNy6g3entJ8E@crypto-bot-backend-clus.2icpfvw.mongodb.net/"
//);

const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("Database connected successfully!");
});

conn.on("disconnect", () => {
  console.log("Database disconnected!");
});

conn.on("error", (err) =>
  console.error(err, "<<-- Error in database connection!")
);

module.exports = conn;
