import React from 'react';
import PropTypes from 'prop-types';

const RestaurantCard = ({ restaurant }) => {
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

RestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired
}

export default RestaurantCard;
