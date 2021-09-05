import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const players = [{
	id: 1,
	name: 'Mario',
	value: 'Mario'
},
{
	id: 2,
	name: 'Luigi',
	value: 'Luigi'
},
{
	id: 3,
	name: 'Princess Peach',
	value: 'Princess Peach'
},
{
	id: 4,
	name: 'Diddy Kong',
	value: 'Diddy Kong'
}]



const DropdownFilled = ({ children, className, value, onChange, id, filled }) => {
	const classes = cn({
		'border-b-2 border-gray-30 bg-gray-10 focus:outline-none focus:border-red': filled
	}, className)

	return (
		<div className='relative w-full'>
			{children && <div className={className}>{children}</div>}
				<option className='text-gray-50 text-xs absolute left-0 m-1 -top-5' value={value}>Select a Player:</option>
				<select className={`${classes} h-10 w-full`} onChange={onChange} name={id} id={id}>
					{players && players.map((player) => {
						return (
							<option className='text-gray-80' key={player.id} value={player.value}>{player.name}</option>
					)})}
					</select>
		</div>
	)
}

DropdownFilled.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	method: PropTypes.string,
	action: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	filled: PropTypes.bool,
}

DropdownFilled.defaultProps = {
	children: null,
	className: '',
	method: 'GET',
	action: '',
	value: '',
	id: '',
	filled: true,
}

export default DropdownFilled
