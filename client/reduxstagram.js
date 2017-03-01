// Import Packages
// ===========================
import React from 'react';
import { render } from 'react-dom';


// Import CSS
// ===========================
import css from './styles/style.styl';

// import react router dep's
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store, { history } from './store';



// Import Components
// ===========================
import Main from './components/Main';
import PhotoGrid from './components/Grid';
import Single from './components/Single';


// import history from './store';


const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path='/veiw/:postId' component={Single}></Route>			
		</Route>
	</Router>
)


render( router, document.getElementById('root') )










