import React from 'react'
import Label from './Label'

export default {
	title: 'Example/Label',
	component: Label,
}

const Template = (args) => <Label {...args} />


export const Standard = Template.bind({})
Standard.args = {
	type: 'label',
	label: 'label'
}

