import {ONE_MONTH, ZERO} from '../../constants/numbers';
import {act, renderHook} from '@testing-library/react-hooks';
import {useGoalDate} from './useGoalDate';

describe( 'Change date', () => {
  test( 'Increment date by one day', () => {
    const {result} = renderHook( useGoalDate );
    const currentDate = new Date();
    const newDate = new Date( currentDate.
      setMonth( currentDate.getMonth() + ONE_MONTH ) );

    act( () => {
      result.current.addMonth();
    } );

    expect( result.current.goalDate.toString().split( 'T' )[ZERO] ).toEqual( newDate.toString().split( 'T' )[ZERO] );
  } );

  test( 'Decrement date by one day', () => {
    const {result} = renderHook( useGoalDate );
    const currentDate = new Date();
    const newDate = new Date( currentDate.
      setMonth( currentDate.getMonth() - ONE_MONTH ) );

    act( () => {
      result.current.subtractMonth();
    } );

    expect( result.current.goalDate.toString().split( 'T' )[ZERO] ).toEqual( newDate.toString().split( 'T' )[ZERO] );
  } );
} );
