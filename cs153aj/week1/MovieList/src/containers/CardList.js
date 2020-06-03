import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card/Card';
import './CardList.css'

const CardList = ({data}) => {
  return (
   <div className='flex-container'>
     {data.map(course => (
       <div key={course.id} className='flex-container-element'>
         <Card course={course} />
       </div>
     ))}
   </div>
 );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default CardList;
