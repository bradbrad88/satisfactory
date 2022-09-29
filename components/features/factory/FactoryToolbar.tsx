import Link from "next/link";
import Button from "components/common/Button";
import { useAppDispatch } from "app/hooks";
import { action } from "app/slices/entities";

interface Proptypes {
  toggleItemPanel: () => void;
}

const FactoryToolbar = ({ toggleItemPanel }: Proptypes) => {
  const dispatch = useAppDispatch();
  const destroyFactory = () => {
    dispatch(action.destroyFactory());
  };

  return (
    <div className="flex h-full w-full text-white font-bold text-xl gap-5">
      <div className="flex h-12 w-full gap-3">
        <Link href={"/network"} passHref>
          <Button onClick={() => {}} colour="white" textColour="black">
            Network
          </Button>
        </Link>
        <Button onClick={toggleItemPanel} colour="white" textColour="black">
          Produce New Item
        </Button>
        <Button onClick={destroyFactory} colour="white" textColour="black">
          Delete Factory
        </Button>
      </div>
    </div>
  );
};

export default FactoryToolbar;
