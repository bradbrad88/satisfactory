import { useAppDispatch } from "app/hooks";
import { action } from "app/slices/entities";
import { items, recipes, buildings } from "data";
import { useState } from "react";

interface Proptypes {
  productionStep: string;
  item: string;
  selected: string;
}

const Recipe = ({
  productionStep,
  id,
  selected,
}: {
  productionStep: string;
  id: string;
  selected: boolean;
}) => {
  const dispatch = useAppDispatch();
  const recipe = recipes.map[id];
  const styles: React.CSSProperties = {
    borderColor: selected ? "yellow" : undefined,
  };
  const onClick = () => {
    dispatch(action.updateRecipe({ productionStep, recipe: recipe.id }));
  };
  return (
    <div
      className="border-zinc-300 border-2 rounded-lg p-2 hover:shadow-md hover:shadow-zinc-400 shadow-lg cursor-pointer min-w-[100px]"
      style={styles}
      onClick={onClick}
    >
      <h2>{recipe.name}</h2>
    </div>
  );
};

const RecipeSelector = ({ productionStep, item, selected }: Proptypes) => {
  const [hidden, setHidden] = useState(true);

  const recipes = items.map[item]?.recipes;
  const renderRecipes = () => {
    return recipes.map(recipe => (
      <Recipe
        key={recipe.id}
        productionStep={productionStep}
        id={recipe.id}
        selected={selected === recipe.id}
      />
    ));
  };

  return (
    <div>
      <h2
        className="font-bold cursor-pointer hover:text-yellow-200"
        onClick={() => setHidden(!hidden)}
      >
        Recipes
      </h2>
      {!hidden && (
        <div className="grid auto-cols-min grid-flow-col gap-3">{renderRecipes()}</div>
      )}
    </div>
  );
};

export default RecipeSelector;
