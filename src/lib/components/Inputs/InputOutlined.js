import React from 'react'
import PropTypes from 'prop-types'

const InputOutlined = ({ children, className, placeholder, disabled, type, onChange, id, name, label,onFocus, onBlur }) => {

	return (
		<div className='w-max relative'>
			{children && <div className={className}>{children}</div>}
			{label && <label className='absolute left-0 m-1 px-0.5 bg-white -top-3 text-gray-60 text-xs  
			 ' htmlFor={id}>{label || 'Email address'}</label>}
			<input type={type} placeholder={placeholder} aria-label={label} onFocus={onFocus} onBlur={onBlur} disabled={disabled} id={id} name={name} onChange={onChange} className='rounded-default px-2 h-10 w-full border-2 border-gray-30 text-gray-80 focus:outline-none focus:border-red' />
		</div>
	)
}

InputOutlined.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	onChange: PropTypes.func,
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func
}

InputOutlined.defaultProps = {
	placeholder: '',
	disabled: false,
	type: 'password',
	onChange: () => { },
	label: 'Password'
}

export default InputOutlined