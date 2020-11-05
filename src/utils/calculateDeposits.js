import {ZERO} from '../constants/numbers';

const calculateDeposits = ( numberOfMonths, amountOfMoney ) => {
  const deposits = numberOfMonths
    ? Math.ceil( amountOfMoney/numberOfMonths ) : ZERO;
  return deposits;
};

export default calculateDeposits;
