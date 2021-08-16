import PropTypes from 'prop-types'
import React from 'react'

 const TextCard = ({ title, subtitle, description, action, children, className, intro }) => {
	return (
		<>
			{children && <div className={className}>{children}</div>}
			<div className='py-4 px-4 w-80 rounded-default shadow-md '>
				<p className='uppercase weight-light text-gray-70 text-body1'>{intro}</p>
				<p className=' text-h3 pb-2'>{title}</p>
				<p className='text-gray-60 italic text-body pb-3 break-words'>{subtitle}</p>
				<p className=' text-gray-60 text-body pb-3 weight-light'>{description}</p>
				<div className='mt-4 uppercase text-purple-60 font-semibold'>
					<p>{action}</p>
				</div>
			</div>
		</>
	)
}

TextCard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	action: PropTypes.any,
	children: PropTypes.node,
	className: PropTypes.string,
	intro: PropTypes.string,
}

TextCard.defaultProps = {
	title: 'Cafe Luigi',
	subtitle: 'Italian restaurant',
	description: 'Small plates, salads & sandwiches an intimate setting with 12 indoor seats plus pation seating.',
	action: 'Book a Table',
	children: null,
	className: '',
	intro: 'New York, NY',
}

export default TextCard;