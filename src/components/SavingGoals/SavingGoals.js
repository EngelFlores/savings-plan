import './SavingGoals.css';

import {ONE_MONTH, ZERO} from '../../constants/numbers';
import React, {useEffect, useState} from 'react';
import DateReachingGoal from '../DateReachingGoal/DateReachingGoal';
import PlanSimulationResult from '../PlanSimulationResult/PlanSimulationResult';
import TotalAmount from '../TotalAmount/TotalAmount';

import calculateAmountOfMonths from '../../utils/calculateAmountOfMonths';
import calculateDeposits from '../../utils/calculateDeposits';

const SavingGoals = () => {
  const [goalDate, setGoalDate] = useState( new Date() );
  const [numberOfMonths, setNumberOfMonths] = useState( ZERO );
  const [monthlyDeposits, setMonthlyDeposits] = useState( ZERO );
  const [amountOfMoney, setAmountOfMoney] = useState( ZERO );

  useEffect( () => {
    const amountOfMonths = calculateAmountOfMonths( goalDate );
    setNumberOfMonths( amountOfMonths );
  }, [goalDate] );

  useEffect( () => {
    const deposits = calculateDeposits( numberOfMonths, amountOfMoney );
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

  const onKeyPressed = ( value ) => {
    const keyPressed = value.key;
    const notDisabled = !disableButton();
    if ( keyPressed === 'ArrowRight' ) {
      addMonth();
    }
    if ( keyPressed === 'ArrowLeft' && notDisabled ) {
      subtractMonth();
    }
  };

  const monthlyAmount = ( totalAmount ) => {
    const convertString = totalAmount.target.value.replace( ',', '' );
    const amount = parseFloat( convertString );
    setAmountOfMoney( amount );
  };

  return (
    <div className="saving-goals">
      <div className="saving-goals__inputs">
        <TotalAmount
          amountOfMoney={ amountOfMoney }
          monthlyAmount={ monthlyAmount }
        />
        <DateReachingGoal
          addMonth={ addMonth }
          disableButton={ disableButton }
          goalDate={ goalDate }
          onKeyPressed={ onKeyPressed }
          subtractMonth={ subtractMonth }
        />
      </div>
      <PlanSimulationResult
        amountOfMoney={ amountOfMoney }
        goalDate={ goalDate }
        monthlyDeposits={ monthlyDeposits }
        numberOfMonths={ numberOfMonths }
      />
    </div>
  );
};

export default SavingGoals;
