import {ONE_MONTH} from '../../constants/numbers';
import {useState} from 'react';

export const useGoalDate = () => {
  const [goalDate, setGoalDate] = useState( new Date() );

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
  return {addMonth, goalDate, subtractMonth};
};
