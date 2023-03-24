import { use, useEffect } from "react";
import { useOS } from "../../store/useOS";
import EmojiPicker from "emoji-picker-react";
import { IconPainter } from "../OSAppIcon/IconPainter";
import { IconAgape } from "../OSAppIcon/IconAgape";

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
      className="absolute pt-2 bg-gray-200 shadow-2xl border-gray-300 border rounded-2xl shadow-gray-500 p-2"
      style={{
        width: "85px",
        left: `32px`,
        // height: "calc(100% - 32px * 2)",
        top: "32px",
      }}
    >
      {/*  */}
      {/* ai */}
      <IconAgape></IconAgape>

      {/* safe */}
      {apps.map((r, idx) => {
        return (
          <div key={r.oid}>
            {r.type === "painter" && (
              <IconPainter
                tip={() => {
                  return (
                    <button
                      className="text-white bg-red-600 px-3 py-1 rounded-lg"
                      onClick={() => {
                        useOS.getState().killApp(r);
                      }}
                    >
                      Close
                    </button>
                  );
                }}
                onClick={() => {}}
              ></IconPainter>
            )}
          </div>
          // <div
          //   key={r.oid}
          //   className="w-full justify-center flex mb-3 shadow-lg shadow-green-200 rounded-2xl"
          // >
          //   <button
          //     onClick={() => {
          //       useOS.getState().killApp(r);
          //     }}
          //     className="w-16 h-16 text-xs text-center select-none p-2 bg-green-200 rounded-2xl shadow-inner shadow-green-500 flex flex-col justify-center items-center"
          //   >
          //     {r.type}
          //   </button>
          // </div>
        );
      })}

      {/*  */}
      {/*
      <div className="w-full justify-center flex mb-3 shadow-lg shadow-green-200 rounded-2xl">
        <button className="w-16 h-16 text-lg font-bold font-mono text-center select-none p-2 bg-green-200 rounded-2xl shadow-inner shadow-green-500 flex flex-col justify-center items-center">
          1
        </button>
      </div>
      */}
    </div>
  );
}
