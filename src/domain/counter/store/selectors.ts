import { State } from '../../../store';

export const selectCount = (state: State) => state.counter.count;
