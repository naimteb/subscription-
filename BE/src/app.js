import express from "express";
import dotenv from "dotenv";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", subscriptionRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
