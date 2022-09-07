import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

export const initialCounterState: CounterState = {
  count: 0,
};

export type CounterIncrementAction = PayloadAction<{
  increment: number;
}>;

export type CounterDecrementAction = PayloadAction<{
  decrement: number;
}>;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    incrementCounter: (state: CounterState, action: CounterIncrementAction): CounterState => {
      return {
        ...state,
        count: state.count + action.payload.increment,
      };
    },
    decrementCounter: (state: CounterState, action: CounterDecrementAction): CounterState => {
      return {
        ...state,
        count: state.count - action.payload.decrement,
      };
    },
  },
});

export const counterReducer = counterSlice.reducer;
