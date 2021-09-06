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

const Template2 = () => <div className="space-y-2">
	<Badge type='label' label='label' />
	<Badge type='primary' label='label' />
	<Badge type='secondary' label='label' />
	<Badge type='success' label='label' />
	<Badge type='warning' label='label' />
	<Badge type='error' label='label' />
</div>
export const Group = Template2.bind({})