import React, {useState} from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../components/RestaurantCard';
import styled from 'styled-components';
import './List.css'

const CardsWrapper = styled.div`
  display: felx;
  flex-wrap: wrap;
`;

const CardList = ({restaurantdata = []}) => {
  return (
   <CardsWrapper>
       {restaurantdata.map(res => (
         <div key={res.id} className='flex-container-element'>
           <RestaurantCard restaurant={res} />
         </div>
       ))}
   </CardsWrapper>
 );
}

CardList.propTypes = {
    restaurantdata: PropTypes.array.isRequired,
};


export default CardList;
