import React from 'react'
import PropTypes from 'prop-types'
import Block from '../Block/Block'
import InputOutlined from '../Inputs/InputOutlined'
import Button from '../Buttons/Button'
import { Email24 } from '@carbon/icons-react'

const Subscribe = ({ children, onSubmit, className, title, description }) => {
	return (
		<Block className='py-8 px-6'>
			{children && <div className={className}>{children}</div>}
			<form method="post" onSubmit={onSubmit} className='text-center flex items-center justify-center flex-col'>
				<h2 className='text-h1 font-semibold'>{title}</h2>
				<br />
				<p className='text-body text-gray-60'>{description}</p>
				<br />
				<br />
				<InputOutlined />
				<br />
				<br />
				<br />
				<Button variant='primary' icon={<Email24 />}>Subscribe</Button>
			</form>
		</Block>
	)
}

Subscribe.propTypes = {
	children: PropTypes.node,
	onSubmit: PropTypes.func,
	className: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
}

Subscribe.defaultProps = {
	children: null,
	onSubmit: () => {},
	className: '',
	title: '',
	description: ''
}

export default Subscribe
