const MongoClient = require('mongodb').MongoClient;

const jsonFilePath = '../output.json'; // Update with your JSON file path
const mongoDBUrl = 'mongodb+srv://shivam:ap7j4XtqLzFiGk9V@lavi0.38zzxun.mongodb.net/?retryWrites=true&w=majority'; // Update with your MongoDB connection string and database name

// Read JSON file
const jsonData = require(jsonFilePath);

// Function to upload data to MongoDB
async function uploadToMongoDB() {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('meal_planner');

    // Specify the collection name
    const collection = db.collection('dish'); // Update with your collection name

    // Insert the JSON data into the collection
    const result = await collection.insertMany(jsonData);
    console.log(`${result.insertedCount} documents inserted`);

    // Close the MongoDB connection
    client.close();
  } catch (error) {
    console.error('Error uploading to MongoDB:', error);
  }
}

// Call the function to upload data
uploadToMongoDB();
