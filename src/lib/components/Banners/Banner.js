import PropTypes from 'prop-types'
import  Button  from '../Buttons/Button'
import React from 'react'
import Block from '../Block/Block'


 const Banner = ({ image, children, className, cta, title, description }) => {
	return (
		<div className=' w-screen py-8 px-4 rounded-default ' style={{backgroundImage:`url(${image})`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
			{children && <div className={className}>{children}</div>}
			<div className='w-1/2 text-left'>
				<p className='text-h1 text-gray-10 pb-4 font-semibold'>{title}</p>
				<p className='text-h4 text-gray-10 pb-20 italic'>{description}</p>
			</div>
			<div className='flex items-center justify-start'>
				{cta || <Button variant='primary'>PAY NOW</Button>}
			    <p className='text-gray-40 text-body1 underline ml-4'>Paying with Credit Card ?</p>
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
	image: 'https://images.unsplash.com/photo-1584476509080-54a2c8df05ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
	children: null,
	className: '',
	cta: null,
	title: 'Cash Register',
	description: 'A cash register, sometimes called a till or automated money handling system, is a mechanical or electronic device for registering and calculating transactions at a point of sale. '
}

export default Banner