import PropTypes from 'prop-types'
import React from 'react'
import Block from '../Block/Block'
import Button from '../Buttons/Button'

 const MediaCard = ({ intro, title, category, description, media, children, className, width, height}) => {
	return (
		<div className='pb-2'>
			{children && <div className={className}>{children}</div>}
					{/* <img src={media} alt='Super Mario' width={width} height={height} className='rounded-t-extra rounded-b-none overflow-hidden bg-auto'/>
				<div className='p-4'>
					<p className='uppercase weight-light text-gray-70 text-body1 pt-2'>{intro}</p>
					<p className='text-h3 pb-2'>{title}</p>
					<p className='w-max bg-gray-10 text-gray-60 italic text-body my-4 px-2 rounded-default shadow font-semibold'>{category}</p>
					<p className=' text-gray-60 text-body pb-3 weight-light'>{description}</p>
				</div>
				<Button variant='secondary' className='mx-auto my-4'>Read More</Button> */}
					<img src={media} alt={title} className='w-full object-contain h-1/2 rounded-t-extra' />
				<div className='px-3 align-left'>
				<p className='uppercase weight-light text-gray-70 text-body1 pt-2'>{intro}</p>
					<p className='text-h3 pb-2'>{title}</p>
					<p className='w-max bg-gray-10 text-gray-60 italic text-body my-4 px-2 rounded-default shadow font-semibold'>{category}</p>
					<p className=' text-gray-60 text-body pb-3 weight-light'>{description}</p>
					<Button variant='secondary'>Read More</Button>
				</div>
		</div>
	)
}

MediaCard.propTypes = {
	intro: PropTypes.string,
	title: PropTypes.string,
	category: PropTypes.string,
	description: PropTypes.string,
	action: PropTypes.any,
	media: PropTypes.any,
	children: PropTypes.node,
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	alt: PropTypes.string,
}

MediaCard.defaultProps = {
	intro: 'Prague',
	title: 'Zizkov Tower',
	category: 'Television',
	description: 'The tallest building in the Czech capital Prague will be without its landmark babies for the first time in sixteen years...',
	media: 'https://images.unsplash.com/photo-1630096446410-5706c853054e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
	width: '100%',
	height: '100%',
}

export default MediaCard