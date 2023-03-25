import { create } from "zustand";
import { IdbKvStore } from "./idbstore";

export const usePaint = create((set, get) => {
  let store = new IdbKvStore("painter-app");

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

      set({ recentProjects: array });

      console.log(array);
    });
  };

  return {
    //
    recentProjects: [],

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
  };
});
