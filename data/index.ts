import buildingsData, { Building } from "./buildings";
import recipesData, { Recipe } from "./recipes";
import itemsData, { ItemWithoutRecipe } from "./items";
import { RootShape } from "app/store";

interface Item extends ItemWithoutRecipe {
  recipes: string[];
}

export type { Building, Item, Recipe };

// Transform buildings to root shape
const buildings = buildingsData.reduce(
  (map: RootShape<Building>, building: Building) => {
    const { id } = building;
    map.allIds.push(id);
    map.byId[id] = building;
    return map;
  },
  { byId: {}, allIds: [] }
);

// Transform recipes to root shape
const recipes = recipesData.reduce(
  (map: RootShape<Recipe>, recipe: Recipe) => {
    const { id } = recipe;
    map.allIds.push(id);
    map.byId[id] = recipe;
    return map;
  },
  {
    byId: {},
    allIds: [],
  }
);

// Transform items to root shape, apply empty array so they are ready to receive recipes
const items = itemsData.reduce(
  (map: RootShape<Item>, item: ItemWithoutRecipe) => {
    const { id } = item;
    map.allIds.push(id);
    map.byId[id] = { ...item, recipes: [] };
    return map;
  },
  { byId: {}, allIds: [] }
);

// Attach recipes to items where they are the product of the recipe
recipes.allIds.forEach(recipeId => {
  recipes.byId[recipeId].product.forEach(ingredient => {
    items.byId[ingredient.item].recipes.push(recipeId);
  });
});

export { buildings, recipes, items };
