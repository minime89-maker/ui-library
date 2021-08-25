import React from 'react'
import PropTypes from 'prop-types'

 const Checkbox = ({name, id, label, disabled, value, onChange }) => {
	return (
		<div className="flex items-center">
			<input  
			aria-label={id}
			type="checkbox" 
			name={name} 
			id={id} 
			disabled={disabled} value={value}
			onChange={onChange}
			className="w-4 h-4 apperance-none"
			/>
			<label className="pl-1.5" htmlFor={name}>{label}</label>
		</div>
	)
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number,
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	value: PropTypes.node,
	onChange: PropTypes.func
}

Checkbox.defaultProps = {
	disabled: false,
	name: 'checkbox',
	id: 1,
	value: '',
	onChange: () => {},
	label: 'Option 1',
}

export default Checkbox