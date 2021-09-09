import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Breadcrumbs = ({ children, className, separator, action, link }) => {


	return (
		<>
			<ul className="flex items-center justify-center flex-wrap pt-3 pb-2">
				<li className=" last:mr-0 flex-0 text-center">
					<a className={`font-normal text-md px-2 py-1 tracking-wide hover:bg-gray-10 rounded-default`}
						data-toggle="tab"
						href={link}
					>
						{!action ? 'Home' : action}
					</a>
				</li>
				<div>
					{separator && <span className="text-sm text-gray-60 mx-2">{separator}</span>}
				</div>
			</ul>
			{ children && <div className={className}>{children}</div> }
		</>
	)
}

Breadcrumbs.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	separator: PropTypes.string,
	action: PropTypes.node,
	summary: PropTypes.node,
	link: PropTypes.string,
}

Breadcrumbs.defaultProps = {
	children: null,
	className: '',
	separator: '',
	action: '',
	link: '',
}

export default Breadcrumbs
