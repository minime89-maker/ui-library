import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'

 const Radio = ({ name, id, label, onChange,  value, children, className }) => {
	const classes = cn({
		'animate-pulse': onChange === true
	}, className)


	return (
		<div className={`${classes} flex items-center justify-start`}>
			{ children && <div className={className}>{children}</div>}
			<input 
			aria-label={name}
			type="radio" 
			name={name}
			id={id}
			onChange={onChange}
			value={value}
			
			 />
			<label className="pl-2 text-gray-80"
			htmlFor={id}>
				{label}
			</label>
		</div>
	)
}

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
}

Radio.defaultProps = {
	value: '',
	className: '',
	name: 'option',

}

export default Radio