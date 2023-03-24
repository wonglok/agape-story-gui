import { useOS } from "../../store/useOS";
import { OSWindowFrame } from "../OSWindowFrame/OSWindowFrame";
import { Steps } from "./Steps";
export function OSEnter() {
  return (
    <>
      <OSWindowFrame>
        <h1 className=" text-3xl mt-7 px-6 font-extralight">My Apps</h1>
        <div className="  px-6 text-xl text-gray-500">Recently installed</div>
        <div style={{ height: `1px` }} className="bg-gray-500 mx-6 my-3"></div>
        <div className="mx-6 ">
          {/*  */}
          <div className="w-20 h-20 justify-center flex mb-3 shadow-lg shadow-pink-200 rounded-2xl">
            <button className="w-20 h-20 text-xs text-center select-none p-2 bg-pink-200 rounded-2xl shadow-inner shadow-pink-500 flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373z" />
              </svg>
              <span className="mt-3">Painting</span>
            </button>
          </div>

          {/* <div>
            <Steps></Steps>
          </div> */}
        </div>
      </OSWindowFrame>
    </>
  );
}