import PropTypes from 'prop-types'
import React from 'react'

 const TextAreaOutlined = ({ children, className, name, id, cols, rows, placeholder, label, maxLength, onChange }) => {
	return (
		<div className={`${className} relative w-full`}>
			{children && <div className={className}>{children}</div>}
			{label && <label className='absolute left-0 m-1 px-0.5 bg-white -top-3 text-gray-60 text-xs  
			 ' htmlFor={id} >{label || 'Message'}</label>}
			<textarea name={name} id={id} cols={cols} rows={rows} placeholder={placeholder}
				onChange={onChange}
				maxLength={maxLength} className='p-2 w-full rounded-default border-2 border-gray-30 placeholder-gray-30 text-gray-80 focus:outline-none focus:border-blue' ></textarea>
		</div>
	)
}

TextAreaOutlined.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	cols: PropTypes.number,
	rows: PropTypes.number,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	required: PropTypes.bool,
	onChange: PropTypes.func,
}

TextAreaOutlined.defaultProps = {
	className: '',
	name: 'Message',
	id: 'message',
	cols: 20,
	rows: 4,
	placeholder: 'Leave a Message',
	required: false,
	label: 'Message'
}

export default TextAreaOutlined;