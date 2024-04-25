import { faker } from '@faker-js/faker';

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city: "London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    city: "Dublin",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
export const generateLondonWeatherDayData = (): WeatherDayData => {
  // Generate random weather data
  const generatedWeatherDayData ={
    dayOne: 14,
    dayTwo: 23,
    dayThree: 17,
  };
  // Return weather data
  return generatedWeatherDayData;
};
export const generateDublinstormPath = (): stormPath => {
  //generate random storm path
  const generateDublinstormPath ={
    city: "dublin",
    Path: 75,
    catigory: 7,
    direction: "North",
  }; 
  return generateDublinstormPath;
};