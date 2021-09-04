import React from 'react'
import { Close24, Information24, CheckmarkOutline24, WarningAlt24, WarningFilled24, MisuseOutline24 } from '@carbon/icons-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const signs = {
	primary: <Information24 />,
	secondary: <WarningFilled24 />,
	warning: <WarningAlt24 />,
	success: <CheckmarkOutline24 />,
	error: <MisuseOutline24 />
}


const Alert = ({ type, children, label, size, onClick, className, icon }) => {

const classes = classnames(`alert ${type} ${size} ${className}`)

	return (
		<>
			{children && <div className={className}>{children}</div>}
				<div className={`${classes} opacity-80`} size={size}>
					<div className='pr-1'>
						{signs[type]}
					</div>
				{label}
				<div className={`pl-8 cursor-pointer`} onClick={onClick}>
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
	icon: PropTypes.string,
}

Alert.defaultProps = {
	type: 'primary',
	label: 'This is a Alert!',
	size: 'medium',
}

export default Alert