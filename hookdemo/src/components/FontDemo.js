import React, {useState} from 'react';
import BgColor from "./BgColor";
import restaurantdata from "../assets/restaurantdata.js";
import CardList from "../container/CardList";
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
          <h3>Restaurants Opening</h3>
          <p> This app shows the restaurant that are currently Opening.
          </p>
          <CardList restaurantdata={restaurantdata} />
        </div>
      )
}

export default FontDemo;
