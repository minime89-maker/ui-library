import React from 'react'
import PropTypes from 'prop-types'

const Block = ({children, className}) => {
	return (
		<div className='container mx-auto m-2 rounded-default shadow-md'>
			{children && <div className={className}>{children}</div>}
		</div>
	)
}

Block.propTypes = {
	children: PropTypes.node.isRequired
}

export default Block
