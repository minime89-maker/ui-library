import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'


const Button = ({ className, variant, children, size, disabled, focus, hover, style, full, color, onClick, onFocus, onBlur, icon}) => {

	const classes = cn('btn',
		variant,
		{ 'w-full text-center justify-center tracking-wide': full },
		className,
		{ 'opacity-50 cursor-not-allowed ': disabled },
		focus,
		size,
		hover,
		{ 'bg-gray-10 text-gray-80': color === 'white' },className
		)

	return (
		<>
			<button onClick={onClick} disabled={disabled} onFocus={onFocus}  style={style} onBlur={onBlur} className={`${classes}`}>{children || 'BUTTON'} 
			{icon && <div className='ml-2'>{icon}</div>}
			</button>
		</>

	)
}

Button.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.oneOf([
		'btn', 'link', 'primary', 'secondary', 'success', 'warning', 'error', 'ghost'
	]),
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	size: PropTypes.string,
	hover: PropTypes.bool,
	disabled: PropTypes.bool,
	style: PropTypes.any,
	full: PropTypes.bool,
	color: PropTypes.string,
	icon: PropTypes.node,
}

Button.defaultProps = {
	variant: 'btn',
	size: 'medium',
	disabled: false,
	icon: ''
}

export default Button