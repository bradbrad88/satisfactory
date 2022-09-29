import { ProductionStep } from "app/slices/productionSteps";
import { items, recipes } from "data";
import { Ingredient } from "data/recipes";
interface Proptypes {
  productionStep: ProductionStep;
}

const Ingredient = ({ ingredient, ratio }: { ingredient: Ingredient; ratio: number }) => {
  return (
    <div className="border-2 border-zinc-300 rounded-md min-w-[100px] p-3">
      <h2 className="font-bold"> {items.map[ingredient.item].name}</h2>
      <div className="p-2">{(ingredient.amount * ratio).toFixed(4)}</div>
    </div>
  );
};

const RequiredInputs = ({ productionStep }: Proptypes) => {
  const recipe = recipes.map[productionStep.recipe];
  const product = recipe.product.find(product => product.item === productionStep.product.item);
  const ratio = productionStep.product.amount / (product?.amount || 1);
  const renderIngredients = () =>
    recipe.ingredients.map(ingredient => (
      <Ingredient
        key={productionStep.id + ingredient.item}
        ingredient={ingredient}
        ratio={ratio}
      />
    ));
  return <div className="grid auto-cols-min grid-flow-col gap-3">{renderIngredients()}</div>;
};

export default RequiredInputs;
