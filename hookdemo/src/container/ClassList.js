import React from 'react';
import PropTypes from 'prop-types';
import Card from "../components/Card.js";

const  ClassList = ({data}) => {
  return (
   <>
     <div className='flex-container'>
       {data.map(house => (
         <div key={house.id} className='flex-container-element'>
           <Card apt={house} />
         </div>
       ))}
     </div>

   </>
 );
}

ClassList.propTypes = {
    data: PropTypes.array.isRequired,

};


export default ClassList;
