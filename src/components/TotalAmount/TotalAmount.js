import './TotalAmount.css';
import CurrencyFormat from 'react-currency-format';
import PropTypes from 'prop-types';
import React from 'react';
import dollarSign from '../../icons/dollarSign.svg';

const TotalAmount = ( {monthlyAmount} ) => {
  return (
    <div>
      <h4>Total amount</h4>
      <div className="total-amount">
        <div className="total-amount__dolar-sign">
          <img
            alt="Dollar sign"
            src={ dollarSign }
          />
        </div>
        <CurrencyFormat
          className="total-amount__input"
          onBlur={ monthlyAmount }
          thousandSeparator={ true }
        />
      </div>
    </div>
  );
};

export default TotalAmount;

TotalAmount.propTypes = {
  monthlyAmount: PropTypes.func.isRequired
};
