import { Request, Response } from "express";
import {
  generatebungalowData,
  generatecottageData,
  generateterracedData,
  generateflatData,

} from "../services/propertyService.js";
import { validationResult } from "express-validator";

/**
 * Gets the weather data for a property
 * @param req the request object
 * @param res the response object
 */
export const getpropertyData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the property param from the request
    const { property } = req.params;
    console.log(property);

    // We will create a variable with a type of WeatherData
    let finalWeatherData: propertyData;

    // We will use an if statement to check which city was passed in
    if (property === "bungalow") {
      console.log(generatebungalowData());
      finalWeatherData = generatebungalowData();
    } else if (property === "cottage") {
      finalWeatherData = generatecottageData();
    } else if (property === "terraced") {
        finalWeatherData = generateterracedData();
    } else if (property === "flat") {
        finalWeatherData = generateflatData();
    } else {
      // If the property is not bungalow, cottage, terraced or flat we will throw an error
      res.status(404).send("property not found");
    }

    // We will return the property data as JSON
    res.status(200).json(finalWeatherData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching property data");
  }
};
