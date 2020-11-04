import './PlanType.css';
import React from 'react';
import logo from '../../icons/house.svg';

const PlanType = () => {
  return (
    <div className="plan-type">
      <img
        className="plan-type__logo"
        src={ logo }
      />
      <h2 className="plan-type__title">Buy a house</h2>
      <h3 className="plan-type__subtitle">Saving goal</h3>
    </div>
  );
};

export default PlanType;
