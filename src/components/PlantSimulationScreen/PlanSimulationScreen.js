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
        <h1 className="plan-simulation__container--title">Let's plan your
          <strong> saving goal.</strong>
        </h1>
        <div className="plan-simulation__container--body">
          <PlanType />
          <SavingGoals />
        </div>
      </div>
    </div>
  );
};

export default PlanSimulationScreen;
