import { create } from "zustand";
import { IdbKvStore } from "./idbstore";
import { atom } from "jotai";

export const getID = () => "_" + Math.random().toString(36).slice(2, 9);

//
export const useOS = create((set, get) => {
  let store = new IdbKvStore("os-engine");

  let read = () => {
    store.json((err, json) => {
      if (err) throw err;
      // console.log("json", json);
      let array = [];

      for (let kn in json) {
        let obj = json[kn];

        if (obj?.oid) {
          array.push(obj);
        }
      }

      set({ apps: array });

      // console.log(array);
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
      let item = createPainterAppInstance({ name: "painter" });

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

  let saveApp = (app) => {
    wait(async (store) => {
      let item = app;
      await store.set(item.oid, item);
      read();
    });
  };

  let hydrate = () => {
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
  };

  return {
    winTab: "home",
    apps: [],
    store,
    killApp,
    saveApp,
    hydrate,
    addArtApp,
  };
});

export const createPainterAppInstance = ({ name = "my-app" }) => {
  return {
    oid: getID(),
    type: "painter",
    title: name,
    tab: "menu",
  };
};
