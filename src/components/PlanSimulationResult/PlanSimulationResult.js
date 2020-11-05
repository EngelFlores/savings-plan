import './PlanSimulationResult.css';
import {ONE_MONTH} from '../../constants/numbers';
import PropTypes from 'prop-types';
import React from 'react';

import getMonthName from '../../utils/getMonthName';

const PlanSimulationResult = ( {numberOfMonths, amountOfMoney, monthlyDeposits, goalDate} ) => {
  return (
    <div className={ `plan-simulation-result
        ${ numberOfMonths && amountOfMoney ? '' : 'hidden' }` }
    >
      <div className="plan-simulation-result__container">
        <span className="plan-simulation-result__title">Monthly amount</span>
        <span className="plan-simulation-result__montly-amount">
          {monthlyDeposits ? `$${ monthlyDeposits.toLocaleString() }`: ''}
        </span>
      </div>
      <div className="plan-simulation-result__body">
        <span>You’re planning</span>
        <strong>
          { ` ${ numberOfMonths } monthly deposit${ numberOfMonths>ONE_MONTH ? 's ' : ' ' }` }
        </strong>
        <span>to reach your</span>
        <strong>{ ` $${ amountOfMoney } ` } </strong>
        <span>goal by</span>
        <strong>{` ${ getMonthName( goalDate ) } ${ goalDate.getFullYear() }.`}</strong>
      </div>
    </div>

  );
};

export default PlanSimulationResult;

PlanSimulationResult.propTypes = {
  amountOfMoney: PropTypes.number,
  goalDate: PropTypes.instanceOf( Date ),
  monthlyDeposits: PropTypes.number,
  numberOfMonths: PropTypes.number
};

PlanSimulationResult.defaultProps = {
  amountOfMoney: 0,
  goalDate: new Date(),
  monthlyDeposits: 0,
  numberOfMonths: 0
};
