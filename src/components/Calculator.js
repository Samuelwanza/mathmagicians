import React from 'react';
import Button from './Button';
import './calculator.css';

const Calculator = () => (
  <div className="calculator-container">
    <input type="text" value="0" />
    <div className="buttons-aligner">
      <Button buttonClass="mainClass" text="AC" />
      <Button buttonClass="mainClass" text="+/-" />
      <Button buttonClass="mainClass" text="%" />
      <Button buttonClass="mainClass subclass" text="&divide;" />
    </div>
    <div className="buttons-aligner">
      <Button buttonClass="mainClass" text="7" />
      <Button buttonClass="mainClass" text="8" />
      <Button buttonClass="mainClass" text="9" />
      <Button buttonClass="mainClass subclass" text="&times;" />
    </div>
    <div className="buttons-aligner">
      <Button buttonClass="mainClass" text="4" />
      <Button buttonClass="mainClass" text="5" />
      <Button buttonClass="mainClass" text="6" />
      <Button buttonClass="mainClass subclass" text="-" />
    </div>
    <div className="buttons-aligner">
      <Button buttonClass="mainClass" text="1" />
      <Button buttonClass="mainClass" text="2" />
      <Button buttonClass="mainClass" text="3" />
      <Button buttonClass="mainClass subclass" text="+" />
    </div>
    <div className="buttons-aligner">
      <Button buttonClass="mainClass subsidiary" text="0" />
      <Button buttonClass="mainClass" text="." />
      <Button buttonClass="mainClass subclass" text="=" />
    </div>
  </div>
);

export default Calculator;
