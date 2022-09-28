import React from "react";

interface Proptypes {
  bottomPanel?: React.ReactNode;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
}

const OverlayToolbar = ({ bottomPanel, leftPanel, rightPanel }: Proptypes) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="grid grid-cols-[400px,_minmax(0,_1fr)] grid-rows-[minmax(0,_1fr),_300px] relative w-full h-full">
        <div className="row-span-1 col-start-1 col-end-2 pointer-events-auto">{leftPanel}</div>
        <div className="row-span-1 col-span-full row-start-2 row-end-3 pointer-events-auto">
          {bottomPanel}
        </div>
      </div>
    </div>
  );
};

export default OverlayToolbar;
