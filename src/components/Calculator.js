import React, { useEffect, useState } from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [screen, setScreen] = useState('0');
  const [buttontype, setButtontype] = useState(null);
  const [calculatoroperation, setCalculatoroperation] = useState(null);
  const [operationnumber, setOperationnumber] = useState(null);

  useEffect(() => {
    // console.log(screen, operationnumber, calculatoroperation, buttontype);
    const total = calculate(
      {
        total: screen,
        next: operationnumber,
        operation: calculatoroperation,
      },
      buttontype,
    );
    if (total.total) {
      setScreen(total.total);
    } else {
      setScreen('0');
    }
  }, [buttontype, operationnumber]);
  return (
    <div className="calculator-container">
      <input type="text" value={screen} />
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="AC"
          buttonFunctionality={(e) => setButtontype(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="+/-"
          buttonFunctionality={(e) => setButtontype(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="%"
          buttonFunctionality={(e) => setCalculatoroperation(e.target.value)}
        />
        <Button
          buttonClass="mainClass subclass"
          text="&divide;"
          buttonFunctionality={(e) => setCalculatoroperation(e.target.value)}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="7"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="8"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="9"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass subclass"
          text="x"
          buttonFunctionality={(e) => setCalculatoroperation(e.target.value)}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="4"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="5"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="6"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass subclass"
          text="-"
          buttonFunctionality={(e) => setCalculatoroperation(e.target.value)}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass"
          text="1"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="2"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="3"
          buttonFunctionality={(e) => setOperationnumber(e.target.value)}
        />
        <Button
          buttonClass="mainClass subclass"
          text="+"
          buttonFunctionality={(e) => setCalculatoroperation(e.target.value)}
        />
      </div>
      <div className="buttons-aligner">
        <Button
          buttonClass="mainClass subsidiary"
          text="0"
          buttonFunctionality={(e) => setButtontype(e.target.value)}
        />
        <Button
          buttonClass="mainClass"
          text="."
          buttonFunctionality={(e) => setButtontype(e.target.value)}
        />
        <Button
          buttonClass="mainClass subclass"
          text="="
          buttonFunctionality={(e) => setButtontype(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Calculator;
