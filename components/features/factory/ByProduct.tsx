import { Ingredient } from "data/recipes";
import { items } from "data";

interface Proptypes {
  productionStep: string;
  product: Ingredient;
}

const ByProduct = ({ productionStep, product }: Proptypes) => {
  return (
    <div className="border-2 border-zinc-300 rounded-md h-full p-2 min-w-[100px]">
      <h2 className="font-bold">{items.map[product.item].name}</h2>
      <div className="p-2">{product.amount.toFixed(4)}</div>
    </div>
  );
};

export default ByProduct;
