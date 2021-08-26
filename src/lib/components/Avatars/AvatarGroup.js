import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

const AvatarGroup = ({ children, className }) => {
	return (
		<div className='flex flex-wrap -space-x-4'>
		{children && <div className={className}>{children}</div>}
			<Avatar badge={false} />
			<Avatar badge={false} image='https://images.nintendolife.com/4d6e4792ce0db/luigi.original.jpg'/>
			<Avatar badge={false} image='https://png.pngitem.com/pimgs/s/126-1261833_mushrooms-clipart-guy-new-super-mario-bros-mushroom.png'/>
			<Avatar image='https://i.pinimg.com/originals/1c/c6/19/1cc61968cf9336a6c7a7a36b352b9abc.jpg' />
		</div>
	)
}


AvatarGroup.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}

AvatarGroup.defaultProps = {
	children: null,
	className: '',
}

export default AvatarGroup
