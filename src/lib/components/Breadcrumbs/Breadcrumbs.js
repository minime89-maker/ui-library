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

		// <nav aria-label="breadcrumb">
		// 	<ol className="breadcrumb flex items-center pt-3 pb-2" >
		// 		<li className="breadcrumb-item">
		// 			<a className={`font-normal text-md px-2 py-1 tracking-wide hover:bg-gray-10 rounded-default`}
		// 				aria-current="page"
		// 				href={link}
		// 			>
		// 				{!action ? 'Home' : action}
		// 			</a>
		// 		</li>
		// 		<>
		// 			{/* {separator && <div className="text-sm text-gray-60 mx-2">{separator}</div>} */}
		// 		</>
		// 	</ol>
		// 	{ children && <div className={className}>{children}</div> }
		// </nav>
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
