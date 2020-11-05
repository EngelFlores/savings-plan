import {fireEvent, render, waitFor} from '@testing-library/react';

import React from 'react';
import TotalAmount from './TotalAmount';

test( 'Render TotalAmount component with correct props', () => {
  const monthlyAmount = jest.fn();
  const {container} =
  render(
    <TotalAmount
      monthlyAmount={ monthlyAmount }
    /> );

  expect( container.childElementCount ).toBeTruthy();

} );

test( 'Check event fire on TotalAmount component', async () => {
  const monthlyAmount = jest.fn();
  const {getByTestId} =
  render(
    <TotalAmount
      monthlyAmount={ monthlyAmount }
    /> );

  const totalAmountInput = await waitFor( () => getByTestId( 'total-amount-input' ) );

  fireEvent.blur(totalAmountInput)

  expect( monthlyAmount ).toHaveBeenCalledTimes(1);

} );