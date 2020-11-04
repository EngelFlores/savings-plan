import './TotalAmount.css';
import PropTypes from 'prop-types';
import React from 'react';
import dollarSign from '../../icons/dollarSign.svg';

const TotalAmount = ( {monthlyAmount} ) => {
  return (
    <div className="total-amount">
      <h4>Total amount</h4>
      <div className="total-amount__input">
        <div className="total-amount__input--dolar-sign">
          <img src={ dollarSign } />
        </div>
        <input onBlur={ monthlyAmount } />
      </div>
    </div>
  );
};

export default TotalAmount;

TotalAmount.propTypes = {
  monthlyAmount: PropTypes.func.isRequired
};
