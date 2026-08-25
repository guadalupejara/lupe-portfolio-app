// This is specifically perimeter-walking geometry — pure functions, no React, no state. Fully unit-testable in isolation,
// which matters since this is the trickiest math in the whole file.
import { mod } from './mathUtils';

export type CatLocation = {
  x: number;
  y: number;
};

export type Facing = "up" | "down" | "left" | "right";

export type Edge = "top" | "right" | "bottom" | "left";

export type Bounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

export const getPerimeterTotal = (bounds: Bounds): number => {
  const width = bounds.maxX - bounds.minX;
  const height = bounds.maxY - bounds.minY;
  return 2 * width + 2 * height;
};

// convert progress along the loop into an {x, y} position
export const getPositionOnPerimeter = (progress: number, bounds: Bounds): CatLocation => {
  const width = bounds.maxX - bounds.minX;
  const height = bounds.maxY - bounds.minY;
  const total = getPerimeterTotal(bounds);
  const p = mod(progress, total);

  if (p < width) {
    // top edge, left -> right
    return { x: bounds.minX + p, y: bounds.minY };
  } else if (p < width + height) {
    // right edge, top -> bottom
    const t = p - width;
    return { x: bounds.maxX, y: bounds.minY + t };
  } else if (p < 2 * width + height) {
    // bottom edge, right -> left
    const t = p - width - height;
    return { x: bounds.maxX - t, y: bounds.maxY };
  } else {
    // left edge, bottom -> top
    const t = p - 2 * width - height;
    return { x: bounds.minX, y: bounds.maxY - t };
  }
};

// which edge the cat is currently on, needed to derive facing + sprite transform
export const getCurrentEdge = (progress: number, bounds: Bounds): Edge => {
  const width = bounds.maxX - bounds.minX;
  const height = bounds.maxY - bounds.minY;
  const total = getPerimeterTotal(bounds);
  const p = mod(progress, total);
  if (p < width) return "top";
  if (p < width + height) return "right";
  if (p < 2 * width + height) return "bottom";
  return "left";
};

// facing when moving clockwise, per edge — flipped for counter-clockwise
const CLOCKWISE_FACING: Record<Edge, Facing> = {
  top: "right",
  right: "down",
  bottom: "left",
  left: "up",
};

const OPPOSITE_FACING: Record<Facing, Facing> = {
  right: "left",
  left: "right",
  up: "down",
  down: "up",
};

export const getFacing = (progress: number, direction: 1 | -1, bounds: Bounds): Facing => {
  const edge = getCurrentEdge(progress, bounds);
  const clockwiseFacing = CLOCKWISE_FACING[edge];
  return direction === 1 ? clockwiseFacing : OPPOSITE_FACING[clockwiseFacing];
};

export const getSpriteTransform = (progress: number, direction: 1 | -1, bounds: Bounds): string => {
  const edge = getCurrentEdge(progress, bounds);

  if (edge === "top" || edge === "bottom") {
    const facing = getFacing(progress, direction, bounds);
    return facing === "right" ? "scaleX(-1)" : "scaleX(1)";
  }

  const rotateDeg = edge === "left" ? 90 : -90;
  const needsMirror = direction === -1;
  return needsMirror ? `rotate(${rotateDeg}deg) scaleX(-1)` : `rotate(${rotateDeg}deg)`;
};