import React from 'react';
import PropTypes from 'prop-types';
import HousingCard from "../components/HousingCard.js";
import styled from 'styled-components';
import './List.css'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const HousingList = ({housingdata}) => {
  return (
   <CardsWrapper>
       {housingdata.map(house => (
         <div key={house.id} className='flex-container-element'>
           <HousingCard apt={house} />
         </div>
       ))}
   </CardsWrapper>
 );
}

HousingList.propTypes = {
    housingdata: PropTypes.array.isRequired,

};


export default HousingList;
