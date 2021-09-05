import React from 'react';
import  Form  from './Form'
import Subscribe from './Subscribe'

export default {
	title: 'Example/Forms',
	component: Form,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=134%3A68'
		}
	}
}

const Template2 = (args) => <Subscribe {...args} />
export const SubscribeForm = Template2.bind({})
SubscribeForm.args = {
	title: 'Subscribe',
	description: 'Subscribe to our newsletter to recive product announcements.',
	
}

const Template = (args) => <Form />
export const ContactUs = Template.bind({})