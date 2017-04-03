import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Photo extends React.Component{
	constructor(){
		super();
	}

	render() {
		const { post, comments, i } = this.props;
		// console.log(this.props);
		return(
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.i} className="grid-photo"/>
					</Link>

					<CSSTransitionGroup 
						transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						<span className="likes-heart" key={post.likes}>{post.likes}</span>
					</CSSTransitionGroup>

				</div>

				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
						<button onClick={this.props.incrementLike.bind(null, i)} className="likes">
							&hearts; {post.likes}
						</button>
						<Link className="button" to={`/view/${post.code}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>&nbsp;
								{comments[post.code] ? comments[post.code].length : 0}
							</span>
						</Link>
					</div>

				</figcaption>
			</figure>
		)
	}
}







export default Photo;