import { useAppDispatch, useAppSelector } from "app/hooks";
import { EdgeOneSide } from "app/slices/edges";
import { action } from "app/slices/entities";
import { getActiveFactory } from "app/slices/factories";
import { items } from "data";
import Container from "components/common/Container";

import type { Recipe } from "data";

interface Proptypes {
  recipes: Recipe[];
  amount: number;
  // Refers to the ingredient item. Produced item needs to be derived from this
  item: string;
  id: string;
  location: { x: number; y: number };
  close: () => void;
}

const RecipeList = ({ recipes, amount, item, id, location, close }: Proptypes) => {
  const dispatch = useAppDispatch();
  const factory = useAppSelector(getActiveFactory)!;

  const createProductionStepFromOutput = (recipe: Recipe) => {
    // Get product from recipe - try to avoid by-product - go for highest points for now
    const product = recipe.product.reduce((highestPoints, product) => {
      return items.map[product.item].points > items.map[highestPoints.item].points
        ? product
        : highestPoints;
    });

    const recipeItem = recipe.ingredients.find(ingredient => ingredient.item === item)!;
    const ratio = amount / recipeItem.amount;

    const edge: EdgeOneSide = {
      supplier: id,
      amount,
      item,
      dependant: "CONSUMER",
    };
    const productionStep = {
      factory,
      product: { ...product, amount: product.amount * ratio },
      location,
      recipe: recipe.id,
    };

    dispatch(
      action.createProductionStepAndLinkEdge({
        edge,
        productionStep,
      })
    );
    close();
  };

  return (
    <Container>
      {recipes.map(recipe => (
        <div
          className="text-white hover:bg-zinc-600 text-lg px-1"
          key={recipe.id}
          onClick={() => createProductionStepFromOutput(recipe)}
        >
          {recipe.name}
        </div>
      ))}
    </Container>
  );
};

export default RecipeList;
