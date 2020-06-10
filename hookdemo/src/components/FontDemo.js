import React, {useState} from 'react';
import BgColor from "./BgColor";
import restaurantdata from "../assets/restaurantdata";
import CardList from "../container/CardList"
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

        /*<div style={divStyle}>
      <h2>Restaurants Opening</h2>
      <p> This app shows the restaurant that are currently Opening.
      </p>
      <CardList data={restaurantdata} />*/


)

}

export default FontDemo;
