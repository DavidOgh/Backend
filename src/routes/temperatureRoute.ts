import express from "express";
import { getTempData } from "../controllers/temperatureController.js";
import { validateCityName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city", validateCityName, getTempData);

// We will export the router
export default router;
