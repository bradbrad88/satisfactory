import { useEffect, useState } from "react";
import Map from "components/features/Map";
import NetworkMap from "components/features/NetworkMap";
import "components/features/NetworkMap";
import FactoryList from "components/features/FactoryList";
import OverlayToolbar from "components/features/OverlayToolbar";
import NetworkToolbar from "components/features/NetworkToolbar";
import { useAppSelector } from "app/hooks";
import { getActiveVenture } from "app/slices/ventures";
import { useRouter } from "next/router";

const panelOptions = {
  factories: "FACTORIES",
};

const Network = () => {
  const [leftPanel, setLeftPanel] = useState(panelOptions.factories);
  const activeVenture = useAppSelector(getActiveVenture);
  const router = useRouter();
  useEffect(() => {
    if (!activeVenture) router.replace("/");
  });

  const toggleFactories = () => {
    if (leftPanel === panelOptions.factories) return setLeftPanel("");
    setLeftPanel(panelOptions.factories);
  };

  const getLeftPanel = () => {
    switch (leftPanel) {
      case panelOptions.factories:
        return <FactoryList />;

      default:
        return null;
    }
  };

  return (
    <div className="relative bg-zinc-900 h-screen w-screen  mx-auto">
      <Map>
        <NetworkMap />
      </Map>
      <OverlayToolbar
        leftPanel={getLeftPanel()}
        bottomPanel={<NetworkToolbar toggleFactories={toggleFactories} />}
      />
    </div>
  );
};

export default Network;
