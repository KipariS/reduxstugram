import React from 'react';
import Photo from './Photo';
import Comments from './Comments';


class Single extends React.Component{
	
	constructor(){
		super()
	}

	// componentWillUpdate(){
	// 	console.info("will update");
	// }

	render(){
		const { posts, params, comments } = this.props;
		const i = posts.findIndex( (post) => { 
			return params.postId == post.code;
		 } )
		const post = posts[i];
		const postComments = comments[params.postId] || [];
		return(
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props} />
			</div>
		)
	}
};










export default Single;
