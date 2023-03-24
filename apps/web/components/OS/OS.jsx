import { OSBar } from "../OSBar/OSBar";
import { OSEnter } from "../OSEnter/OSEnter";

// import { Button } from "ui";
export function OS() {
  return (
    <div className="relative w-full h-full">
      <OSBar></OSBar>
      <OSEnter></OSEnter>
    </div>
  );
}

//
