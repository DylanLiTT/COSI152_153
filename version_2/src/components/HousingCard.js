import React from 'react';
import PropTypes from 'prop-types';

const HousingCard = ({ apt }) => {
  return (
    <div className='card'>
      <img src={apt.img.src}  className='card-img-top' alt={"no pic found"} />
      <div className='card-body'>
        <h2>
          <a href={apt.url} className='card-title'>{`${apt.name}`}</a>
        </h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Address: ${apt.address}`}</li>
        <li className='list-group-item'>{`Price Range: ${apt.price}`}</li>
      </ul>
    </div>
  );
};

HousingCard.propTypes = {
  apt: PropTypes.object.isRequired
}
/*
HousingCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};
*/
export default HousingCard;
