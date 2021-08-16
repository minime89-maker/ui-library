import React from 'react'
import  Radio  from './Radio'

export default {
	title: 'Example/Radio',
	component: Radio,
}

const Template = (args) => 

<div>
	<Radio label="boooring 🥱" value="1" {...args} />
	<Radio label="hmmm 😐" value="2" />
	<Radio label="rockstar 🤩" value="3" />
</div>
export const Default = Template.bind({})