import { useState, useEffect } from "react";
import Map from "components/features/Map";
import "components/features/NetworkMap";
import OverlayToolbar from "components/features/OverlayToolbar";
import FactoryToolbar from "components/features/FactoryToolbar";
import ProductionStepList from "components/features/ProductionStepLists";
import { useAppSelector } from "app/hooks";
import { getActiveFactory } from "app/slices/factories";
import { useRouter } from "next/router";

const panelOptions = {
  productionSteps: "PRODUCTION_STEPS",
};

const Factory = () => {
  const [leftPanel, setLeftPanel] = useState(panelOptions.productionSteps);
  const activeFactory = useAppSelector(getActiveFactory);
  const router = useRouter();
  useEffect(() => {
    if (!activeFactory) router.replace("/network");
  });
  const toggleProductionSteps = () => {
    if (leftPanel === panelOptions.productionSteps) return setLeftPanel("");
    setLeftPanel(panelOptions.productionSteps);
  };

  const getLeftPanel = () => {
    switch (leftPanel) {
      case panelOptions.productionSteps:
        return <ProductionStepList />;

      default:
        return null;
    }
  };
  return (
    <div className="bg-zinc-900 h-screen ">
      <Map>
        <div>Production Steps</div>
      </Map>
      <OverlayToolbar
        leftPanel={getLeftPanel()}
        bottomPanel={<FactoryToolbar toggleProductionSteps={toggleProductionSteps} />}
      />
    </div>
  );
};

export default Factory;
