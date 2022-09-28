import React from "react";

interface Proptypes {
  bottomPanel?: React.ReactNode;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
}

const OverlayToolbar = ({ bottomPanel, leftPanel, rightPanel }: Proptypes) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="grid grid-cols-[280px,_minmax(0,_1fr)] grid-rows-[minmax(0,_1fr),_130px] relative w-full h-full">
        {leftPanel && (
          <div className="row-span-1 col-start-1 col-end-2 pointer-events-auto bg-zinc-900 border-r-2 border-zinc-300 p-5">
            {leftPanel}
          </div>
        )}
        <div className="row-span-1 col-span-full row-start-2 row-end-3 bg-zinc-900  pointer-events-auto border-t-2 border-zinc-300 p-5">
          {bottomPanel}
        </div>
      </div>
    </div>
  );
};

export default OverlayToolbar;
