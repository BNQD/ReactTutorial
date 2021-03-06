import React from 'react'

import Blog from './Blog'

const BlogList = ({blogs}) => {
	return (
		<>
			<h2> Blog List </h2>
			<div id='blog-list'>
				{blogs.map(blog =>
					<Blog key={blog.id} blog={blog} />
				)}
			</div>
		</>
	)
}
	
export default BlogList