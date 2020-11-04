import './SavingGoals.css';

import {MONTHS_IN_YEAR, ONE_MONTH, ZERO} from '../../constants/numbers';
import React, {useEffect, useState} from 'react';
import DateReachingGoal from '../DateReachingGoal/DateReachingGoal';
import TotalAmount from '../TotalAmount/TotalAmount';

import getMonthName from '../../utils/getMonthName';


const SavingGoals = () => {
  const [goalDate, setGoalDate] = useState( new Date() );
  const [numberOfMonths, setNumberOfMonths] = useState( ZERO );
  const [monthlyDeposits, setMonthlyDeposits] = useState( ZERO );
  const [amountOfMoney, setAmountOfMoney] = useState( ZERO );

  useEffect( () => {
    const dateNow = new Date();
    const convertYearsToMonths = ( goalDate.getFullYear() - dateNow.
      getFullYear() ) * MONTHS_IN_YEAR;
    const months = goalDate.getMonth() - dateNow.getMonth();
    const amountOfMonths = convertYearsToMonths + months;
    setNumberOfMonths( amountOfMonths );
  }, [goalDate] );

  useEffect( () => {
    const deposits = numberOfMonths
      ? Math.ceil( amountOfMoney/numberOfMonths ) : ZERO;
    setMonthlyDeposits( deposits );
  }, [numberOfMonths, amountOfMoney] );

  const addMonth = () => {
    const newGoalDate = new Date( goalDate.
      setMonth( goalDate.getMonth() + ONE_MONTH ) );
    setGoalDate( newGoalDate );
  };

  const subtractMonth = () => {
    const newGoalDate = new Date( goalDate.
      setMonth( goalDate.getMonth() - ONE_MONTH ) );
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
        <TotalAmount monthlyAmount={ monthlyAmount } />
        <DateReachingGoal
          addMonth={ addMonth }
          disableButton={ disableButton }
          goalDate={ goalDate }
          subtractMonth={ subtractMonth }
        />
      </div>
      <div className={ `saving-goals__output 
        ${ numberOfMonths && amountOfMoney ? '' : 'hidden' }` }
      >
        <div className="saving-goals__output--container--montly-amount">
          <span className="saving-goals__output--title">Monthly amount</span>
          <span className="saving-goals__output--montly-amount">
            {monthlyDeposits ? `$${ monthlyDeposits }`: ''}
          </span>
        </div>
        <div className="saving-goals__output--plan">
          <span>You’re planning</span>
          <strong>
            { ` ${ numberOfMonths } monthly deposit${ numberOfMonths>ONE_MONTH ? 's ' : ' ' }` }
          </strong>
          <span>to reach your</span>
          <strong>{ ` $${ amountOfMoney } ` } </strong>
          <span>goal by</span>
          <strong>{` ${ getMonthName( goalDate ) } ${ goalDate.getFullYear() }.`}</strong>
        </div>
      </div>
    </div>
  );
};

export default SavingGoals;
