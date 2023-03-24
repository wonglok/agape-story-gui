import { OS } from "../OS/OS";

export function Landing() {
  return (
    <div className="w-full h-full">
      <div
        className="w-full bg-gray-200 shadow-2xl shadow-gray-500 "
        style={{ height: "68px" }}
      >
        AGAPE AppStore Ecosystem
      </div>
      <div className="w-full " style={{ height: "calc(100% - 68px)" }}>
        <OS></OS>
      </div>
    </div>
  );
}
