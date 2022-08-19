import React from "react";
import "./DesktopShortcut.css";

// props === properties
// props are data that I can pass into HTML (component)
function DesktopShortcut(props) {
  return (
    <div>
      <img src={props.image} className="image" />
      <div>{props.text}</div>
    </div>
  );
}

export default DesktopShortcut;
