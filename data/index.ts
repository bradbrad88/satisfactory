import buildingsData, { Building } from "./buildings";
import recipesData, { Recipe } from "./recipes";
import itemsData, { ItemWithoutRecipes } from "./items";
// import { RootShape } from "app/store";

interface RootShape<T> {
  map: { [key: string]: T };
  array: T[];
  produceItems?: T[];
}

interface Item extends ItemWithoutRecipes {
  createdBy: Recipe[];
  canCreate: Recipe[];
}

export type { Building, Item, Recipe };

// Transform buildings to root shape
const buildings = buildingsData.reduce(
  (buildings: RootShape<Building>, building: Building) => {
    const { id } = building;
    buildings.array.push(building);
    buildings.map[id] = building;
    return buildings;
  },
  { map: {}, array: [] }
);

// Transform recipes to root shape
const recipes = recipesData.reduce(
  (recipes: RootShape<Recipe>, recipe: Recipe) => {
    const { id } = recipe;
    recipes.array.push(recipe);
    recipes.map[id] = recipe;
    return recipes;
  },
  {
    map: {},
    array: [],
  }
);

// Transform items to root shape, apply empty array so they are ready to receive recipes
const items = itemsData.reduce(
  (items: RootShape<Item>, item: ItemWithoutRecipes) => {
    const { id } = item;
    const newItem = { ...item, createdBy: [], canCreate: [] };
    items.array.push(newItem);
    items.map[id] = newItem;
    return items;
  },
  { map: {}, array: [], produceItems: [] }
);

items.array.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

items.produceItems = items.array.filter(item => {
  return recipes.array.some(recipe =>
    recipe.product.some(recipeItem => recipeItem.item === item.id)
  );
});

// Attach recipes to items where they are the product of the recipe
recipes.array.forEach(recipe => {
  recipes.map[recipe.id].product.forEach(ingredient => {
    items.map[ingredient.item].createdBy.push(recipe);
  });
});

export { buildings, recipes, items };
