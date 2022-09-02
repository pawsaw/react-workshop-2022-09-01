import React from 'react';
import { noop } from '../../utils/noop';

export interface OnCounterValueChanged {
  (newValue: number): void;
}

export interface CounterProps {
  value?: number;
  onValueChanged?: OnCounterValueChanged;
}

export const Counter: React.FC<CounterProps> = ({ value = 100, onValueChanged = noop }) => {
  const increment = () => {
    const newCount = value + 1;
    console.log({ newCount });
    onValueChanged(newCount);
  };

  const decrement = () => {
    const newCount = value - 1;
    onValueChanged(newCount);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};
