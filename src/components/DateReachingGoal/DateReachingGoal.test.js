import {fireEvent, render, waitFor} from '@testing-library/react';

import DateReachingGoal from './DateReachingGoal';
import React from 'react';

test( 'Render DateReachGoal component with correct props', () => {
  const disableButton = () => false;
  const subtractMonth = () => false;
  const addMonth = () => false;
  const goalDate = new Date();
  const onKeyPressed = () => false;
  const {container} =
  render(
    <DateReachingGoal
      addMonth={ addMonth }
      disableButton={ disableButton }
      goalDate={ goalDate }
      onKeyPressed={ onKeyPressed }
      subtractMonth={ subtractMonth }
    /> );

  expect( container.childElementCount ).toBeTruthy();

} );

test( 'Render month name and year', async () => {
  const disableButton = () => false;
  const subtractMonth = () => false;
  const addMonth = () => false;
  const goalDate = new Date();
  const month = goalDate.toLocaleString( 'default', {month: 'long'} );
  const year = goalDate.getFullYear();
  const onKeyPressed = () => false;
  const {getByTestId} =
  render(
    <DateReachingGoal
      addMonth={ addMonth }
      disableButton={ disableButton }
      goalDate={ goalDate }
      onKeyPressed={ onKeyPressed }
      subtractMonth={ subtractMonth }
    /> );

  const monthName = await waitFor( () => getByTestId( 'month-name' ) );
  const yearRender = await waitFor( () => getByTestId( 'year' ) );

  expect( monthName ).toHaveTextContent( month );
  expect( yearRender ).toHaveTextContent( year );

} );

test( 'Render month name', async () => {
  const disableButton = () => false;
  const subtractMonth = () => false;
  const addMonth = () => false;
  const goalDate = new Date();
  const month = goalDate.toLocaleString( 'default', {month: 'long'} );
  const onKeyPressed = () => false;
  const {getByTestId} =
  render(
    <DateReachingGoal
      addMonth={ addMonth }
      disableButton={ disableButton }
      goalDate={ goalDate }
      onKeyPressed={ onKeyPressed }
      subtractMonth={ subtractMonth }
    /> );

  const monthName = await waitFor( () => getByTestId( 'month-name' ) );

  expect( monthName ).toHaveTextContent( month );

} );

test( 'Check event fire', async () => {
  const disableButton = () => false;
  const goalDate = new Date();
  const addMonth = jest.fn();
  const subtractMonth = jest.fn();
  const onKeyPressed = () => false;
  const {getByTestId} =
  render(
    <DateReachingGoal
      addMonth={ addMonth }
      disableButton={ disableButton }
      goalDate={ goalDate }
      onKeyPressed={ onKeyPressed }
      subtractMonth={ subtractMonth }
    /> );

  const subtractButton = await waitFor( () => getByTestId( 'subtract-month-button'));
  const addButton = await waitFor( () => getByTestId( 'add-month-button'));

  fireEvent.click(subtractButton)
  fireEvent.click(addButton)


  expect( subtractMonth ).toHaveBeenCalledTimes(1);
  expect( addMonth ).toHaveBeenCalledTimes(1);

} );