import { Control, controlsUtils } from "fabric";
import {
  drawRotateIcon,
  drawCircleIcon,
  drawHorizontalIcon,
  drawVerticalIcon,
} from "./drawer";
const scaleSkewCursorStyleHandler = controlsUtils.scaleSkewCursorStyleHandler;
const scalingXOrSkewingY = controlsUtils.scalingXOrSkewingY;
const scaleOrSkewActionName = controlsUtils.scaleOrSkewActionName;
const scalingYOrSkewingX = controlsUtils.scalingYOrSkewingX;
const scaleCursorStyleHandler = controlsUtils.scaleCursorStyleHandler;
const scalingEqually = controlsUtils.scalingEqually;
const rotationWithSnapping = controlsUtils.rotationWithSnapping;
const rotationStyleHandler = controlsUtils.rotationStyleHandler;

export const createCircleControls = () => {
  const size = 45;
  return {
    ml: new Control({
      x: -0.5,
      y: 0,
      cursorStyleHandler: scaleSkewCursorStyleHandler,
      actionHandler: scalingXOrSkewingY,
      getActionName: scaleOrSkewActionName,
      render: drawVerticalIcon,
      cornerSize: size,
    }),

    mr: new Control({
      x: 0.5,
      y: 0,
      cursorStyleHandler: scaleSkewCursorStyleHandler,
      actionHandler: scalingXOrSkewingY,
      getActionName: scaleOrSkewActionName,
      render: drawVerticalIcon,
      cornerSize: size,
    }),

    mb: new Control({
      x: 0,
      y: 0.5,
      cursorStyleHandler: scaleSkewCursorStyleHandler,
      actionHandler: scalingYOrSkewingX,
      getActionName: scaleOrSkewActionName,
      render: drawHorizontalIcon,
      cornerSize: size,
    }),

    mt: new Control({
      x: 0,
      y: -0.5,
      cursorStyleHandler: scaleSkewCursorStyleHandler,
      actionHandler: scalingYOrSkewingX,
      getActionName: scaleOrSkewActionName,
      render: drawHorizontalIcon,
      cornerSize: size,
    }),
    tl: new Control({
      x: -0.5,
      y: -0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),

    tr: new Control({
      x: 0.5,
      y: -0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),

    bl: new Control({
      x: -0.5,
      y: 0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),

    br: new Control({
      x: 0.5,
      y: 0.5,
      cursorStyleHandler: scaleCursorStyleHandler,
      actionHandler: scalingEqually,
      render: drawCircleIcon,
    }),

    mtr: new Control({
      x: 0,
      y: 0.5,
      actionHandler: rotationWithSnapping,
      cursorStyleHandler: rotationStyleHandler,
      offsetY: 25,
      withConnection: true,
      actionName: "rotate",
      cursorStyle: "grabbing",
      render: drawRotateIcon,
    }),
  };
};
