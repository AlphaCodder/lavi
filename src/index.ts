import { createReadStream, writeFileSync } from 'fs';
import csv from 'csv-parser';

interface Dish {
  DishID: number;
  DishName: string;
  FoodGroup: string;
  Cuisine: string;
  Timing: string;
  Regionality: string;
  Seasonality: string;
  DishType: string;
  ServingSize: {
    Nos?: number;
    Adults?: number;
    Kids?: number;
  };
  Ingredients: string;
  Steps: string[];
  PrePreparationSteps: string;
  CookTasks: string;
  ImageUpload: string;
  ContentURL: string;
  Equipments: string;
  AllergensInfo: string;
  LeftoverRecycleSuggestion: string;
  NutritionProfile: string;
  HealthBenefit: string;
}

// Read CSV file and convert to JSON
const csvFilePath = 'Dishes-meals.csv'; // Update with your CSV file path
const jsonFilePath = 'output.json'; // Output JSON file path

const dishArray: Dish[] = [];

createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row: any) => {
    const dish: Dish = {
      DishID: parseInt(row['Dish ID']),
      DishName: row['Dish name'],
      FoodGroup: row['FoodGroup'],
      Cuisine: row['Cuisine'],
      Timing: row['Timing'],
      Regionality: '', // Update if Regionality is present in the CSV
      Seasonality: '', // Update if Seasonality is present in the CSV
      DishType: row['DishType'],
      ServingSize: {
        Nos: parseInt(row['ServingSize']),
        Adults: 0, // Update if Adults serving size is present in the CSV
        Kids: 0, // Update if Kids serving size is present in the CSV
      },
      Ingredients: row['Ingredients'],
      Steps: row['Steps'].split(',').map((step: string) => step.trim()),
      PrePreparationSteps: row['PrePreparationSteps'],
      CookTasks: '', // Update if CookTasks is present in the CSV
      ImageUpload: '', // Update if ImageUpload is present in the CSV
      ContentURL: '', // Update if ContentURL is present in the CSV
      Equipments: '', // Update if Equipments is present in the CSV
      AllergensInfo: row['Allergens info'],
      LeftoverRecycleSuggestion: row['LeftoverRecycleSuggestion'],
      NutritionProfile: '', // Update if NutritionProfile is present in the CSV
      HealthBenefit: '', // Update if HealthBenefit is present in the CSV
    };
    dishArray.push(dish);
  })
  .on('end', () => {
    // Write JSON file
    writeFileSync(jsonFilePath, JSON.stringify(dishArray, null, 2));
    console.log('Conversion completed. JSON file created:', jsonFilePath);
  });


const json = require('./output.json');
