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

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

export default store;
