import {render, waitFor} from '@testing-library/react';

import PlanSimulationResult from './PlanSimulationResult';
import React from 'react';

test( 'Render PlanSimulationResult component with correct props', () => {
  const numberOfMonths = 10;
  const amountOfMoney = 2500;
  const monthlyDeposits = amountOfMoney/numberOfMonths;
  const goalDate = new Date();
  const {container} =
  render(
    <PlanSimulationResult
      amountOfMoney={ amountOfMoney }
      goalDate={ goalDate }
      monthlyDeposits={ monthlyDeposits }
      numberOfMonths={ numberOfMonths }
    /> );

  expect( container.childElementCount ).toBeTruthy();

} );

test( 'Render PlanSimulationResult component with correct props', async () => {
  const numberOfMonths = 10;
  const amountOfMoney = 2500;
  const monthlyDeposits = amountOfMoney/numberOfMonths;
  const goalDate = new Date();
  const {getByTestId} =
  render(
    <PlanSimulationResult
      amountOfMoney={ amountOfMoney }
      goalDate={ goalDate }
      monthlyDeposits={ monthlyDeposits }
      numberOfMonths={ numberOfMonths }
    /> );

  const monthlyDepositsElement = await waitFor( () => getByTestId( 'monthly-deposits' ) );
  const amountOfMoneyElement = await waitFor( () => getByTestId( 'amount-of-money' ) );

  expect( monthlyDepositsElement ).toHaveTextContent( monthlyDeposits );
  expect( amountOfMoneyElement ).toHaveTextContent( amountOfMoney );

} );