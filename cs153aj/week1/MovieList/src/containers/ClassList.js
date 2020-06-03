import React from 'react';
import PropTypes from 'prop-types';


const  ClassList = ({data,title}) => {
  return (
   <>
     <h1> {title} </h1>
     <ul>
       {data.map(course => (
         <li key={course.id}>
           {course.coursenum} -- {course.title}
         </li>
       ))}
     </ul>
   </>
 );
}

ClassList.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};


export default ClassList;
