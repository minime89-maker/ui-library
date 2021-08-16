import React from 'react'
import { Close24 } from '@carbon/icons-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const Alert = ({ type, children, label, size, onClick, className }) => {

const classes = classnames(`alert ${type} ${size} ${className}`)

	return (
		<>
				<div className={`${classes} `} size={size}>
				{label}
				<div className='pl-4 cursor-pointer ' onClick={onClick}>
					{!children ?  <Close24 /> : children}
				</div>
				</div>
		</>
	)
}

Alert.propTypes = {
	type: PropTypes.oneOf(['alert','primary', 'secondary', 'success', 'warning', 'error']),
	label: PropTypes.string.isRequired,
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	className: PropTypes.string,
	onClick: PropTypes.func,
	
}

Alert.defaultProps = {
	type: 'primary',
	label: 'This is a Alert!',
	size: 'medium',
}

export default Alert