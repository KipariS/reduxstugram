import React from 'react';
import Photo from './Photo';

class Grid extends React.Component{
	
	constructor(){
		super()
	}

	render(){
		return(
			<div className='photo-grid'>
				{this.props.posts.map( ( post, i ) => {
					return <Photo {...this.props} i={i} key={i} post={post}/>
				} )}
			</div>
		)
	}
};




export default Grid;
