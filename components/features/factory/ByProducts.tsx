import { useAppSelector } from "app/hooks";
import { getByProducts } from "app/slices/productionSteps";
import IODrag from "./IODrag";

interface Proptypes {
  productionStep: string;
}

const ByProducts = ({ productionStep }: Proptypes) => {
  const byProducts = useAppSelector(getByProducts(productionStep));

  const renderByProducts = () => {
    return (
      byProducts?.map(byProduct => (
        <IODrag
          io="output"
          product={byProduct}
          productionStep={productionStep}
          key={productionStep + byProduct.item}
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
