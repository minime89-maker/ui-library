import React from 'react'
import  Alert  from './Alert'

export default {
	title: 'Example / Alerts',
	component: Alert,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=0%3A1'
		  }
	}
}

const Template = (args) => <Alert {...args} />
export const Standard = Template.bind({})
Standard.args = {
	type: 'alert',
	label: 'This is a Alert!',
	size: 'medium',
}