import React from 'react'
import { Close24 } from '@carbon/icons-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const Alert = ({ type, children, label, size, onClick, className, icon }) => {

const classes = classnames(`alert ${type} ${size} ${className}`)

	return (
		<>
			{children && <div className={className}>{children}</div>}
				<div className={`${classes} `} size={size}>
				{label}
				<div className={`pl-4 cursor-pointer`} onClick={onClick}>
					{!icon ?  <Close24 /> : icon}
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
	icon: PropTypes.string
	
}

Alert.defaultProps = {
	type: 'primary',
	label: 'This is a Alert!',
	size: 'medium',
}

export default Alert