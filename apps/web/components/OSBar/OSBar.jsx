/* eslint-disable @next/next/no-img-element */
export function OSBar() {
  return (
    <div
      className="absolute bottom-0   bg-gray-200 shadow-2xl border-gray-300 border rounded-2xl shadow-gray-500 "
      style={{
        width: "65px",
        left: `20px`,
        height: "calc(100% - 32px * 2)",
        top: "32px",
      }}
    >
      <div className="w-full justify-center flex my-2">
        <button className="mb-3 w-12 h-12 text-xs text-center p-2 bg-cyan-100 rounded-2xl shadow-inner shadow-cyan-500 flex flex-col justify-center items-center">
          <img src={"/ui/ai-05png.png"} alt="logo"></img>
        </button>
      </div>
    </div>
  );
}
