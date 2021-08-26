import React from 'react'
import  Button  from './Button'

// create a story
export default {
  title: 'Example / Buttons',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=2%3A2'
    }
  }
}

const Template = (args) => <Button {...args} />
export const Standard = Template.bind({});
Standard.args = {
  variant: 'btn',
	size: 'medium',
	disabled: false
}
