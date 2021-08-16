import React from 'react'
import  Checkbox  from './Checkbox'

export default {
	title: 'Example/Checkboxes',
	component: Checkbox,
}

const Template = (args) => <Checkbox {...args} />
export const Default = Template.bind(); 
Default.args = {
	name: 'checkbox',
	text: 'Checkbox',
	type: 'checkbox',
	id:1
}