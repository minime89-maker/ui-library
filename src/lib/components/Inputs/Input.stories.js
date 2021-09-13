import React from 'react'
import  Input  from './Input'
import InputOutlined  from './InputOutlined'

export default {
	title: 'Components/Input',
	component: Input,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=31%3A26'
		},
		status: {
			type: 'stable'
		}
	}
}

const Template = (args) => <Input {...args} />
export const Filled = Template.bind(null)

export const Outlined = (args) => <InputOutlined {...args} />
