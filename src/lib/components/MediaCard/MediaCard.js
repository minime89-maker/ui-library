import PropTypes from 'prop-types'
import React from 'react'

 const MediaCard = ({ intro, title, subtitle, description, action, media, children, className, source }) => {
	return (
		<>
			{children && <div className={className}>{children}</div>}
			<div className='w-1/2 rounded-default shadow-md overflow-hidden'>
				<div className='w-full rounded-b-none'>
					<img src={media} alt='Super Mario' />
				</div>
				<div className='py-4 px-4'>
					<p className='uppercase weight-light text-gray-70 text-body1 pt-2'>{intro}</p>
					<p className='text-h3 pb-2'>{title}</p>
					<p className='text-gray-60 italic text-body pb-3'>{subtitle}</p>
					<p className=' text-gray-60 text-body pb-3 weight-light'>{description}</p>
				</div>
				<div className='flex justify-end m-4 text-purple-60 font-semibold'>
					<a href={source} target='_blank'>{action}</a>
				</div>
			</div>

		</>
	)
}

MediaCard.propTypes = {
	intro: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	action: PropTypes.any,
	media: PropTypes.any,
	children: PropTypes.node,
	className: PropTypes.string,
	source: PropTypes.string,
}

MediaCard.defaultProps = {
	intro: 'Nintendo',
	title: 'Super Mario',
	subtitle: 'Video Game',
	description: 'Super Mario is a video game developed by Nintendo and published by Nintendo.',
	action: 'Run Now!',
	source: 'https://www.nintendo.com/super-mario-bros',
	media: 'https://media.wired.com/photos/5926c126af95806129f50868/master/w_2560%2Cc_limit/SuperMarioRunTA.jpg',
}

export default MediaCard