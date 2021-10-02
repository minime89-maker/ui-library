import React from 'react'
import Dropdown from './Dropdown'
import DropdownFilled  from './DropdownFilled'

export default {
	title: 'Components/Dropdown',
	component: Dropdown,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=320%3A220'
		},
		status: {
			type: 'stable'
		}
	}
}

const Template = (args) => <Dropdown {...args} />
export const Outlined = Template.bind({})

export const Filled = (args) => <DropdownFilled {...args} />