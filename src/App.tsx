import * as React from "react";
import * as fabric from "fabric";
import { centerArtboard, zoomIn, zoomOut } from "./canvas-utils";
import { commonControlConfig } from "./constants";
import { createCircleControls } from "./custom-controls";

function App() {
  const canvasRef = React.useRef<fabric.Canvas>();
  React.useEffect(() => {
    const { clientWidth, clientHeight } = document.getElementById(
      "sm-canvas"
    ) as HTMLDivElement;

    const canvas = new fabric.Canvas("canvas", {
      height: clientHeight,
      width: clientWidth,
      backgroundColor: "#ecf0f1",
      preserveObjectStacking: true,
      selectionColor: "#18A0FB1A",
      selectionBorderColor: "#18A0FB",
    });

    const artboard = new fabric.Rect({
      left: 0,
      top: 0,
      fill: "#ffffff",
      width: 1200,
      height: 1200,
      evented: false,
      selectable: false,
    });
    canvas.add(artboard);

    centerArtboard(canvas, artboard);

    canvasRef.current = canvas;

    const centerPoint = artboard.getCenterPoint();
    const rect = new fabric.Circle({
      radius: 200,
      stroke: "#95a5a6",
      top: centerPoint.y,
      left: centerPoint.x,
      originX: "center",
      originY: "center",
      controls: createCircleControls(),
      ...(commonControlConfig as any),
    });
    canvas.add(rect);

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleZoomIn = React.useCallback(() => {
    if (canvasRef.current) zoomIn(canvasRef.current);
  }, [canvasRef.current]);

  const handleZoomOut = React.useCallback(() => {
    if (canvasRef.current) zoomOut(canvasRef.current);
  }, [canvasRef.current]);

  return (
    <div className="h-screen flex flex-col relative overflow-hidden bottom-">
      <div className=" absolute bottom-2 left-1/2 transform -translate-x-1/2 z-1  flex gap-1">
        <button
          className="bg-gray-700  rounded-sm border-none text-white p-2  cursor-pointer h-8 w-8"
          onClick={handleZoomOut}
        >
          -
        </button>
        <button
          className="bg-gray-700  rounded-sm border-none text-white p-2  cursor-pointer h-8 w-8"
          onClick={handleZoomIn}
        >
          +
        </button>
      </div>
      <div
        id="sm-canvas"
        className="flex-1 bg-gray-1   underline text-red-500 text-4xl"
      >
        <canvas id="canvas" />
      </div>
    </div>
  );
}

export default App;
