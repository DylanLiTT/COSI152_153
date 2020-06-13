import HouseRentForm from "../container/HouseRentForm";

import React, {useState} from 'react';
const House = () => {
      return (
        <div className='house'>
          <h2>Houses For Rent</h2>
          <p> This app show how to create a multiscreen application
          and to manipulate state using hooks.
          </p>
          <HouseRentForm data={[{}]}/>
        </div>
      )
}

export default House;
