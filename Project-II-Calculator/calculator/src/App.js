import React from 'react';
import './App.css';
import KeyPad from './components/KeyPadComponent/KeyPad';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay/>
      <KeyPad />
    </div>
  );
};

export default App;
