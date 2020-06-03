import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ course }) => {
  return (
    <div className='card'>
      <img src={course.picture} className='card-img-top' alt={"no pic found"} />
      <div className='card-body'>
        <h2 className='card-title'>{`${course.coursenum} - ${course.title}`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Instructor: ${course.instructor}`}</li>
        <li className='list-group-item'>{`Session: ${course.session}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object.isRequired
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
export default Card;
