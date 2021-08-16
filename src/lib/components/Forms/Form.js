import PropTypes from 'prop-types'
import React from 'react'
import  InputOutline  from '../Inputs/InputOutline'
import  TextAreaOutline  from '../TextAreas/TextAreaOutline'
import  Button  from '../Buttons/Button'
import { Email20 } from '@carbon/icons-react'

 const Form = ({children, className}) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		alert('Submiting Form')
	}

	return (
		<form method='POST' onSubmit={handleSubmit} className="shadow w-max py-4 px-8 rounded-defaul">
			{children && <form className={className}>{children}</form>}
			<p className="text-h2 mb-8 font-semibold">Contact Us</p>
			<InputOutline type="text" label="First Name" />
			<br />
			<InputOutline type="text" label="Email Address" />
			<br />
			<TextAreaOutline rows={4} cols={19} className='mb-4'/>
			<Button variant='error' icon={<Email20 />}>SUBMIT</Button>
		</form>
	)
}

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}


export default Form