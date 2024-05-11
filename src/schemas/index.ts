// v0

interface HouseholdProfile {
    ProfileID: number;
    ProfileName: string;
    UserIDs: number[]; // Assuming association with users
    Preference: string;
    NutritionNeeds: string;
    HealthConditions: string;
    // Other relevant household member data
}

interface GroceryList {
    GroceryListID: number;
    MealID: number;
    Ingredient: string;
    Quantity: string;
    // Other relevant grocery list details
}

interface Meal {
    MealID: number;
    Dishes: Dish[]; // Array of dishes
    ImageUpload: string;
    MealTiming: string;
    Cuisine: string; // Derived
    ServingSize: string;
    FoodGroup: string;
    NutritionProfile: string;
    HealthBenefit: string;
    UserID: number; // Assuming association with a user
    WeekStartDate: string; // Consider using a date type
    WeekEndDate: string; // Consider using a date type
    GeneratedBy: number; // ID of the Meal Planner user
    Feedback: string;
    ReminderSent: boolean;
    // Other relevant meal details
}

// prePrep contained in Dishes.
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


interface User {
    UserID: number;
    Username: string;
    Password: string; // hashed
    Email: string;
    FullName: string;
    Demographics: {
      Age: number;
      Gender: string;
      // Other demographic information
    };
    Prakriti: string; // Ayurvedic constitution
    FoodPreferences: string[];
    KitchenOperations: {
      PreferredCookingStyle: string;
      EquipmentAvailability: string[];
      // Other kitchen-related information
    };
    HealthAndLifestyle: {
      HealthConditions: string[];
      LifestylePreferences: string[];
      // Other health and lifestyle information
    };
    MealPlans: {
      WeeklyMealPlanIDs: number[]; // Assuming associations with meal plans
      // Other meal plan-related information
    };
    // Other relevant user details
}
  

interface MealPlan {
    MealPlanID: number;
    UserID: number; // Assuming association with a user
    WeekStartDate: string; // Consider using a date type
    WeekEndDate: string; // Consider using a date type
    Meals: Meal[];
    GroceryList: GroceryList[];
    // Other relevant meal plan details
}




// v1

interface Feedback {
    FeedbackID: number;
    UserID: number;
    MealID: number;
    FeedbackText: string;
    FeedbackDate: string; // Consider using a date type
}

interface Recommendation {
    RecommendationID: number;
    UserID: number;
    RecommendedMealID: number;
    // Other relevant recommendation details
}
