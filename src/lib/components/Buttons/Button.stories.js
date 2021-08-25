import React from 'react'
import  Button  from './Button'
import { Email24 } from '@carbon/icons-react'

export default {
  title: 'Example / Buttons',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=0%3A1'
    }
  }
}

const Template = (args) => <Button {...args} />
export const Standard = Template.bind({});
Standard.args = {
  variant: 'btn',
	size: 'medium',
	disabled: false,
}
 

export const Icon = Template.bind({});
Icon.args = {
  icon: <Email24 />,
  children: 'SEND'
}