import { generateLondonWeatherData } from './weatherService.js';

export const forecastLondon = (): Forecast => {
    const forecastData = {
        dayOne: generateLondonWeatherData().temperature,
        dayTwo: generateLondonWeatherData().temperature,
        dayThree: generateLondonWeatherData().temperature,
    };

    return forecastData;
}