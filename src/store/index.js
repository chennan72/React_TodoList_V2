import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
//store並不知道怎麼處理action，自動轉交給reducer處理

export default store;
