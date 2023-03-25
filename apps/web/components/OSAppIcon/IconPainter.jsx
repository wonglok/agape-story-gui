//

import { Tooltip } from "antd";
import { useState } from "react";

export function IconPainter({
  active,
  onClick,
  triggerLoading = false,
  tip = null,
}) {
  let [isLoading, setLoading] = useState(false);
  return (
    <div className="inline-flex flex-col items-center text-xs mr-3 mb-1">
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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z" />
              </svg>
            </span>
          </button>
        </div>
      </Tooltip>
      <span className={"mt-2 "}>{"Painter"}</span>
    </div>
  );
}

//

//

//

//

//
