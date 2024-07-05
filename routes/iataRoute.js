import express from "express";
import { getIataDataController } from "../controllers/iataController.js";

const router = express.Router();

router.get("/", getIataDataController);

export default router;
