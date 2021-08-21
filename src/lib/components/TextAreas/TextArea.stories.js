import React from 'react'
import  TextArea  from './TextArea'

export default {
	title: 'Example/TextArea',
	component: TextArea,
}

const Template = (args) => <TextArea {...args} />
export const Filled = Template.bind(null)