import { useEffect, useState } from "react";

export function OSWindowFrame({ children }) {
  let desktop = {
    width: "calc(100% - 32px * 3 - 32px * 2 - 20px)",
    left: `calc(20px + 32px * 2 + 32px + 32px )`,
    height: "calc(100% - 32px * 2)",
    top: "calc(32px)",
  };
  let mobile = {
    width: "calc(100% - 12px * 2)",
    left: `calc(12px)`,
    height: "calc(100% - 12px * 2 - 110px)",
    bottom: "calc(12px)",
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
      className="absolute bottom-0 h-full justify-center  bg-gray-100 shadow-2xl border-gray-300 border rounded-2xl shadow-gray-500 font-light "
      style={style}
    >
      <div className="bg-gray-200 flex justify-end rounded-t-2xl h-9 w-full py-2 px-2">
        <div className=" inline-block mx-1 bg-red-300 w-4 h-4 rounded-full shadow-lg shadow-red-300"></div>
        <div className=" inline-block mx-1 bg-lime-300 w-4 h-4 rounded-full shadow-lg shadow-lime-300"></div>
        <div className=" inline-block mx-1 bg-blue-300 w-4 h-4 rounded-full shadow-lg shadow-blue-300"></div>
      </div>
      <div className="w-full" style={{ height: `calc( 100% - 2.25rem)` }}>
        {children}
      </div>
    </div>
  );
}

//
