import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Links = ({  href, alt, children, className, target, label, underline }) => {
	const classes = cn({
		'text_link': true,
		'target': target,
		' hover:underline': underline
	}, className)
		

	return (
		<div>
			{children && <div className={classes}>{children}</div>}
			<a href={href} label={label} alt={alt} target={target} className={classes} underline={underline.toString()} >{children || label}</a>
		</div>
	)
}

Links.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
	target: PropTypes.oneOf([
		'_blank',
		'_self',
		'_parent',
		'_top',
	]),
	label: PropTypes.string,
	underline: PropTypes.string
}

Links.defaultProps = {
	href: 'https://www.google.com/',
	alt: '',
	children: '',
	label: '',
	underline:'true'
}



export default Links
