import React from 'react';
import ShoppingHeader from '../components/ShoppingHeader';
import ShoppingPlace from '../components/ShoppingPlace';
import GroceriesPlace from '../components/GroceriesPlace';


function App() {
  return (
    <>
      <ShoppingHeader/>
      <ShoppingPlace />
      <GroceriesPlace />
    </>
  );
}

export default App;