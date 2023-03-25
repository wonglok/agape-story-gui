import { useOS } from "../../store/useOS";
import { IconPainter } from "../OSAppIcon/IconPainter";
import { OSWindowFrame } from "../OSWindowFrame/OSWindowFrame";
import { RecentProjects } from "./RecentProjects/RecentProjects";
export function AppArt({ app }) {
  console.log(app);
  return (
    <>
      <OSWindowFrame>
        {/*  */}
        {/* <RecentProjects></RecentProjects> */}
      </OSWindowFrame>
    </>
  );
}
