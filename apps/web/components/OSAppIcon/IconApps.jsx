//

export function IconApps({ active, onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className="inline-flex flex-col items-center text-xs"
    >
      <div
        className={`${
          active
            ? `bg-blue-100 shadow-blue-300 `
            : `bg-gray-100 shadow-gray-300 `
        } w-16 h-16  justify-center inline-flex shadow-lg  rounded-2xl`}
      >
        <button
          className={`${
            active
              ? `bg-blue-100 shadow-blue-300 `
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
            <path d="M24 23h-22v-20h22v20zm-1-14h-20v13h20v-13zm-1-7h-21v19h-1v-20h22v1zm1 2h-20v4h20v-4z" />
          </svg>
        </button>
      </div>
      <span className={"mt-2 text-center"}>{"Run Apps"}</span>
    </div>
  );
}
