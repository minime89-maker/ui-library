import React from 'react'
import  Alert  from './Alert'

export default {
	title: 'Example / Alerts',
	component: Alert,
}

const Template = (args) => <Alert {...args} />
export const Default = Template.bind({})
Default.args = {
	type: 'alert',
	label: 'This is a Alert!',
	size: 'medium',
}