import {ZERO} from '../../constants/numbers';
import {useState} from 'react';

export const useAmountOfMoney = () => {
  const [amountOfMoney, setAmountOfMoney] = useState( ZERO );

  const monthlyAmount = ( totalAmount ) => {
    const convertString = totalAmount.target.value.replace( ',', '' );
    const amount = parseFloat( convertString );
    setAmountOfMoney( amount );
  };
  return {amountOfMoney, monthlyAmount};
};
