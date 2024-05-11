"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var csv_parser_1 = __importDefault(require("csv-parser"));
// Read CSV file and convert to JSON
var csvFilePath = 'Dishes-meals.csv'; // Update with your CSV file path
var jsonFilePath = 'output.json'; // Output JSON file path
var dishArray = [];
(0, fs_1.createReadStream)(csvFilePath)
    .pipe((0, csv_parser_1.default)())
    .on('data', function (row) {
    var dish = {
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
        Steps: row['Steps'].split(',').map(function (step) { return step.trim(); }),
        PrePreparationSteps: row['PrePreparationSteps'],
        CookTasks: '', // Update if CookTasks is present in the CSV
        ImageUpload: '', // Update if ImageUpload is present in the CSV
        ContentURL: '', // Update if ContentURL is present in the CSV
        Equipments: '', // Update if Equipments is present in the CSV
        AllergensInfo: row['AllergensInfo'],
        LeftoverRecycleSuggestion: row['LeftoverRecycleSuggestion'],
        NutritionProfile: '', // Update if NutritionProfile is present in the CSV
        HealthBenefit: '', // Update if HealthBenefit is present in the CSV
    };
    dishArray.push(dish);
})
    .on('end', function () {
    // Write JSON file
    (0, fs_1.writeFileSync)(jsonFilePath, JSON.stringify(dishArray, null, 2));
    console.log('Conversion completed. JSON file created:', jsonFilePath);
});
