
import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');//initial state for input 
  const [result, setResult] = useState(''); //initial state for result 

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);// setter function when values are added for previously added value
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  }; // function for clear button

  // function for calculation here 
  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      if (isNaN(evalResult)) {
        setResult('Error');
        setInput('');
      } else {
        setResult(evalResult.toString());
        setInput(evalResult.toString()); 
      }
    } catch (error) {
      setResult('Error');
      setInput('');
    }
  }; 
// jsx 
  return (
    <div className="calculator">
      <div className="input">{input || result}</div>
      <div className="buttons">
        
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button className="calculate" onClick={() => calculateResult()}>
          =
        </button>
        <button onClick={() => handleInput('/')}>/</button>
        <button className="clear" onClick={() => clearInput()}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
