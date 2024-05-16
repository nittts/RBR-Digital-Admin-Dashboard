import mongoose from "mongoose";

export default function connectMongo() {
  const url = process.env.MONGO_URL || "";

  try {
    mongoose.connect(url);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    process.exit(1);
  }

  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });

  return dbConnection;
}
