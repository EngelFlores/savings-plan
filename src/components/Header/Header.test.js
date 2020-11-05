import Header from './Header';
import React from 'react';

import {render} from '@testing-library/react';

test( 'Render Header component', () => {
  const {container} = render( <Header /> );

  expect( container.childElementCount ).toBeTruthy();

} );

test( 'Check class on Header component', () => {
  const {container} = render( <Header /> );

  expect( container.children[0] ).toHaveClass( 'header' );

} );


