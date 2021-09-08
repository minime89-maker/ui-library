import React from 'react'
import PropTypes from 'prop-types'

const Accordion = ({ children, className, label, summary}) => {
	return (
		<div className='w-full'>
			{children && <div className={className}>{children}</div>}
			<details className='relative  border-b-2 bg-gray-10 border-gray-30 text-gray-80' >
				<summary className="flex items-center flex-row-reverse justify-between p-2 cursor-pointer">
					<div>
						<svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 10l5 5 5-5m0 0l-5 5-5-5"></path></svg>
					</div>
					{label || "What's the best thing about Switzerland?"}
				</summary>
				<div className='absolute  text-gray-60 mt-2 p-2'>
				{summary || "I don't know, but the flag is a big plus."}
				</div>
			</details>
		</div>
	)
}

Accordion.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	open: PropTypes.bool,
	label: PropTypes.node,
	summary: PropTypes.node
}

Accordion.defaultProps = {
	children: null,
	className: '',
}

export default Accordion
