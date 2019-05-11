import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <div className="keypad">
        <CalculatorDisplay/>
        <ActionButton buttonStyle={'action'} text={'clear'}/>
        <NumberButton buttonStyle={'operator'} text={'%'}/>
        <NumberButton buttonStyle={'integer'}  text={7}/>
        <NumberButton buttonStyle={'integer'} text={8}/>
        <NumberButton buttonStyle={'integer'} text={9}/>
        <NumberButton buttonStyle={'operator'} text={'x'}/>
        <NumberButton buttonStyle={'integer'} text={4}/>
        <NumberButton buttonStyle={'integer'} text={5}/>
        <NumberButton buttonStyle={'integer'} text={6}/>
        <NumberButton buttonStyle={'operator'} text={'-'}/>
        <NumberButton buttonStyle={'integer'} text={1}/>
        <NumberButton buttonStyle={'integer'} text={2}/>
        <NumberButton buttonStyle={'integer'} text={3}/>
        <NumberButton buttonStyle={'operator'} text={'+'}/>
        <ActionButton buttonStyle={'action'} text={0}/>
        <NumberButton buttonStyle={'operator'} text={'='}/>
      </div>
    </div>
  );
};

export default App;
