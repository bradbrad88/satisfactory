import Link from "next/link";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getActiveVenture } from "app/slices/ventures";
import { getFactories, getFactory } from "app/slices/factories";
import { action } from "app/slices/entities";
import Button from "components/common/Button";

const Factory = ({ id }: { id: string }) => {
  const factory = useAppSelector(getFactory(id));
  const dispatch = useAppDispatch();

  const setFactory = () => {
    dispatch(action.setActiveFactory(id));
  };

  return (
    <Link href={"/factory"} passHref>
      <Button onClick={setFactory} colour="white" textColour="black">
        {factory.name}
      </Button>
    </Link>
  );
};

const FactoryList = () => {
  const factories = useAppSelector(getFactories);
  const venture = useAppSelector(getActiveVenture)!;
  const dispatch = useAppDispatch();
  const renderFactories = () => {
    return factories.map(id => {
      return <Factory key={id} id={id} />;
    });
  };

  const newFactory = () => {
    const name = `Factory${(factories.length + 1).toString().padStart(2, "0")}`;
    dispatch(action.createFactory({ name, venture }));
  };

  return (
    <div className="flex flex-col h-full w-full bg-zinc-900 gap-3 p-3">
      <Button onClick={newFactory}>New Factory</Button>

      {renderFactories()}
    </div>
  );
};

export default FactoryList;
