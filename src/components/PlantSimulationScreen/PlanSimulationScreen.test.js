import PlanSimulationScreen from './PlanSimulationScreen';
import React from 'react';

import {render} from '@testing-library/react';

test( 'Render PlanSimulationScreen component', () => {
  const {container} = render( <PlanSimulationScreen /> );

  expect( container.childElementCount ).toBeTruthy();

} );

test( 'Check class on PlanSimulationScreen component', () => {
  const {container} = render( <PlanSimulationScreen /> );

  expect( container.children[0] ).toHaveClass( 'plan-simulation' );

} );


