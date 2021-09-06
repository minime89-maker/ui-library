import React from 'react'
import { Close16 } from '@carbon/icons-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Badge = ({ type, label, children, className }) => {

const classes = classnames(`badge ${type} ${label} ${className}`)

	return (
			<div className={classes}>
				<div className='capitalize'>
					{label}
				</div>
				<div className='cursor-pointer'>
				{!children ? <Close16 /> : children}
				</div>
			</div>
	)
}

Badge.propTypes = {
	type: PropTypes.oneOf(['label','primary','secondary', 'success', 'warning', 'error']),
	label: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	className: PropTypes.string
}

Badge.defaultProps = {
	children: null,
	type: 'label',
	label: ''
}

export default Badge
