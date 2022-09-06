import React from 'react';
import { Counter } from '../../components/Counter';

export const PlaygroundScreen: React.FC = () => {
  return (
    <div>
      <h2>Playground</h2>
      <div>
        <h3>Counter</h3>
        <Counter />
      </div>
    </div>
  );
};
