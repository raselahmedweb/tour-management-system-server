import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mongodb:mongodb@cluster0.zmilpe0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
    server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};
startServer();

// Handle graceful shutdown
process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
