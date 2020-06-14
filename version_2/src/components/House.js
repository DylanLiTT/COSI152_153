import HouseRentForm from "../container/HouseRentForm";

import React, {useState} from 'react';
const House = () => {
      return (
        <div className='house'>
          <h2>Houses For Rent</h2>
          <HouseRentForm data={[{}]}/>
        </div>
      )
}

export default House;
