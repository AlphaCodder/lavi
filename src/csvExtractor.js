const fs = require('fs');
const csv = require('csv-parser');

const dishArray = [];
const csvFilePath = 'data/Dishes-meals.csv'; // Update with your CSV file path
const jsonFilePath = 'output.json'; // Output JSON file path

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    const dish = {
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
      Steps: row['Steps'].split(',').map((step) => step.trim()),
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
  .on('end', () => {
    // Write JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(dishArray, null, 2));
    console.log('Conversion completed. JSON file created:', jsonFilePath);
  });
