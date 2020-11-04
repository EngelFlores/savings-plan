import './SavingGoals.css';


import React, {useEffect, useState} from 'react';

import {ZERO} from '../../constants/numbers';

import arrowLeft from '../../icons/arrowLeft.svg';
import arrowRight from '../../icons/arrowRight.svg';
import dollarSign from '../../icons/dollarSign.svg';

const SavingGoals = () => {
  const [goalDate, setGoalDate] = useState( new Date() );
  const [numberOfMonths, setNumberOfMonths] = useState( ZERO );
  const [monthlyDeposits, setMonthlyDeposits] = useState( ZERO );
  const [amountOfMoney, setAmountOfMoney] = useState( ZERO );

  useEffect( () => {
    const dateNow = new Date();
    const monthsInYear = 12;
    const convertYearToMonths = ( goalDate.getFullYear() - dateNow.
      getFullYear() ) * monthsInYear;
    const months = goalDate.getMonth() - dateNow.getMonth();
    const amountOfMonths = convertYearToMonths + months;
    setNumberOfMonths( amountOfMonths );
  }, [goalDate] );

  useEffect( () => {
    const deposits = numberOfMonths
      ? Math.ceil( amountOfMoney/numberOfMonths ) : ZERO;
    setMonthlyDeposits( deposits );
  }, [numberOfMonths, amountOfMoney] );

  const addMonth = () => {
    const oneMonth = 1;
    const newGoalDate = new Date( goalDate.
      setMonth( goalDate.getMonth() + oneMonth ) );
    setGoalDate( newGoalDate );
  };

  const subtractMonth = () => {
    const oneMonth = 1;
    const newGoalDate = new Date( goalDate.
      setMonth( goalDate.getMonth() - oneMonth ) );
    setGoalDate( newGoalDate );
  };

  const disableButton = () => {
    const dateNow = new Date();
    const currentMonth = dateNow.getMonth();
    const currentYear = dateNow.getFullYear();
    return goalDate.getFullYear() <= currentYear &&
    goalDate.getMonth() <= currentMonth;
  };

  const monthlyAmount = ( totalAmount ) => {
    setAmountOfMoney( totalAmount.target.value );
  };

  return (
    <div className="saving-goals">
      <div className="saving-goals__inputs">
        <div className="saving-goals__inputs--amount-container">
          <h4>Total amount</h4>
          <div className="saving-goals__inputs--amount">
            <div className="saving-goals__inputs--dolar-sign">
              <img src={ dollarSign } />
            </div>
            <input onBlur={ monthlyAmount } />
          </div>
        </div>
        <div className="saving-goals__inputs--date-container">
          <h4>Reach goal by</h4>
          <div className="saving-goals__inputs--date">
            <button
              className="saving-goals__inputs--left-button"
              disabled={ disableButton() }
              onClick={ subtractMonth }
              type="button"
            >
              <img src={ arrowLeft } />
            </button>
            <div className="saving-goals__inputs--text">
              <p>
                {goalDate.toLocaleString( 'default', {month: 'long'} )}
              </p>
              <p>{goalDate.getFullYear()}</p>
            </div>
            <button
              className="saving-goals__inputs--right-button"
              onClick={ addMonth }
              type="button"
            >
              <img src={ arrowRight } />
            </button>
          </div>
        </div>
      </div>
      <div>Meses {numberOfMonths ? numberOfMonths : ''}</div>
      <div>Dinheiro {monthlyDeposits}</div>
    </div>
  );
};

export default SavingGoals;
