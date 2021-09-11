import PropTypes from 'prop-types'
import React from 'react'

 const Radio = ({ name, id, label, onChange,  value, children, className }) => {


	return (
		<div className={`${className} flex items-center justify-start`}>
			{ children && <div className={className}>{children}</div>}
			<label className="pr-2 text-gray-80"
			htmlFor={id}>
				{label}
			</label>
			<input 
			aria-label={name}
			type="radio" 
			name={name}
			id={id}
			onChange={onChange}
			value={value}
			 />
			
		</div>
	)
}

Radio.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	disabled: PropTypes.bool
}

Radio.defaultProps = {
	value: '',
	className: '',
	name: 'option',
	disabled: true
}

export default Radio