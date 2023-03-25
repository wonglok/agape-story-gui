import { Canvas } from "@react-three/fiber";
import { OS } from "../OS/OS";
// import { IconAgape } from "../OSAppIcon/IconAgape";

export function Landing() {
  return (
    <div className="w-full h-full">
      <div
        className=" sticky z-50 left-0 bg-white shadow-2xl shadow-gray-400 flex  justify-between items-center "
        style={{ height: "68px", top: "0%", margin: "0px 0px 0px 0px" }}
      >
        <div className="flex items-center ml-6">
          <img
            className="h-10  inline-block"
            src={"/ui/ai-05png.png"}
            alt="logo"
          ></img>

          <span className="ml-3 text-3xl h-full items-center inline-flex font-extralight tracking-widest">
            AGAPE
          </span>
        </div>
        <div className=" mr-6">
          <span className="text-3xl font-extralight tracking-widest">BETA</span>
        </div>
      </div>

      <div className="w-full " style={{ height: "calc(100% - 68px)" }}>
        <OS></OS>
      </div>
      {/*  */}

      {/*  */}
      <div className="w-full h-full">
        <Canvas>
          <group></group>
        </Canvas>
      </div>
    </div>
  );
}
