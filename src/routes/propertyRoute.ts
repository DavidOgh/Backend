import express from "express";
import { getpropertyData } from "../controllers/propertyController.js";
import { validatepropertyName } from "../middleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:property", validatepropertyName, getpropertyData);

// We will export the router
export default router;
