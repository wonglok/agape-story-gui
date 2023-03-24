import { use, useEffect } from "react";
import { useOS } from "../../store/useOS";
import EmojiPicker from "emoji-picker-react";

/* eslint-disable @next/next/no-img-element */
export function OSBar() {
  //
  let apps = useOS((s) => s.apps);
  //
  //
  useEffect(() => {
    return useOS.getState().hydrate();
  }, []);

  //
  return (
    <div
      className="absolute bottom-0 bg-gray-200 shadow-2xl border-gray-300 border rounded-2xl shadow-gray-500 p-2"
      style={{
        width: "65px",
        left: `20px`,
        height: "calc(100% - 32px * 2)",
        top: "32px",
      }}
    >
      {/*  */}
      {/* ai */}
      <div className="w-full justify-center flex mb-3 shadow-lg shadow-teal-200 rounded-2xl">
        <button className="w-12 h-12 text-xs text-center select-none p-2 bg-teal-200 rounded-2xl shadow-inner shadow-teal-500 flex flex-col justify-center items-center">
          <img src={"/ui/ai-05png.png"} alt="logo"></img>
        </button>
      </div>

      {/* safe */}
      {apps.map((r, idx) => {
        return (
          <div
            key={r.oid}
            className="w-full justify-center flex mb-3 shadow-lg shadow-green-200 rounded-2xl"
          >
            <button
              onClick={() => {
                useOS.getState().killApp(r);
              }}
              className="w-12 h-12 text-lg font-bold font-mono text-center select-none p-2 bg-green-200 rounded-2xl shadow-inner shadow-green-500 flex flex-col justify-center items-center"
            >
              {r.name}
            </button>
          </div>
        );
      })}

      {/*  */}
      {/*
      <div className="w-full justify-center flex mb-3 shadow-lg shadow-green-200 rounded-2xl">
        <button className="w-12 h-12 text-lg font-bold font-mono text-center select-none p-2 bg-green-200 rounded-2xl shadow-inner shadow-green-500 flex flex-col justify-center items-center">
          1
        </button>
      </div>
      */}
    </div>
  );
}
