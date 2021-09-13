import React from 'react'
import PropTypes from 'prop-types'



const AccordionOutlined = ({ children, className, label, summary, open, disabled }) => {


	return (
		<>
			{children && <div className={className}>{children}</div>}
			<details className={`relative rounded-default border-2 border-gray-30 text-gray-80 overflow-hidden`} open={open} >
				<summary className={`flex items-center justify-between p-2 cursor-pointer hover:bg-gray-10 ${disabled ? 'cursor-not-allowed' : ''}`} >
					{label || "What's the best thing about Switzerland?"}
					<>
						<svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 10l5 5 5-5m0 0l-5 5-5-5"></path></svg>
					</>
				</summary>
				<div className='text-gray-60  mt-2 p-2'>
				{summary || "I don't know, but the flag is a big plus."}
				</div>
			</details>
		</>
	)
}

AccordionOutlined.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	label: PropTypes.node,
	summary: PropTypes.node,
	open: PropTypes.bool,
	disabled: PropTypes.bool,
}

AccordionOutlined.defaultProps = {
	className: '',
	children: null,
	label: '',
	summary: '',
	open: false,
	disabled: false,
}

export default AccordionOutlined
