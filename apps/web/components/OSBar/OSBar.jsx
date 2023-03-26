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
    isMobie: false,
  };
  let mobile = {
    height: "110px",
    left: `0px`,
    width: "calc(100% - 0px * 2)",
    top: "calc(0px)",
    isMobie: true,
  };
  let [style, setStyle] = useState(mobile);

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
      className={
        style.isMobie
          ? "absolute overflow-scroll  border-gray-300 "
          : "absolute overflow-scroll   shadow-2xl border-gray-300 border rounded-2xl shadow-gray-600"
      }
      style={style}
    >
      <div
        className={
          style.isMobie
            ? "w-full h-full flex items-baseline py-4"
            : "w-full h-full flex flex-col justify-start items-center py-4 shadow-inner shadow-gray-500 rounded-2xl"
        }
      >
        {/* ai */}
        <div className={style.isMobie ? "ml-3 mr-3" : "mb-2"}>
          <IconAgape
            active={winTab === "home"}
            onClick={() => {
              useOS.setState({ winTab: "home" });
            }}
          ></IconAgape>
        </div>
        <div className={style.isMobie ? "mr-3" : "mb-2"}>
          <IconFiles
            active={winTab === "files"}
            onClick={() => {
              useOS.setState({ winTab: "files" });
            }}
          ></IconFiles>
        </div>
        <div className={style.isMobie ? "mr-3" : "mb-2"}>
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
            <div className={style.isMobie ? "mr-3" : "mb-2"} key={r.oid}>
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
