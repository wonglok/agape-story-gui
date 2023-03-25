import { create } from "zustand";
import { IdbKvStore } from "./idbstore";
import { v4 } from "uuid";
import md5 from "md5";

export const getID = () => `_${md5(v4().toString())}`;

//
export const useOS = create((set, get) => {
  let store = new IdbKvStore("os-engine");

  let read = () => {
    store.json((err, json) => {
      if (err) throw err;
      console.log("json", json);
      let array = [];

      for (let kn in json) {
        let obj = json[kn];

        if (obj?.oid) {
          array.push(obj);
        }
      }

      set({ apps: array });

      console.log(array);
    });
  };

  // store.on("set", () => {
  //   read();
  // });

  let wait = (fnc) => {
    let tt = setInterval(() => {
      if (store._db) {
        clearInterval(tt);
        fnc(store);
      }
    });
  };

  let addArtApp = () => {
    wait(async (store) => {
      let item = createPainterApp({ name: "painter" });

      await store.set(item.oid, item);

      set({ winTab: item.oid });

      read();
    });
  };

  let killApp = (app) => {
    wait(async (store) => {
      let item = app;
      await store.remove(item.oid);
      read();
    });
  };

  return {
    winTab: "home",
    apps: [],
    store,
    killApp,
    hydrate: () => {
      let hh = () => {
        read();
      };
      store.on("open", hh);

      if (store._db) {
        store.emit("open");
      }
      return () => {
        store.off("open", hh);
      };
    },
    addArtApp,
  };
});

export const createPainterApp = ({ name = "my-app" }) => {
  return {
    oid: getID(),
    type: "painter",
    name,
    windows: [createWindowState({ title: "webgl-window" })],
  };
};

export const createSolutionApp = ({ name = "my-app" }) => {
  return {
    oid: getID(),
    type: "solution",
    name,
    windows: [createWindowState({ title: "solution-window" })],
  };
};

export const createWindowState = ({ title = "my-window" }) => {
  return {
    oid: getID(),
    x: 0,
    y: 0,
    width: 380,
    height: 300,
    title,
  };
};
