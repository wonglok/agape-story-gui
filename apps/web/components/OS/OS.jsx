import { useOS } from "../../store/useOS";
import { AppArt } from "../AppArt/AppArt";
import { OSBar } from "../OSBar/OSBar";
import { OSEnter } from "../OSEnter/OSEnter";
import { OSLanding } from "../OSLanding/OSLanding";

// import { Button } from "ui";
export function OS() {
  let winTab = useOS((s) => s.winTab);
  let apps = useOS((s) => s.apps);
  return (
    <div className="relative w-full h-full">
      <OSBar></OSBar>
      {winTab === "home" && <OSLanding></OSLanding>}
      {winTab === "apps" && <OSEnter></OSEnter>}

      {apps
        .filter((r) => {
          return winTab === r.oid;
        })
        .map((app) => {
          if (app.type === "painter") {
            return <AppArt title={app.title} key={app.oid} app={app}></AppArt>;
          } else {
            return <div title={app.title} key={app.oid} app={app}></div>;
          }
        })}

      {/* {winTab ===  && <OSEnter></OSEnter>} */}
    </div>
  );
}

//
