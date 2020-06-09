import React from 'react';
import PropTypes from 'prop-types';
import Card from "../components/Card.js";
import styled from 'styled-components';
const CardsWrapper = styled.div`
  display: block-inline;
  flex-wrap: wrap;
`;
const  ClassList = ({data}) => {
  return (
   <CardsWrapper>
       {data.map(house => (
         <div key={house.id} className='flex-container-element'>
           <Card apt={house} />
         </div>
       ))}
   </CardsWrapper>
 );
}

ClassList.propTypes = {
    data: PropTypes.array.isRequired,

};


export default ClassList;
