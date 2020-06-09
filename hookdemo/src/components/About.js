import React from 'react';
import housingdata from "../assets/housingdata.js";
import ClassList from "../container/ClassList";
const About = () => {
      return (
        <div>
          <h2>Houses For Rent</h2>
          <p> This app show how to create a multiscreen application
          and to manipulate state using hooks.
          </p>
          <ClassList data={housingdata} /> //
        </div>
      )
}

export default About;
