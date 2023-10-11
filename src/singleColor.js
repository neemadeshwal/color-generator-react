import React, { useState } from "react";
import rgbToHex from "./utilis";

function newColor({ rgb, weight, index, type, hexColor }) {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");

  const HexVal = rgbToHex(...rgb);
  const hexvalue = `#${hexColor}`;
  function handleColorClick() {
    setAlert(true);
    navigator.clipboard.writeText(hexvalue);
  }
  console.log(alert);
  const styles = {
    color: type === "shade" ? "white" : "black",
    marginLeft: "2rem",
    fontWeight: 500,
    fontFamily: "sans-serif",
    cursor: "pointer"
  };
  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p style={styles}>{weight}%</p>
      <p onClick={handleColorClick} style={styles}>
        {hexvalue}
      </p>
      {alert && <p style={{ color: "gray" }}>Copied to Clipboard</p>}
    </article>
  );
}

export default newColor;
//color:{{${type==='shade'}?"white":"black"}
