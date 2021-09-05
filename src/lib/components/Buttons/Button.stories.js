import React from 'react'
import  Button  from './Button'
import { Email24 } from '@carbon/icons-react'

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
	disabled: false,
}

const Template2 = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Button variant="primary" icon={<Email24 />} size="small" disabled={false} />
      <br />
      <Button variant="primary" icon={<Email24 />}  size="medium" disabled={false} />
      <br />
      <Button variant="primary" icon={<Email24 />}  size="large" disabled={false} />
    </div>
  )
}
export const Sizes = Template2.bind({}); 
