// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 
  const [operation, setOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null); 

  const handleDigit = (digit) => {
    setInput((prev) => prev + digit);
  };

  const handleOperation = (op) => {
    setPreviousValue(input);
    setInput('');
    setOperation(op);
  };


  const handleEquals = () => {
    if (!operation || !previousValue) return;

    const current = parseFloat(input);
    const previous = parseFloat(previousValue);

    switch (operation) {
      case '+':
        setResult(previous + current);
        break;
      case '-':
        setResult(previous - current);
        break;
      case '*':
        setResult(previous * current);
        break;
      case '/':
        setResult(previous / current);
        break;
      default:
        break;
    }
    setInput('');
    setOperation(null);
  };

  
  const handleClear = () => {
    setInput('');
    setResult('');
    setOperation(null);
    setPreviousValue(null);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result || input || '0'}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleDigit('7')}>7</button>
        <button onClick={() => handleDigit('8')}>8</button>
        <button onClick={() => handleDigit('9')}>9</button>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleDigit('4')}>4</button>
        <button onClick={() => handleDigit('5')}>5</button>
        <button onClick={() => handleDigit('6')}>6</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleDigit('1')}>1</button>
        <button onClick={() => handleDigit('2')}>2</button>
        <button onClick={() => handleDigit('3')}>3</button>
        <button onClick={() => handleDigit('0')} className="zero">
          0
        </button>
      </div>
    </div>
  );
};

export default Calculator;
