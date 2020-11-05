import {MONTHS_IN_YEAR} from '../constants/numbers';

const calculateAmountOfMonths = ( goalDate ) => {
  const dateNow = new Date();
  const convertYearsToMonths = ( goalDate.getFullYear() - dateNow.
    getFullYear() ) * MONTHS_IN_YEAR;
  const months = goalDate.getMonth() - dateNow.getMonth();
  const amountOfMonths = convertYearsToMonths + months;
  return amountOfMonths;
};

export default calculateAmountOfMonths;
