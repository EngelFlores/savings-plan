import React from 'react';
import SavingGoals from './SavingGoals';

import {render} from '@testing-library/react';

test( 'Render SavingGoals component', () => {
  const {container} = render( <SavingGoals /> );

  expect( container.childElementCount ).toBeTruthy();

} );

test( 'Check class on SavingGoals component', () => {
  const {container} = render( <SavingGoals /> );

  expect( container.children[0] ).toHaveClass( 'saving-goals' );

} );


