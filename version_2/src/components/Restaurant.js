import React, {useState} from 'react';
import BgColor from "./BgColor";
import restaurantdata from "../assets/restaurantdata.js";
import RestaurantList from "../container/RestaurantList";
const Restaurant = () => {


    const [bgColor,setBgColor]= useState("white")



    const divStyle={backgroundColor: bgColor}

    return (

        <div style={divStyle}>
          <BgColor bgColor={bgColor} setBgColor={setBgColor} />
          <h1>Restaurants Opening</h1>
          <p> This page shows the restaurant that are currently Opening.
          </p>
          <RestaurantList restaurantdata={restaurantdata} />
        </div>
      )
}

export default Restaurant;
