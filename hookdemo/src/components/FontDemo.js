import React, {useState} from 'react';
import BgColor from "./BgColor";


const FontDemo = () => {


    const [bgColor,setBgColor]= useState("white")



    const divStyle={backgroundColor: bgColor}

    return (
        <div style={divStyle}>
          <h2>Dark mode</h2>
          <p>
            Here we change the mode of this page.
          </p>
          <BgColor bgColor={bgColor} setBgColor={setBgColor} />
        </div>
      )
}

export default FontDemo;
