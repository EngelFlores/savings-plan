import PlanType from './PlanType';
import React from 'react';

import {render} from '@testing-library/react';

test( 'Render PlanType component', () => {
  const {container} = render( <PlanType /> );

  expect( container.childElementCount ).toBeTruthy();

} );

test( 'Check class on PlanType component', () => {
  const {container} = render( <PlanType /> );

  expect( container.children[0] ).toHaveClass( 'plan-type' );

} );


