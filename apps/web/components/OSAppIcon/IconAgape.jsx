//

export function IconAgape({ onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className="inline-flex flex-col items-center text-xs mr-3 mb-2"
    >
      <div
        className={`bg-pink-100 shadow-pink-300 w-16 h-16  justify-center inline-flex shadow-lg  rounded-2xl`}
      >
        <button
          className={`bg-pink-100 shadow-pink-300 w-16 h-16  text-center select-none p-2  rounded-2xl shadow-inner flex flex-col justify-center items-center`}
        >
          <img src={"/ui/ai-05png.png"} alt="logo"></img>
        </button>
      </div>
      <span className={"mt-3"}>{"Home"}</span>
    </div>
  );
}
