import React from 'react'
import  Button  from './Button'

// create a story
export default {
  title: 'Example / Buttons',
  component: Button,
}

const Template = (args) => <Button {...args} />
export const Standard = Template.bind({});
Standard.args = {
  variant: 'btn',
	size: 'medium',
	disabled: false
}
