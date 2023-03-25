import { useEffect } from "react";
import { usePaint } from "../../../store/usePaint";

export function RecentProjects() {
  //

  let hydrate = usePaint((r) => r.hydrate);

  useEffect(() => {
    return hydrate();
  }, [hydrate]);

  return (
    <>
      <h1 className=" text-3xl mt-7 px-6 font-extralight">Painter App</h1>
      <div className="  px-6 text-xl text-gray-500">Recently opened</div>
      <div style={{ height: `1px` }} className="bg-gray-500 mx-6 my-3"></div>
      <div className="mx-6 ">{/*  */}</div>
    </>
  );
}
