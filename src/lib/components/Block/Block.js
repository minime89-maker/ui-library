import React from 'react'
import PropTypes from 'prop-types'

const Block = ({children, className}) => {
	return (
		<div className='w-auto container m-2 rounded-extra shadow-md bg-white'>
			{children && <div className={className}>{children}</div>}
		</div>
	)
}

Block.propTypes = {
	children: PropTypes.node.isRequired
}

export default Block
