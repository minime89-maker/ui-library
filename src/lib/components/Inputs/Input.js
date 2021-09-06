import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

 const Input = ({ children, className, placeholder, disabled, type, onChange, id, name, label, onFocus, onBlur, blue, required }) => {
	const classes = cn({
		'opacity-50': disabled,
	}, className)

	return (
		<div className='w-full relative'>
			{children && <div className={classes}>{children}</div>}
			{label && <label className='absolute left-0 -top-4 text-gray-60 text-xs 
			 ' htmlFor={id}>{label || 'Email address'}</label>}
			<input type={type} placeholder={placeholder} aria-label={label} disabled={classes} blue={blue} id={id} name={name} onChange={onChange} onFocus={onFocus} required={required} onBlur={onBlur} className={`${classes} h-8 px-2 w-full bg-gray-10 border-b-2 border-gray-30 text-gray-80  focus:outline-none focus:border-blue`}/>
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
	onBlur: PropTypes.func,
	blue: PropTypes.bool,
	required: PropTypes.oneOf(true, false)
}

Input.defaultProps = {
	placeholder: '',
	disabled: false,
	type: 'text',
	onChange: () => { },
	label: 'Email Address',
	required: true
}
export default Input
