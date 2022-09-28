import { useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { action } from "app/slices/entities";
import Button from "components/common/Button";
import Input from "components/common/Input";

const Venture = ({ id }: { id: string }) => {
  const router = useRouter();
  const venture = useAppSelector(state => state.entities.ventures.byId[id]);
  const dispatch = useAppDispatch();
  if (!venture) return null;
  return (
    <Button
      onClick={() => {
        router.push("/network");
        dispatch(action.setActiveVenture(id));
      }}
    >
      {venture.name}
    </Button>
  );
};

const VentureList = () => {
  const [newVentureView, setNewVentureView] = useState(false);
  const [newVentureValue, setNewVentureValue] = useState("");
  const ventures = useAppSelector(state => state.entities.ventures.allIds);
  const venture = useAppSelector(state => state.entities.ventures.allIds[0]);
  const dispatch = useAppDispatch();

  const renderVentureList = () => {
    return ventures.map(id => <Venture key={id} id={id} />);
  };

  const onNewVenture = () => {
    setNewVentureView(!newVentureView);
    dispatch(action.createVenture({ name: newVentureValue }));
  };

  const destroyVentureHandler = () => {
    dispatch(action.deleteVenture(venture));
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[min-content,_min-content,_minmax(0,_1fr)] bg-zinc-7000 h-full w-full gap-5">
      <h1 className="text-center text-white text-6xl font-bold mb-2">Venture</h1>
      <div className="px-5">
        {newVentureView && (
          <div className="flex flex-col gap-3">
            <Input
              onChange={e => setNewVentureValue(e.target.value)}
              value={newVentureValue}
            />
            <div className="flex gap-3">
              <Button colour="red" onClick={() => setNewVentureView(false)}>
                Cancel
              </Button>
              <Button colour="green" onClick={onNewVenture}>
                Create New Venture
              </Button>
            </div>
          </div>
        )}
        {!newVentureView && (
          <>
            <Button colour="green" onClick={() => setNewVentureView(!newVentureView)}>
              New Venture
            </Button>
            {/* <Button colour="green" onClick={destroyVentureHandler}>
              Destroy Venture, like, the first one
            </Button> */}
          </>
        )}
      </div>
      <div className="grid grid-cols-1 auto-rows-min border-white rounded-lg border-2 gap-5 p-5 h-full">
        {renderVentureList()}
      </div>
    </div>
  );
};

export default VentureList;
