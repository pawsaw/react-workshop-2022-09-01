import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, selectCount } from '../../domain/counter/store';
import { State } from '../../store';

// export interface OnCounterValueChanged {
//   (newValue: number): void;
// }

// export interface CounterProps {
//   value?: number;
//   onValueChanged?: OnCounterValueChanged;
// }

export const Counter: React.FC = () => {
  const count = useSelector<State, number>(selectCount);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(
      incrementCounter({
        increment: 1,
      }),
    );
  };

  const decrement = () => {
    dispatch(
      decrementCounter({
        decrement: 2,
      }),
    );
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
