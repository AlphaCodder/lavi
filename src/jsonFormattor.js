// import { createReadStream, writeFileSync } from 'fs';
// import csv from 'csv-parser';

// interface Dish {
//   DishID: number;
//   DishName: string;
//   FoodGroup: string;
//   Cuisine: string;
//   Timing: string;
//   Regionality: string;
//   Seasonality: string;
//   DishType: string;
//   ServingSize: {
//     Nos?: number;
//     Adults?: number;
//     Kids?: number;
//   };
//   Ingredients: string;
//   Steps: string[];
//   PrePreparationSteps: string;
//   CookTasks: string;
//   ImageUpload: string;
//   ContentURL: string;
//   Equipments: string;
//   AllergensInfo: string;
//   LeftoverRecycleSuggestion: string;
//   NutritionProfile: string;
//   HealthBenefit: string;
// }

const json = require('./input.json');
const dishArray = [];
json.map((row) => 
    dishArray.push({
      DishID: row['Dish ID'],
      DishName: row['Dish name'],
      FoodGroup: row['Food group'],
      Cuisine: row['Cuisine'],
      Timing: row['Timing'],
      Regionality: '', // Update if Regionality is present in the CSV
      Seasonality: '', // Update if Seasonality is present in the CSV
      DishType: row['Dish type'],
      ServingSize: row['Serving size'],
      Ingredients: row['Ingredients'],
      Steps: row['Steps'],
      PrePreparationSteps: row['Pre prep'],
      CookTasks: '', // Update if CookTasks is present in the CSV
      ImageUpload: '', // Update if ImageUpload is present in the CSV
      ContentURL: row['Content'], // Update if ContentURL is present in the CSV
      Equipments: '', // Update if Equipments is present in the CSV
      AllergensInfo: row['Allergen info'],
      LeftoverRecycleSuggestion: row['Leftover recycle suggestion'],
      NutritionProfile: '', // Update if NutritionProfile is present in the CSV
      HealthBenefit: '', // Update if HealthBenefit is present in the CSV
    })
)

const fs = require('fs');
fs.writeFileSync('./output.json', JSON.stringify(dishArray, null, 2));

