import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { action } from "app/slices/entities";
import { getActiveFactory } from "app/slices/factories";

import Map from "components/features/Map";
import OverlayToolbar from "components/features/OverlayToolbar";
import FactoryToolbar from "components/features/factory/FactoryToolbar";
import ItemLookup from "components/features/ItemLookup";
import FactoryMap from "components/features/factory/FactoryMap";

const panelOptions = {
  itemLookup: "ITEM_LOOKUP",
};

const Factory = () => {
  const [leftPanel, setLeftPanel] = useState(panelOptions.itemLookup);
  const activeFactory = useAppSelector(getActiveFactory);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!activeFactory) router.replace("/network");
  });
  const toggleItemPanel = () => {
    if (leftPanel === panelOptions.itemLookup) return setLeftPanel("");
    setLeftPanel(panelOptions.itemLookup);
  };

  const onItemSelect = (item: string) => {
    dispatch(action.createProductionStep({ product: { item, amount: 1 } }));
  };

  const getLeftPanel = () => {
    switch (leftPanel) {
      case panelOptions.itemLookup:
        return <ItemLookup onItemSelect={onItemSelect} />;
      default:
        return null;
    }
  };
  return (
    <div className="bg-zinc-900 h-screen ">
      <Map>
        <FactoryMap />
      </Map>
      <OverlayToolbar
        leftPanel={getLeftPanel()}
        bottomPanel={<FactoryToolbar toggleItemPanel={toggleItemPanel} />}
      />
    </div>
  );
};

export default Factory;
