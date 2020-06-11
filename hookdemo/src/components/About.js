import housingdata from "../assets/housingdata.js";
import ClassList from "../container/ClassList";
import HouseRentForm from "../container/HouseRentForm";

import React, {useState} from 'react';
const About = () => {
      return (
        <div>
          <h2>Houses For Rent</h2>
          <p> This app show how to create a multiscreen application
          and to manipulate state using hooks.
          </p>
          <ClassList data={housingdata} />
          <HouseRentForm data={[{}]}/>
        </div>
      )
}

export default About;
