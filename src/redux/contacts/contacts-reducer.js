import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './contacts-action';
import initialData from './contacts-data';

const items = createReducer(initialData.contacts.items, {
  [actions.getContact.fulfilled]: (_, { payload }) => payload,
  [actions.addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(element => element.id !== payload),
  [actions.editContact.fulfilled]: (state, { payload }) =>
    state.map(element => (element.id === payload.id ? payload : element)),
});

const filter = createReducer(initialData.contacts.filter, {
  [actions.filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: items,
  filter: filter,
});
