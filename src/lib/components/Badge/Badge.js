import React from 'react'
import { Close16 } from '@carbon/icons-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Badge = ({ type, label, children, className }) => {

const classes = classnames(`label ${type} ${label} ${className}`)

	return (
			<div className={classes}>
				<div className='pr-2'>
					{label}
				</div>
				<div className='cursor-pointer'>
				{!children ? label && <Close16 /> : children && <Close16 />}
				</div>
			</div>
	)
}

Badge.propTypes = {
	type: PropTypes.oneOf(['label','primary','secondary', 'success', 'warning', 'error']).isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.node,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	className: PropTypes.string
}

Badge.defaultProps = {
	type: 'label',
	label: 'label'
}

export default Badge
