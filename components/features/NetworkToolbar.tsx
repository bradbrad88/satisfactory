import Link from "next/link";
import { action } from "app/slices/entities";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getFactories } from "app/slices/factories";
import Button from "components/common/Button";

interface Proptypes {
  toggleFactories: () => void;
}

const NetworkToolbar = ({ toggleFactories }: Proptypes) => {
  const dispatch = useAppDispatch();
  const factories = useAppSelector(getFactories);
  const navHome = () => {};

  const newFactory = () => {
    const name = `Factory${(factories.length + 1).toString().padStart(2, "0")}`;
    dispatch(action.createFactory({ name }));
  };

  const destroyFactories = () => {
    dispatch(action.destroyFactories(factories));
  };

  return (
    <div className="flex h-full w-full text-white border-zinc-300 border-t-2 bg-zinc-900 p-5 font-bold text-xl gap-5">
      <div className="flex h-12 w-full gap-3">
        <Link href={"/"} passHref>
          <Button onClick={navHome} colour="white" textColour="black">
            Home
          </Button>
        </Link>
        <Button onClick={toggleFactories} colour="white" textColour="black">
          Factories
        </Button>
        <Button onClick={newFactory} colour="white" textColour="black">
          Destroy Factory
        </Button>
      </div>
    </div>
  );
};

export default NetworkToolbar;
