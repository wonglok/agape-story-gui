// import { useOS } from "../../store/useOS";
// import { Tooltip } from "antd";
// import { useOS } from "../../store/useOS";
// import { IconPainter } from "../OSAppIcon/IconPainter";
import { OSWindowFrame } from "../OSWindowFrame/OSWindowFrame";
export function OSFiles() {
  return (
    <>
      <OSWindowFrame>
        <h1 className=" text-3xl mt-7 px-6 font-extralight">Browser Files</h1>
        <div className="  px-6 text-xl text-gray-500">
          Your Files in this Browser
        </div>
        <div style={{ height: `1px` }} className="bg-gray-500 mx-6 my-3"></div>
        <div className="mx-6 ">
          {/*  */}
          <div>
            {/* <iframe
              className="w-full h-96 rounded-2xl"
              src={`https://garage.agape.land/`}
            ></iframe> */}
          </div>
          {/*  */}
        </div>
      </OSWindowFrame>
    </>
  );
}
