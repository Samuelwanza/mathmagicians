import React, { useState } from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setData((state) => ({
      ...state,
      ...calculate(state, e.target.value),
    }));
  };

  return (
    <div className="calculator-container">
      <input
        type="text"
        value={`${data.total || ''}${data.operation || ''}${data.next || ''}`}
      />

      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="AC"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="+/-"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="%"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass subclass"
          text="&divide;"
          buttonFunctionality={handleClick}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="7"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="8"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="9"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass subclass"
          text="x"
          buttonFunctionality={handleClick}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="4"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="5"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="6"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass subclass"
          text="-"
          buttonFunctionality={handleClick}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="1"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="2"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="3"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass subclass"
          text="+"
          buttonFunctionality={handleClick}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass subsidiary"
          text="0"
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass"
          text="."
          buttonFunctionality={handleClick}
        />
        <Button
          buttonClass="mainClass subclass"
          text="="
          buttonFunctionality={handleClick}
        />
      </div>
    </div>
  );
};
export default Calculator;
