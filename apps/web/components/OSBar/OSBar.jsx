import { use, useEffect, useState } from "react";
import { useOS } from "../../store/useOS";
import EmojiPicker from "emoji-picker-react";
import { IconPainter } from "../OSAppIcon/IconPainter";
import { IconAgape } from "../OSAppIcon/IconAgape";
import { IconApps } from "../OSAppIcon/IconApps";
import { IconFiles } from "../OSAppIcon/IconFiles";

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

  let [style, setStyle] = useState({
    width: "95px",
    left: `32px`,
    maxHeight: "calc(100% - 32px * 2)",
    top: "calc(32px)",
  });

  useEffect(() => {
    let hh = () => {
      if (window.innerWidth <= 500) {
        setStyle({
          height: "120px",
          left: `12px`,
          width: "calc(100% - 12px * 2)",
          bottom: "calc(12px)",
        });
      }
    };
    window.addEventListener("resize", hh);
    dispatchEvent(new Event("resize"));
    return () => {
      window.removeEventListener("resize", hh);
    };
  }, []);

  //
  return (
    <div
      className="absolute overflow-scroll bg-white shadow-2xl border-gray-300 border rounded-2xl shadow-gray-600"
      style={style}
    >
      <div className="w-full h-full flex items-baseline lg:items-center lg:justify-center py-4 shadow-inner shadow-gray-500 rounded-2xl">
        {/* ai */}

        <div className="ml-3 mr-3 lg:mb-2">
          <IconAgape
            active={winTab === "home"}
            onClick={() => {
              useOS.setState({ winTab: "home" });
            }}
          ></IconAgape>
        </div>

        <div className="mr-3 lg:mb-2">
          <IconFiles
            active={winTab === "files"}
            onClick={() => {
              useOS.setState({ winTab: "files" });
            }}
          ></IconFiles>
        </div>

        <div className="mr-3 lg:mb-2">
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
            <div className="mr-3 lg:mb-2" key={r.oid}>
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
