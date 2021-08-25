import PropTypes from 'prop-types'
import  Button  from '../Buttons/Button'
import React from 'react'


 const Banner = ({ image, children, className, cta, title, description }) => {
	return (
		<div className='py-8 px-4 rounded-default ' style={{backgroundImage:`url(${image})`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
			{children && <div className={className}>{children}</div>}
			<div className='w-1/2 text-left'>
				<p className='text-h1 text-gray-10 pb-4 font-semibold'>{title}</p>
				<p className='text-h4 text-gray-10 pb-20 italic'>{description}</p>
			</div>
			<div>
				{cta || <Button variant='primary'/>}
			</div>
		</div>
	)
}

Banner.propTypes = {
	image: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	cta: PropTypes.node,
	title: PropTypes.string,
	description: PropTypes.string
}

Banner.defaultProps = {
	image: 'https://images7.alphacoders.com/331/331539.png',
	children: null,
	className: '',
	cta: null,
	title: 'Super Mario',
	description: 'Super Mario is a video game developed by Nintendo and published by Nintendo.'
}

export default Banner