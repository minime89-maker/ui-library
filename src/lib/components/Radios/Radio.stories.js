import React from 'react'
import  Radio  from './Radio'

export default {
	title: 'Example/Radio',
	component: Radio,
}

const Template = (args) => <Radio {...args} />
export const Standard = Template.bind({})
Standard.args = {
	name: 'example',
	id: 1,
	label: 'Neutral'
}

export const Group = (args) => {
	return (
		<>
			<Radio name="group" id={1} label="Neutral" {...args} />
			<Radio name="group" id={2} label="Positive" {...args}/>
			<Radio name="group" id={3} label="Negative" {...args}/>
		</>
	)
}