import { useAppSelector } from "app/hooks";
import { getRequiredInputs } from "app/slices/productionSteps";
import IODrag from "./IODrag";
interface Proptypes {
  productionStep: string;
}

const RequiredInputs = ({ productionStep }: Proptypes) => {
  const ingredients = useAppSelector(getRequiredInputs(productionStep));

  const renderIngredients = () =>
    ingredients?.map(ingredient => (
      <IODrag
        key={productionStep + ingredient.item + "input"}
        product={ingredient}
        io="input"
        productionStep={productionStep}
      />
    )) || [];
  return <div className="grid auto-cols-min grid-flow-col gap-3">{renderIngredients()}</div>;
};

export default RequiredInputs;
