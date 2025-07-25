import express from "express";
import dotenv from "dotenv";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import merchantRoutes from "./routes/merchantRoute.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);
app.use("/api/merchants", merchantRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//pull
