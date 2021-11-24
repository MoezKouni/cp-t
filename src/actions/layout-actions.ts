import { UP, DOWN, HIDE } from "./types";

export const moveUp = (component: ComponentI) => ({
  type: UP,
  payload: component,
});

export const moveDown = (component: ComponentI) => ({
  type: DOWN,
  payload: component,
});
export const hide = (component: ComponentI) => ({
  type: HIDE,
  payload: component,
});
