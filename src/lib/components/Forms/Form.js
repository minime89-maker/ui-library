import PropTypes from 'prop-types'
import React from 'react'
import InputOutlined from '../Inputs/InputOutlined'
import TextAreaOutlined from '../TextAreas/TextAreaOutlined'
import Button from '../Buttons/Button'
import { Email20 } from '@carbon/icons-react'
import Block from '../Block/Block'

const Form = ({ children, className }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		alert('Submiting Form')
	}

	return (
		<Block className='py-4 text-center'>
				<form method='POST' onSubmit={handleSubmit} className='m-4'>	
				{children && <form className={className}>{children}</form>}
				<p className="text-h1 mb-8 font-semibold">Contact Us</p>
				<InputOutlined type="text" label="First Name" />
				<br />
				<InputOutlined type="text" label="Email Address" />
				<br />
				<TextAreaOutlined rows={4} cols={19} className='mb-4' />
				<Button variant='error' className='mx-auto' icon={<Email20 />}>SUBMIT</Button>
			</form>
		</Block>
			
	)
}

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}


export default Form