import React from 'react'
import  TextArea  from './TextArea'
import TextAreaOutlined from './TextAreaOutlined'

export default {
	title: 'Components/TextArea',
	component: TextArea,
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

const Template = (args) => <TextArea {...args} />
export const Filled = Template.bind(null)

export const Outlined = (args) => <TextAreaOutlined {...args} />