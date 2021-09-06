import React from 'react'
import Badge from './Badge'

export default {
	title: 'Example/Badge',
	component: Badge,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=151%3A623'
		}
	}
}

const Template = (args) => <Badge {...args} />


export const Standard = Template.bind({})
Standard.args = {
	type: 'label',
	label: 'label'
}

