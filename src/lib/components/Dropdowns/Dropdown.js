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



const Dropdown = ({ children, className, value, onChange, id, standard }) => {
	const classes = cn({
		'rounded-default px-2 border-2 bg-transparent border-gray-30 text-gray-80 focus:outline-none focus:border-blue': standard,
	}, className)

	return (
		<div className='relative w-full'>
			{children && <div className={className}>{children}</div>}
				<option aria-label={value} className={`text-gray-50 text-xs absolute left-0 m-1 px-0.5 -top-3 bg-white`} value={value}>Select a Player:</option>
				<select className={`${classes} h-10 w-full`} onChange={onChange} name={id} id={id}>
					{players && players.map((player) => {
						return (
							<option className='text-gray-80' key={player.id} value={player.value}>{player.name}</option>
					)})}
					</select>
		</div>
	)
}

Dropdown.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	method: PropTypes.string,
	action: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	standard: PropTypes.bool,
}

Dropdown.defaultProps = {
	children: null,
	className: '',
	method: 'GET',
	action: '',
	value: '',
	id: '',
	standard: true,
}

export default Dropdown
