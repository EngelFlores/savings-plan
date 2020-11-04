import './PlanSimulationScreen.css';
import Header from '../Header/Header';
import PlanType from '../PlanType/PlanType';
import React from 'react';
import SavingGoals from '../SavingGoals/SavingGoals';

const PlanSimulationScreen = () => {
  return (
    <div className="plan-simulation">
      <Header />
      <div className="plan-simulation__container">
        <PlanType />
        <SavingGoals />
      </div>
    </div>
  );
};

export default PlanSimulationScreen;
