import create from 'create-action-types';

const types = [
  'INCREMENT_COUNTER',
  'DECREMENT_COUNTER'
];

export const {INCREMENT_COUNTER, DECREMENT_COUNTER} = create(types);
