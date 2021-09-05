import React from 'react'
import  Alert  from './Alert'

export default {
	title: 'Example / Alerts',
	component: Alert,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=12%3A2'
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

const Template2 = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<Alert type="primary" label="This is a small Alert!" size="small" />
			<br />
			<Alert type="primary" label="This is a medium Alert!" size="medium" />
			<br />
			<Alert type="primary" label="This is a large Alert!" size="large" />
		</div>
	)
}
export const Sizes = Template2.bind({})