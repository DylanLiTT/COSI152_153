import housingdata from "../assets/housingdata.js";
import HousingList from "../container/HousingList";
import HouseRentForm from "../container/HouseRentForm";

import React, {useState} from 'react';
const House = () => {
      return (
        <div>
          <h2>Houses For Rent</h2>
          <p> This app show how to create a multiscreen application
          and to manipulate state using hooks.
          </p>
          <HousingList housingdata={housingdata} />
          <HouseRentForm data={[{}]}/>
        </div>
      )
}

export default House;
