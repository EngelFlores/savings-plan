const getMonthName = ( month ) => {
  return month.toLocaleString( 'default', {month: 'long'} );
};

export default getMonthName;
