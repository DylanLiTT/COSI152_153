import React from 'react';
import PropTypes from 'prop-types';

const restaurantCard = ({ restaurant }) => {
  return (
    <div className='card' class="col-sm-4">
      <img src={restaurant.img.src} height="200" width="80" className='card-img-top' alt={"no pic found"} />
      <div className='card-body'>
        <h2>
          <a href={restaurant.url} className='card-title'>{`${restaurant.name}`}</a>
        </h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Address: ${restaurant.address}`}</li>
        <li className='list-group-item'>{`Price Range: ${restaurant.hours}`}</li>
      </ul>
    </div>
  );
};

restaurantCard.propTypes = {
  apt: PropTypes.object.isRequired
}
/*
Card.propTypes = {
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
export default restaurantCard;
