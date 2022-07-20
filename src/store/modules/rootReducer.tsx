import { combineReducers } from '@reduxjs/toolkit';
import counter from './counter/counterSlice';
import profile from './profile/profileSlice';

export default combineReducers({
    counter,
    profile
});