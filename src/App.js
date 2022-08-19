import "./App.css";
import DesktopShortcut from "./DesktopShortcut";
import ReadmeSVG from "./readme.svg";
import PlaySVG from "./play.svg";

function App() {
  return (
    <div className="container">
      <DesktopShortcut text={"READ ME"} image={ReadmeSVG} />
      <DesktopShortcut text={"PLAY"} image={PlaySVG} />
    </div>
  );
}

export default App;
