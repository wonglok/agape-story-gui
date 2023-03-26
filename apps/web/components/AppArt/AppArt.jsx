// import { useEffect } from "react";
// import { useOS } from "../../store/useOS";
// import { IconPainter } from "../OSAppIcon/IconPainter";
//
//

import { OSWindowFrame } from "../OSWindowFrame/OSWindowFrame";
// import { AppGUI } from "./AppGUI/AppGUI";
// import { RecentProjects } from "./RecentProjects/RecentProjects";
// import { RecentProjects } from "./RecentProjects/RecentProjects";
export function AppArt({ app }) {
  // let tab = app?.tab || "recent";
  // console.log(app);
  // let saveApp = useOS((s) => s.saveApp);
  // useEffect(() => {}, []);

  return (
    <>
      <OSWindowFrame>
        {/* {tab === "recent" && <RecentProjects app={app}></RecentProjects>}
        {tab === "app" && <AppGUI app={app}></AppGUI>} */}
      </OSWindowFrame>
    </>
  );
}

//
