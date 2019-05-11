import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const KeyPad = props => {
    return (
        <div className="keypad">
            <ActionButton buttonStyle={'action'} text={'clear'}/>
            <NumberButton buttonStyle={'operator'} text={'\u00F7'}/>
            <NumberButton buttonStyle={'integer'}  text={7}/>
            <NumberButton buttonStyle={'integer'} text={8}/>
            <NumberButton buttonStyle={'integer'} text={9}/>
            <NumberButton buttonStyle={'operator'} text={'\u00D7'}/>
            <NumberButton buttonStyle={'integer'} text={4}/>
            <NumberButton buttonStyle={'integer'} text={5}/>
            <NumberButton buttonStyle={'integer'} text={6}/>
            <NumberButton buttonStyle={'operator'} text={'\u2212'}/>
            <NumberButton buttonStyle={'integer'} text={1}/>
            <NumberButton buttonStyle={'integer'} text={2}/>
            <NumberButton buttonStyle={'integer'} text={3}/>
            <NumberButton buttonStyle={'operator'} text={'\u002b'}/>
            <ActionButton buttonStyle={'action'} text={0}/>
            <NumberButton buttonStyle={'operator'} text={'\u003d'}/>
      </div>
    );
};

export default KeyPad;