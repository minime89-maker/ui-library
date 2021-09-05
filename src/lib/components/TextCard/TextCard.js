import PropTypes from 'prop-types'
import React from 'react'
import Block from '../Block/Block'

 const TextCard = ({ title, subtitle, description, action, children, className, intro, source }) => {
	return (
		<Block className='p-4'>
			{children && <div className={className}>{children}</div>}

				<p className='uppercase weight-light text-gray-70 text-body1'>{intro}</p>
				<p className=' text-h3 pb-2'>{title}</p>
				<p className='text-gray-60 italic text-body pb-3 break-words'>{subtitle}</p>
				<p className=' text-gray-60 text-body pb-3 weight-light'>{description}</p>
				<div className='mt-4 uppercase text-purple-50 font-semibold'>
					<a href={source} target='_blank'>{action}</a>
				</div>
		</Block>
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
	source: PropTypes.string
}

TextCard.defaultProps = {
	title: 'Cafe Luigi',
	subtitle: 'Italian restaurant',
	description: 'Small plates, salads & sandwiches an intimate setting with 12 indoor seats plus pation seating.',
	action: 'Book a Table',
	source: 'https://www.google.com',
	children: null,
	className: '',
	intro: 'New York, NY',
}

export default TextCard;