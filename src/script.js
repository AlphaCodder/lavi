const fs = require('fs');
const { spawn } = require("child_process");

// MongoDB connection parameters
const dbName = 'meal_planner';
const collectionName = 'dish';

// Path to the output JSON file
const jsonFilePath = 'output.json';

// Read the JSON file
const jsonData = fs.readFileSync(jsonFilePath);

// Parse the JSON data
const jsonArray = JSON.parse(jsonData);

jsonArray.map((dish) => {
    spawn(` mongoimport --uri  mongodb+srv://shivam:ap7j4XtqLzFiGk9V@lavi0.38zzxun.mongodb.net/meal_planner  --collection dishes  --type  JSON   --file  dish`);
})