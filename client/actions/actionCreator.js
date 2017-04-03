//ACTIONS

// Like
export function incrementLike (postId) {
	return {
		type: 'INCREMENT_LIKE',
		postId
	}
}

// Add Comment
export function addComment(postId, author, comment) {
	console.log("Dispaching addComment!!!");
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// Delete Comment
export function removeComment(postId, i) {
	console.log("Dispaching removeComment!!!");
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}



