// import { useRef } from "react";
import { useOS } from "../../../store/useOS";

function Create({ app }) {
  return (
    <>
      <div className="mx-6 ">
        {/*  */}

        <button
          onClick={async () => {
            const root = await navigator.storage.getDirectory({
              mode: "readwrite",
            });

            console.log(root);

            // //
            // window
            //   .showDirectoryPicker({
            //     id: app.oid,
            //     mode: "readwrite",
            //     startIn: "documents",
            //   })
            //   .then(async (dirHandle) => {
            //     console.log(dirHandle);
            //     recent.push({
            //       oid: getID(),
            //       title: dirHandle.name, // || "newfolder",
            //       dirHandle,
            //     });

            //     useOS.getState().saveApp(app);
            //   })
            //   .catch((r) => {
            //     console.log(r);
            //   });
          }}
          className="border-gray-500 border py-1 px-4 text-sm"
        >
          Open Folder
        </button>
        {/*  */}

        {/*  */}
      </div>
    </>
  );
}

export function RecentProjects({ app }) {
  return (
    <>
      <h1 className=" text-3xl mt-7 px-6 font-extralight">Artist App</h1>
      <div className="  px-6 text-xl text-gray-500">
        Scene Layout, Realtime Materials, Lighting, VFX, etc....
      </div>
      <div style={{ height: `1px` }} className="bg-gray-500 mx-6 my-3"></div>
      {/*  */}
      <Create app={app}></Create>
      {/*  */}
      {/*  */}

      <List app={app}></List>
      {/*  */}
    </>
  );
}

export const List = ({ app }) => {
  //
  let recent = app.recent || [];
  app.recent = recent;

  return (
    <>
      <div className="h-3"></div>
      <div className="   px-6 text-xl text-gray-500">Recent File</div>
      <div className="mx-6 ">
        {app.recent.map((r) => {
          return (
            <div key={r.oid} className="">
              <button
                className="text-sm underline mb-1"
                onClick={async () => {
                  let permission = await r.dirHandle.queryPermission({
                    mode: "readwrite",
                  });

                  if (permission === "prompt") {
                    permission = await r.dirHandle.requestPermission({
                      mode: "readwrite",
                    });
                  }

                  if (permission === "granted") {
                    //
                    console.log(permission);
                    app.tab = "app";
                    app.activeID = r.oid;
                    app.title = r.title;

                    useOS.getState().saveApp(app);

                    //
                  }

                  //
                }}
              >
                {r.title}
              </button>
            </div>
          );
        })}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
    </>
  );
};
