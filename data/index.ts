import buildingsData from "./buildings.json";
import recipesData from "./recipes.json";
import itemsData from "./items.json";

export interface Building {
  id: string;
  name: string;
  description: string;
  power: number;
  powerExponent: number;
  category: "PRODUCTION" | "EXTRACTOR" | "GENERATOR";
}

export interface Item {
  id: string;
  name: string;
  stackSize: string;
  points: number;
  icon: string;
  rawResource: boolean;
}

export interface Ingredient {
  item: Item;
  amount: number;
}

export interface Recipe {
  id: string;
  name: string;
  alternate: boolean;
  building: Building;
  ingredients: Ingredient[];
  product: Ingredient[];
  duration: number;
}

const buildingMap = new Map(buildingsData.map(building => [building.id, building]));

const itemMap = new Map(itemsData.map(item => [item.id, item]));

const processedRecipes = recipesData.map(recipe => ({
  ...recipe,
  building: buildingMap.get(recipe.building),
  ingredients: recipe.ingredients.map(ingredient => ({
    ...ingredient,
    item: itemMap.get(ingredient.item),
  })),
  product: recipe.product.map(product => ({ ...product, item: itemMap.get(product.item) })),
})) as Recipe[];

const recipeMap = new Map(processedRecipes.map(recipe => [recipe.id, recipe]));

export const {
  buildingMap: buildings,
  recipeMap: recipes,
  itemMap: items,
} = { buildingMap, itemMap, recipeMap };
