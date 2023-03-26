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
            <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" />
          </svg>
        </button>
      </div>
      <span className={"mt-2 text-center"}>{"Run Apps"}</span>
    </div>
  );
}
