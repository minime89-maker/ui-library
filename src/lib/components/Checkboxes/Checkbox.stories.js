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
	type: 'checkbox',
	id:1
}