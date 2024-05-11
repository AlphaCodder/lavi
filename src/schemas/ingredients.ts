interface RawIngredientSchema {
    RawIngredientID: number
    RawIngredientName: string
    RawIngredientType: string
    RawIngredientNutrition: string
}

interface DishIngredientSchema {
    DishID: number
    RawIngredientID: string
    Quantity: number
    UnitOfMeasure: string
    PrepMethod: string
}   


// Dishes -> Ingredients -> RawIngredients -> RawIngredientNutrition -> NutritionProfile -> HealthBenefit