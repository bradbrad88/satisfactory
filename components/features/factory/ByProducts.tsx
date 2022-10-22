import { useAppSelector } from "app/hooks";
import { getByProducts, ProductionStep } from "app/slices/productionSteps";
import { shallowEqual } from "react-redux";
import Transput from "./Transput";

interface Proptypes {
  productionStep: ProductionStep;
}

const ByProducts = ({ productionStep }: Proptypes) => {
  const byProducts = useAppSelector(getByProducts(productionStep.id), shallowEqual);

  const renderByProducts = () => {
    return (
      byProducts?.map(product => (
        <Transput
          key={productionStep + product.item + "supplier"}
          productionStep={productionStep}
          product={product}
          io="supplier"
        />
      )) || []
    );
  };

  if (!byProducts?.length) return null;

  return (
    <div>
      <h2>By-products</h2>
      <div className="grid grid-flow-col">{renderByProducts()}</div>
    </div>
  );
};

export default ByProducts;
