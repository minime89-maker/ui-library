import PropTypes from 'prop-types'
import React from 'react'

 const Avatar = ({ children, className, image, badge }) => {


	return (
		<div className='w-max relative'>
			{children && <div className={className}>{children}</div>}
			<img src={image} alt="Mario" className='w-20 h-20 rounded-full shadow-md border-2 border-gray-30 object-cover'  />
			<div>
				{badge && <div className="w-4 h-4 bg-purple-60 border border-white absolute right-0 top-2 rounded-full animate-bounce">{badge}</div>}
			</div>
		</div>
	)
}

Avatar.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	badge: PropTypes.bool,
	image: PropTypes.string,
	small: PropTypes.bool
}

Avatar.defaultProps = {
	children: null,
	className: '',
	badge: true,
	image: 'https://assets.kompasiana.com/items/album/2020/09/21/mariobros-5f68470ed541df32ac17dd02.jpg?t=o&v=325'
}

export default Avatar