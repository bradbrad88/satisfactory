import { shallowEqual } from "react-redux";
import { useAppSelector } from "app/hooks";
import { getRequiredInputs, ProductionStep } from "app/slices/productionSteps";
import Transput from "./Transput";

interface Proptypes {
  productionStep: ProductionStep;
}

const RequiredInputs = ({ productionStep }: Proptypes) => {
  const ingredients = useAppSelector(getRequiredInputs(productionStep.id), shallowEqual);

  const renderIngredients = () =>
    ingredients?.map(ingredient => (
      <Transput
        key={productionStep.id + ingredient.item + "consumer"}
        productionStep={productionStep}
        product={ingredient}
        io="consumer"
      />
    )) || [];

  return <div className="grid auto-cols-min grid-flow-col gap-3">{renderIngredients()}</div>;
};

export default RequiredInputs;
