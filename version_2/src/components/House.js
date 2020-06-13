import HouseRentForm from "../container/HouseRentForm";

import React, {useState} from 'react';
const House = () => {
      return (
        <div className='house'>
          <h1>Houses For Rent</h1>
          <HouseRentForm data={[{}]}/>
        </div>
      )
}

export default House;
