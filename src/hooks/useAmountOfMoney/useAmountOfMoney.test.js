import {act, renderHook} from '@testing-library/react-hooks';
import {useAmountOfMoney} from './useAmountOfMoney';

describe( 'Set amount of money', () => {
  test( 'Increment date by one day', () => {
    const {result} = renderHook( useAmountOfMoney );
    const amount = {target: {value: '2500'}};
    const currentAmount = 2500;

    act( () => {
      result.current.monthlyAmount( amount );
    } );

    expect( result.current.amountOfMoney ).toEqual( currentAmount );
  } );
} );
