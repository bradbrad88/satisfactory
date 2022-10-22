import { useAppSelector } from "app/hooks";
import { getBuildingDetails } from "app/slices/productionSteps";

import type { ProductionStep } from "app/slices/productionSteps";

interface Proptypes {
  productionStep: ProductionStep;
}

const ProductionDetails = ({ productionStep }: Proptypes) => {
  const buildingDetails = useAppSelector(getBuildingDetails(productionStep.id));
  if (!buildingDetails) return <div>Details Unavailable</div>;
  return (
    <div className="bg-zinc-800 rounded-md p-2">
      <h2 className="text-amber-500">Production Details</h2>
      <div>
        <div>
          <h2 className="font-bold">{buildingDetails?.building}</h2>
          <div>{Math.ceil(buildingDetails?.count || 0)}</div>
        </div>
        <div className="">
          <h2>Overclock:</h2>
          <div>{buildingDetails?.overclock.toFixed(4)}%</div>
        </div>
        <div>
          {buildingDetails?.power && buildingDetails.power >= 0
            ? "Power consumed"
            : "Power generated"}
          :
        </div>
        <div>{buildingDetails?.power.toFixed(1)}MW</div>
      </div>
    </div>
  );
};

export default ProductionDetails;
