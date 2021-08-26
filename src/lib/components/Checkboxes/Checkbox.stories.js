import React from 'react'
import  Checkbox  from './Checkbox'

export default {
	title: 'Example/Checkboxes',
	component: Checkbox,
}

const Template = (args) => <Checkbox {...args} />
export const Standard = Template.bind(); 
Standard.args = {
	name: 'checkbox',
	text: 'Checkbox',
	label: 'Remember me',
	id:1
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
	label: 'Disabled',
	name: 'checkbox',
	id: 2
}