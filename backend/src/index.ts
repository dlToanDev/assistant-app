import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth";

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
