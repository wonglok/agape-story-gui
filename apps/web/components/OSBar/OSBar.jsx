import { use, useEffect, useState } from "react";
import { useOS } from "../../store/useOS";
import { IconPainter } from "../OSAppIcon/IconPainter";
import { IconAgape } from "../OSAppIcon/IconAgape";
import { IconApps } from "../OSAppIcon/IconApps";
import { IconFiles } from "../OSAppIcon/IconFiles";

// import EmojiPicker from "emoji-picker-react";

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

  let desktop = {
    width: "95px",
    left: `32px`,
    maxHeight: "calc(100% - 32px * 2)",
    top: "calc(32px)",
  };
  let mobile = {
    height: "120px",
    left: `0px`,
    width: "calc(100% - 0px * 2)",
    bottom: "calc(0px)",
  };
  let [style, setStyle] = useState(desktop);

  useEffect(() => {
    let hh = () => {
      if (window.innerWidth <= 500) {
        setStyle(mobile);
      } else {
        setStyle(desktop);
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
      className="absolute overflow-scroll bg-white shadow-inner shadow-gray-400 sm:shadow-2xl border-gray-300 sm:border sm:rounded-2xl sm:shadow-gray-600"
      style={style}
    >
      <div className="w-full h-full flex items-baseline sm:flex-col sm:items-center sm:justify-center py-4 sm:shadow-inner sm:shadow-gray-500 sm:rounded-2xl">
        {/* ai */}
        <div className="ml-3 mr-3 sm:mb-2 sm:mx-0">
          <IconAgape
            active={winTab === "home"}
            onClick={() => {
              useOS.setState({ winTab: "home" });
            }}
          ></IconAgape>
        </div>
        <div className="mr-3 sm:mb-2 sm:mx-0">
          <IconFiles
            active={winTab === "files"}
            onClick={() => {
              useOS.setState({ winTab: "files" });
            }}
          ></IconFiles>
        </div>
        <div className="mr-3 sm:mb-2 sm:mx-0">
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
            <div className="mr-3 sm:mb-2 sm:mx-0" key={r.oid}>
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
          );
        })}
      </div>
      {/*  */}
    </div>
  );
}
