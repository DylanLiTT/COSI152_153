import HouseRentForm from "../container/HouseRentForm";

import React, {useState} from 'react';
const House = () => {
      return (
        <div className='house'>
          <h1>login</h1>
          <div id="login">
            <form className="login form">
            <label for="name">User Name</label>
            <input type="name" name="username" value=""/>
            <label for="password">Password</label>
            <input type="password" name="password" value=""/>
            <input class="button" type="submit" value="submit"/>
            </form> 
          </div>
          <h2>Houses For Rent</h2>
          <HouseRentForm data={[{}]}/>

        </div>
      )
}

export default House;
