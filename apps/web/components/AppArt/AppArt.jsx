import { useOS } from "../../store/useOS";
import { IconPainter } from "../OSAppIcon/IconPainter";
import { OSWindowFrame } from "../OSWindowFrame/OSWindowFrame";
export function AppArt() {
  return (
    <>
      <OSWindowFrame>
        <h1 className=" text-3xl mt-7 px-6 font-extralight">Painter App</h1>
        <div className="  px-6 text-xl text-gray-500">Recently opened</div>
        <div style={{ height: `1px` }} className="bg-gray-500 mx-6 my-3"></div>
        <div className="mx-6 ">
          {/*  */}
          {/*
          <IconPainter
            onClick={() => {
              //
              useOS.getState().add();
            }}
          ></IconPainter> */}
        </div>
      </OSWindowFrame>
    </>
  );
}
