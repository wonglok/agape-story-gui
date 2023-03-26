import { useEffect, useState } from "react";
import { useOS } from "../../../store/useOS";

export function AppGUI({ app }) {
  let [permission, setPermission] = useState("loading");
  let projectData = app.recent.find((r) => r.oid === app.activeID);

  useEffect(() => {
    if (projectData) {
      projectData.dirHandle
        .queryPermission({ mode: "readwrite" })
        .then((perm) => {
          setPermission(perm);
        });
    }
  }, [projectData]);

  return (
    <div className="w-full h-full">
      {permission === "loading" && (
        <div>
          Loading...
          {/*  */}
          {/*  */}
        </div>
      )}

      {permission === "prompt" && (
        <div className="w-full h-full flex justify-center items-center">
          {/*  */}
          <button
            onClick={() => {
              projectData.dirHandle
                .requestPermission({ mode: "readwrite" })
                .then((perm) => {
                  setPermission(perm);
                });
            }}
            className="p-3 px-6 rounded-xl border border-gray-500"
          >
            Access Folder
          </button>
          {/*  */}
        </div>
      )}

      {permission === "granted" && (
        <div>
          AppGUI
          <button
            onClick={() => {
              app.tab = "recent";
              app.activeID = "";
              app.title = "Artist App";
              useOS.getState().saveApp(app);
            }}
          >
            Back
          </button>
          {/*  */}
        </div>
      )}
    </div>
  );
}
