import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getActiveFactory } from "app/slices/factories";

import Map from "components/features/Map";
import OverlayToolbar from "components/features/OverlayToolbar";
import FactoryToolbar from "components/features/factory/FactoryToolbar";
import ItemLookup from "components/features/ItemLookup";
import FactoryMap from "components/features/factory/FactoryMap";
import LocalStorageLoader from "components/common/LocalStorageLoader";

const panelOptions = {
  itemLookup: "ITEM_LOOKUP",
};

const Factory = () => {
  const [leftPanel, setLeftPanel] = useState(panelOptions.itemLookup);
  const activeFactory = useAppSelector(getActiveFactory);
  const router = useRouter();

  useEffect(() => {
    if (!activeFactory) router.replace("/network");
  });

  const toggleItemPanel = () => {
    if (leftPanel === panelOptions.itemLookup) return setLeftPanel("");
    setLeftPanel(panelOptions.itemLookup);
  };

  const getLeftPanel = () => {
    switch (leftPanel) {
      case panelOptions.itemLookup:
        return <ItemLookup />;
      default:
        return null;
    }
  };
  return (
    <div className="bg-zinc-900 h-screen ">
      <LocalStorageLoader />
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
