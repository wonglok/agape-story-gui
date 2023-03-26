//

import { Tooltip } from "antd";
import { useState } from "react";

export function IconPainter({
  active,
  onClick,
  triggerLoading = false,
  tip = null,
  title = "ART Tools",
}) {
  let [isLoading, setLoading] = useState(false);
  return (
    <div className="inline-flex flex-col items-center text-xs">
      <Tooltip placement="right" title={tip}>
        <div
          onClick={() => {
            if (triggerLoading) {
              setLoading(true);
              setTimeout(() => {
                onClick();
              }, 500);
            } else {
              onClick();
            }
          }}
          className={`${
            active
              ? `bg-green-100 shadow-green-300 `
              : `bg-gray-100 shadow-gray-300 `
          } w-16 h-16  justify-center inline-flex shadow-lg  rounded-2xl`}
        >
          <button
            className={`${
              active
                ? `bg-green-100 shadow-green-300 `
                : `bg-gray-100 shadow-gray-300 `
            } w-16 h-16  text-center select-none p-2  rounded-2xl shadow-inner flex flex-col justify-center items-center`}
          >
            <span
              className={`${isLoading ? " inline-block  animate-ping" : ""}`}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
              </svg>
            </span>
          </button>
        </div>
      </Tooltip>
      <span className={"mt-2 "}>{title}</span>
    </div>
  );
}

//

//

//

//

//
