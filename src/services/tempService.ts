import { faker } from "@faker-js/faker";

export const generateLondonTemperatureData = (): TempData => {
  // Generate random weather data
  const generatedTempData = {
    Dayone : faker.number.int({ min: -15, max: 30 }),
    Daytwo: faker.number.int({ min: 79, max: 86 }),
    Daythree: faker.number.int({ min: 2, max: 78 }),
  };

  // Return weather data
  return generatedTempData;
};
