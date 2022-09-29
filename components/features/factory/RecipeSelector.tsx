import { useAppDispatch } from "app/hooks";
import { action } from "app/slices/entities";
import Container from "components/common/Container";
import { items, recipes, buildings } from "data";
import { useEffect, useRef, useState } from "react";

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
    borderColor: selected ? "goldenrod" : undefined,
  };
  const onClick = () => {
    dispatch(action.updateRecipe({ productionStep, recipe: recipe.id }));
  };
  return (
    <Container selected={selected} onClick={onClick}>
      <h2>{recipe.name}</h2>
    </Container>
  );
};

const RecipeSelector = ({ productionStep, item, selected }: Proptypes) => {
  const [hidden, setHidden] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  // Performance optimisation - used to prevent unnecessary searching of arrays for every production step on every click.
  const hiddenRef = useRef(hidden);
  hiddenRef.current = hidden;

  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  const onClick = (e: MouseEvent) => {
    if (hiddenRef.current) return;
    // Don't hide the recipe list if click originated from
    if (e.composedPath().includes(ref.current!)) return;
    setHidden(true);
  };

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
    <div ref={ref} className="relative">
      <button
        className="bg-transparent hover:bg-amber-300 border-[1px] hover:bg-opacity-30 border-amber-500 rounded-md p-1 px-3 transition-colors"
        onClick={() => setHidden(!hidden)}
      >
        Recipes
      </button>
      {!hidden && (
        <div className="absolute left-full bottom-full ml-2 bg-cyan-900 grid auto-cols-min grid-flow-col gap-3 p-3 border-zinc-300 border-2 rounded-md z-10">
          {renderRecipes()}
        </div>
      )}
    </div>
  );
};

export default RecipeSelector;
