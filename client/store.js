// 
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


// Reducers
import rootReducer from './reducers/index';


// DATA
import posts from './data/posts';
import comments from './data/comments';



// 
const defaultState = {
	posts,
	comments
};


const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory)

export default store;