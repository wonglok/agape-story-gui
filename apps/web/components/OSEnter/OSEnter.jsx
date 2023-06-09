// import { useOS } from "../../store/useOS";
import { Tooltip } from "antd";
import { useOS } from "../../store/useOS";
import { IconPainter } from "../OSAppIcon/IconPainter";
import { OSWindowFrame } from "../OSWindowFrame/OSWindowFrame";
export function OSEnter() {
  return (
    <>
      <OSWindowFrame>
        <h1 className=" text-3xl mt-7 px-6 font-extralight"> Apps Launcher</h1>
        <div className="  px-6 text-xl text-gray-500">Ready to Use</div>
        <div style={{ height: `1px` }} className="bg-gray-500 mx-6 my-3"></div>
        <div className="mx-6 ">
          {/*  */}

          <IconPainter
            triggerLoading={true}
            onClick={() => {
              useOS.getState().addArtApp();
            }}
          ></IconPainter>
        </div>
      </OSWindowFrame>
    </>
  );
}
