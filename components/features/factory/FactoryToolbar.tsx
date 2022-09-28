import Link from "next/link";
import { action } from "app/slices/entities";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getProductionSteps } from "app/slices/productionSteps";
import Button from "components/common/Button";

interface Proptypes {
  toggleProductionSteps: () => void;
}

const FactoryToolbar = ({ toggleProductionSteps }: Proptypes) => {
  const dispatch = useAppDispatch();
  const buildingSteps = useAppSelector(getProductionSteps);
  console.log(buildingSteps);

  return (
    <div className="flex h-full w-full text-white border-zinc-300 border-t-2 bg-zinc-900 p-5 font-bold text-xl gap-5">
      <div className="flex h-12 w-full gap-3">
        <Link href={"/network"} passHref>
          <Button onClick={() => {}} colour="white" textColour="black">
            Network
          </Button>
        </Link>
        <Button onClick={toggleProductionSteps} colour="white" textColour="black">
          Production Steps
        </Button>
        <Button onClick={() => {}} colour="white" textColour="black">
          Delete Factory
        </Button>
      </div>
    </div>
  );
};

export default FactoryToolbar;
