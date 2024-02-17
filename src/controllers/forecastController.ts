import { Request, Response } from "express";
import { forecastLondon } from '../services/forecastService.js';

export const getForecast = async (req: Request, res: Response) => {
    try {
        const { city } = req.params;
        console.log(city);
        let forecastData: Forecast;

        if (city == 'london') {
            forecastData = forecastLondon();
            console.log(forecastData);
        } else {
            res.status(404).send("City not found");
        }

        res.status(200).json(forecastData);
    } catch (e) {
        res.status(500).send("Error");
    }
};