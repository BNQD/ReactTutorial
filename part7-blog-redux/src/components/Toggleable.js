import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Togglable = (props) => {
	const [visible, setVisible] = useState(false)

	const hideWhenVisible = { display: visible ? 'none' : '' }
	const showWhenVisible = { display: visible ? '' : 'none' }
	let closeLabel = ''

	const toggleVisibility = () => {
		setVisible(!visible)
	}

	if (props.closeLabel === undefined){
		closeLabel = 'Close'
	} else {
		closeLabel=props.closeLabel
	}

	return (
		<div>
			<div style={hideWhenVisible} className='visibleToggle'>
				<button onClick={toggleVisibility}>{props.buttonLabel}</button>
			</div>
			<div style={showWhenVisible} className='hiddenToggle'>
				{props.children}
				<button onClick={toggleVisibility}>{closeLabel}</button>
			</div>
		</div>
	)
}

Togglable.propTypes = {
	buttonLabel: PropTypes.string.isRequired
}

export default Togglable