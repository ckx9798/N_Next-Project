import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://admin:qwer1234@forum.xh1i1.mongodb.net/?retryWrites=true&w=majority&appName=forum";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
