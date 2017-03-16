// Import Packages
// ===========================
import React from 'react';
import { render } from 'react-dom';


// Import CSS
// ===========================
import css from './styles/style.styl';

// import react router dep's
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// Store with ReactRouter
import { Provider } from 'react-redux';
import store, { history } from './store';



// Import Components
// ===========================
import App from './components/App';
import PhotoGrid from './components/Grid';
import Single from './components/Single';


// import history from './store';


const router = (
	<Provider store={ store }>
		<Router history={ history }>
			<Route path='/' component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path='/view/:postId' component={Single}></Route>			
			</Route>
		</Router>
	</Provider>
)


render( router, document.getElementById('root') )










