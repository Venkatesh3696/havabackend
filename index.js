import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/dbConn.js";
import iataRouter from "./routes/iataRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/iata", iataRouter);

try {
  await sequelize.authenticate();
  console.log("db Connected");
} catch (error) {
  console.log("DB Error ", error);
}

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.use("/search", iataRouter);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server is running on port 5000"));
});
