import { create } from "zustand";
export const useOS = create((set, get) => {
  return {
    apps: [],
  };
});

export const createAppState = () => {
  return create((set, get) => {
    return {
      id: getID(),
      windows: [],
    };
  });
};

export const createWindowState = () => {
  return create((set, get) => {
    return {
      x: 0,
      y: 0,
      width: 380,
      height: 300,
    };
  });
};
