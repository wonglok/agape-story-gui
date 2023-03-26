import { use, useEffect } from "react";
import { useOS } from "../../store/useOS";
import EmojiPicker from "emoji-picker-react";
import { IconPainter } from "../OSAppIcon/IconPainter";
import { IconAgape } from "../OSAppIcon/IconAgape";
import { IconApps } from "../OSAppIcon/IconApps";

/* eslint-disable @next/next/no-img-element */
export function OSBar() {
  //
  let apps = useOS((s) => s.apps);
  let winTab = useOS((s) => s.winTab);
  //
  //
  useEffect(() => {
    return useOS.getState().hydrate();
  }, []);

  //
  return (
    <div
      className="absolute overflow-scroll bg-white shadow-2xl border-gray-300 border rounded-2xl shadow-gray-600"
      style={{
        width: "95px",
        left: `32px`,
        maxHeight: "calc(100% - 32px * 2)",
        top: "calc(32px)",
      }}
    >
      <div className="w-full h-full  flex items-center justify-center flex-col py-4 shadow-inner shadow-gray-500 rounded-2xl">
        {/* ai */}

        <div className="mb-2">
          <IconAgape
            active={winTab === "home"}
            onClick={() => {
              useOS.setState({ winTab: "home" });
            }}
          ></IconAgape>
        </div>

        {/* ai */}
        <div className="mb-2">
          <IconApps
            active={winTab === "apps"}
            onClick={() => {
              useOS.setState({ winTab: "apps" });
            }}
          ></IconApps>
        </div>

        {/* safe */}
        {apps.map((r, idx) => {
          return (
            <div className="mb-2" key={r.oid}>
              {r.type === "painter" && (
                <IconPainter
                  title={r.title.slice(0, 15)}
                  active={winTab === r.oid}
                  tip={() => {
                    return (
                      <button
                        className="text-white bg-red-600 px-3 py-1 rounded-lg"
                        onClick={() => {
                          useOS.getState().killApp(r);
                          useOS.setState({ winTab: "home" });
                        }}
                      >
                        Close
                      </button>
                    );
                  }}
                  onClick={() => {
                    useOS.setState({ winTab: r.oid });
                  }}
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
    </div>
  );
}
