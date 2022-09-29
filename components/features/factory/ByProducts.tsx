import { useAppSelector } from "app/hooks";
import { getByProducts } from "app/slices/productionSteps";
import { Ingredient } from "data/recipes";
import { items } from "data";

interface Proptypes {
  productionStep: string;
}

const ByProducts = ({ productionStep }: Proptypes) => {
  const byProducts = useAppSelector(getByProducts(productionStep));

  const renderByProducts = () => {
    return (
      byProducts?.map(byProduct => (
        <ByProduct key={productionStep + byProduct.item} byProduct={byProduct} />
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

const ByProduct = ({ byProduct }: { byProduct: Ingredient }) => {
  return (
    <div className="border-2 border-zinc-300 rounded-md h-full p-2 min-w-[100px]">
      <h2 className="font-bold">{items.map[byProduct.item].name}</h2>
      <div className="p-2">{byProduct.amount.toFixed(4)}</div>
    </div>
  );
};

export default ByProducts;
