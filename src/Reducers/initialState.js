/* @flow */
import { List, Map } from 'immutable';

const shortcuts = Map({
  '#1': localStorage['sc#1'] || '',
  '#2': localStorage['sc#2'] || '',
  '#3': localStorage['sc#3'] || '',
  '#4': localStorage['sc#4'] || '',
  '#5': localStorage['sc#5'] || '',
  '#6': localStorage['sc#6'] || '',
  '#g': localStorage['sc#g'] || '*gelächter*',
  '#a': localStorage['sc#a'] || '*applaus*',
});

const rawReadGradient = localStorage['readGradient'];
const readGradient = rawReadGradient ? JSON.parse(rawReadGradient) : false;
const initialState: ReduxState = {
  currentRoom: null,
  readBackgroundColor: localStorage['readbgColor'] || '255,255,255',
  readColor: localStorage['readColor'] || '0,0,0',
  readGradient,
  readLines: List(),
  ready: false,
  roles: List(),
  rooms: Map(),
  sessionId: localStorage.sessionId || null,
  shortcuts,
  user: null,
  userInRoom: Map(),
  users: Map(),
};

export default initialState;
