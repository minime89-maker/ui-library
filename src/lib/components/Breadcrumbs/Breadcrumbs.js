import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumbs = ({ children, className, action, link, current }) => {


	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb flex">
			{link && <li className="breadcrumb-item text-gray-60"><a href={link} className="text-gray-60 hover:text-purple-50 mx-2 hover:underline">{action}</a></li>}
			{current && <li className="breadcrumb-item active text-purple-50 hover:text-purple-50 mx-2" aria-current="page">{current}</li>}
			</ol>
		{children && <li className={className}>{children}</li>}
      </nav>
	)
}

Breadcrumbs.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	action: PropTypes.node,
	link: PropTypes.string,
	current: PropTypes.string
}

Breadcrumbs.defaultProps = {
	children: null,
	className: '',
	separator: '',
	action: '',
	link: '',
}

export default Breadcrumbs
