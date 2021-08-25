import React from 'react'
import { Close16 } from '@carbon/icons-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Label = ({ type, label, children, className }) => {

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

Label.propTypes = {
	type: PropTypes.oneOf(['label','primary','secondary', 'success', 'warning', 'error']).isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.node,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	className: PropTypes.string
}

Label.defaultProps = {
	type: 'label',
	label: 'label'
}

export default Label
