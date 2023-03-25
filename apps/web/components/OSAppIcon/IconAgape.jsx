//

export function IconAgape({ active, onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className="inline-flex flex-col items-center text-xs"
    >
      <div
        className={`${
          active
            ? `bg-pink-100 shadow-pink-300 `
            : `bg-gray-100 shadow-gray-300 `
        } w-16 h-16  justify-center inline-flex shadow-lg  rounded-2xl`}
      >
        <button
          className={`${
            active
              ? `bg-pink-100 shadow-pink-300 `
              : `bg-gray-100 shadow-gray-300 `
          } w-16 h-16  text-center select-none p-2  rounded-2xl shadow-inner flex flex-col justify-center items-center`}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
          </svg>
        </button>
      </div>
      <span className={"mt-3"}>{"Home"}</span>
    </div>
  );
}
