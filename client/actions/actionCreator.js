//ACTIONS

// Like
export function incrementLike (postId) {
	return {
		type: 'INCREMENT_LIKE',
		index
	}
}




// Add Comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}



// Delete Comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}



