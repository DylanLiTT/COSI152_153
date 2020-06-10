import React from 'react';
import PropTypes from 'prop-types';
import restaurantCard from "../components/restaurantCard.js";
import styled from 'styled-components';

const CardsWrapper = styled.div`
  display: block-inline;
  flex-wrap: wrap;
`;
const  ClassList = ({restaurantdata}) => {
  return (
   <CardsWrapper>
       {restaurantdata.map(res => (
         <div key={res.id} className='flex-container-element'>
           <restaurantCard restaurant={res} />
         </div>
       ))}
   </CardsWrapper>
 );
}

ClassList.propTypes = {
    data: PropTypes.array.isRequired,

};


export default ClassList;
