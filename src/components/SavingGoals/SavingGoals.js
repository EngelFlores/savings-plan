import './SavingGoals.css';
import React, {useEffect, useState} from 'react';

import DateReachingGoal from '../DateReachingGoal/DateReachingGoal';
import PlanSimulationResult from '../PlanSimulationResult/PlanSimulationResult';
import TotalAmount from '../TotalAmount/TotalAmount';
import {ZERO} from '../../constants/numbers';

import calculateAmountOfMonths from '../../utils/calculateAmountOfMonths';
import calculateDeposits from '../../utils/calculateDeposits';

import {useAmountOfMoney} from '../../hooks/useAmountOfMoney/useAmountOfMoney';
import {useGoalDate} from '../../hooks/useGoalDate/useGoalDate';

const SavingGoals = () => {
  const {addMonth, goalDate, subtractMonth} = useGoalDate();
  const {amountOfMoney, monthlyAmount} = useAmountOfMoney();
  const [numberOfMonths, setNumberOfMonths] = useState( ZERO );
  const [monthlyDeposits, setMonthlyDeposits] = useState( ZERO );

  useEffect( () => {
    const amountOfMonths = calculateAmountOfMonths( goalDate );
    setNumberOfMonths( amountOfMonths );
  }, [goalDate] );

  useEffect( () => {
    const deposits = calculateDeposits( numberOfMonths, amountOfMoney );
    setMonthlyDeposits( deposits );
  }, [numberOfMonths, amountOfMoney] );

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

  return (
    <div
      className="saving-goals"
      data-testid="saving-goals"
    >
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
