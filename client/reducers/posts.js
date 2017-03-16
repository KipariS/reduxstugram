// Reducer takes 2 thingth

// 1. Current State  
// 2. Action (info, about whats happend)

function posts( state = [], action) {
	switch (action.type) {
		case 'INCREMENT_LIKE':
			const i = action.postId;
			console.log(state);
			console.log(action);
			return [
				...state.slice(0, i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1)
			];
		default:
			return state;
	}

	console.log(state, action);
}



export default posts;








