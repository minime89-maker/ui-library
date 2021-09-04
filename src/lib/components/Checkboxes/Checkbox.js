import React from 'react'
import PropTypes from 'prop-types'

 const Checkbox = ({name, children, className, id, label, disabled, value, onChange, checked }) => {
	return (
		<div className="flex items-center">
			{children && <div className={className}>{children}</div>}
			<label className="pr-2" htmlFor={name}>{label}</label>
			<input  
			aria-label={id}
			type="checkbox" 
			name={name} 
			id={id} 
			disabled={disabled} value={value}
			onChange={onChange}
			checked={checked} 
			className={`${disabled === true ? 'cursor-not-allowed' : 'auto' } h-4 w-4`}
			/>			
		</div>
	)
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number,
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	value: PropTypes.node,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
}

Checkbox.defaultProps = {
	disabled: false,
	name: 'checkbox',
	id: 1,
	value: '',
	onChange: () => {},
	label: '',	
}

export default Checkbox