import PropTypes from 'prop-types'
import React from 'react'

 const TextArea = ({ children, className, name, id, cols, rows, placeholder, required, onChange, label, maxLength }) => {
	return (
		<div>
			<div className={`${className} relative w-max`}>
				{children && <div className={className}>{children}</div>}
				{label && <label className='absolute left-0 m-1 bg-transparent -top-5 text-gray-60 text-xs  
			 ' htmlFor={id} >{label || 'Message'}</label>}
				<textarea name={name} id={id} cols={cols} rows={rows} placeholder={placeholder}
					onChange={onChange}
					maxLength={maxLength} className='px-2 py-3  border-b-2 bg-gray-10 border-gray-30 text-gray-80 placeholder-gray-30 focus:outline-none focus:border-red' ></textarea>
			</div>
		</div>
	)
}

TextArea.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	cols: PropTypes.number,
	rows: PropTypes.number,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func,
	maxLength: PropTypes.number
}

TextArea.defaultProps = {
	className: '',
	name: 'Message',
	id: 'message',
	cols: 20,
	rows: 4,
	placeholder: 'Leave a Message',
	required: false,
	label: 'Message'
}

export default TextArea;