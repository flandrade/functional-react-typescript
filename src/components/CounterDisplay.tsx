import * as React from "react";

interface Props {
  children?: React.ReactNode;
  score: number;
  resetText: string;
}

const CounterDisplay = ({ score, resetText }: Props): JSX.Element => (
  <div>
    <h1>{score}</h1>
    <h2>{resetText}</h2>
    <h2>
      Click in input or button wil change score. Type in input will reset it.
    </h2>
  </div>
);

export default CounterDisplay;
