import { faker } from "@faker-js/faker";

export const generatebungalowData = (): propertyData => {
  // Generate random property data
  const generatedpropertyData = {
    type: 'bungalow',
    buyingprice: faker.number.int({ min: 79, max: 86 }),
    sellingprice: faker.number.int({ min: 2, max: 78 }),
    rentprice: faker.number.int({ min: 65, max: 75 }),
  };

  // Return property data
  return generatedpropertyData;
};

export const generatecottageData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'cottage',
      buyingprice: faker.number.int({ min: 79, max: 86 }),
      sellingprice: faker.number.int({ min: 2, max: 78 }),
      rentprice: faker.number.int({ min: 65, max: 75 }),
    };
  
    // Return property data
    return generatedpropertyData;
  };


  export const generateterracedData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'terraced',
        buyingprice: faker.number.int({ min: 79, max: 86 }),
        sellingprice: faker.number.int({ min: 2, max: 78 }),
        rentprice: faker.number.int({ min: 65, max: 75 }),
    };
  
    // Return property data
    return generatedpropertyData;
  };


  export const generateflatData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'flat',
        buyingprice: faker.number.int({ min: 79, max: 86 }),
        sellingprice: faker.number.int({ min: 2, max: 78 }),
        rentprice: faker.number.int({ min: 65, max: 75 }),
    };
  
    // Return property data
    return generatedpropertyData;
  };
