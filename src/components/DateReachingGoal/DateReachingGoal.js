import './DateReachingGoal.css';
import PropTypes from 'prop-types';
import React from 'react';
import arrowLeft from '../../icons/arrowLeft.svg';
import arrowRight from '../../icons/arrowRight.svg';

import getMonthName from '../../utils/getMonthName';
const DateReachingGoal = ( {disableButton, subtractMonth, addMonth, goalDate, onKeyPressed} ) => {
  return (
    <div className="date-reaching-goal">
      <h4>Reach goal by</h4>
      <div className="date-reaching-goal__input">
        <button
          className="date-reaching-goal__input--left-button"
          disabled={ disableButton() }
          onClick={ subtractMonth }
          onKeyDown={ onKeyPressed }
          type="button"
        >
          <img
            alt="Arrow-left to decrease the number of months"
            src={ arrowLeft }
          />
        </button>
        <div className="date-reaching-goal__input--text">
          <p className="date-reaching-goal__input--month-name">
            {getMonthName( goalDate )}
          </p>
          <p>{goalDate.getFullYear()}</p>
        </div>
        <button
          autoFocus={ true }
          className="date-reaching-goal__input--right-button"
          onClick={ addMonth }
          onKeyDown={ onKeyPressed }
          type="button"
        >
          <img
            alt="Arrow-right to increase the number of months"
            src={ arrowRight }
          />
        </button>
      </div>
    </div>
  );
};

export default DateReachingGoal;

DateReachingGoal.propTypes = {
  addMonth: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  goalDate: PropTypes.instanceOf( Date ),
  onKeyPressed: PropTypes.func.isRequired,
  subtractMonth: PropTypes.func.isRequired
};

DateReachingGoal.defaultProps = {
  goalDate: new Date()
};
