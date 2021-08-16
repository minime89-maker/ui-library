import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

 const Input = ({ children, className, placeholder, disabled, type, onChange, id, name, label, onFocus, onBlur}) => {
	const classes = cn({
		'opacity-50': disabled,
	})

	return (
		<div className='w-max relative'>
			{children && <div className={className}>{children}</div>}
			{label && <label className='absolute m-1 px-0.5 left-0 -top-3.5 text-gray-50 text-sm 
			 ' htmlFor={id}>{label || 'Email address'}</label>}
			<input type={type} placeholder={placeholder} disabled={classes} id={id} name={name} onChange={onChange} onFocus={onFocus} onBlur={onBlur} className='h-10 px-2 w-full  border-b-2 border-gray-30 text-gray-80  focus:outline-none focus:border-red-50 ' />
		</div>
	)
}

Input.propTypes = {
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

Input.defaultProps = {
	placeholder: '',
	disabled: false,
	type: 'text',
	onChange: () => { },
	label: 'Email Address',
}
export default Input
