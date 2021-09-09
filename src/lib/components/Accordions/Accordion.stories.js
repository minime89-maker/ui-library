import React from 'react'
import AccordionOutlined from './AccordionOutlined'
import Accordion from './Accordion'

export default {
	title: 'Example/Accordions',
	component: AccordionOutlined,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=241%3A208'
		}
	}
}

const Template = (args) => <AccordionOutlined {...args} />
export const Outlined = Template.bind({})

const Template2 = (args) => <Accordion {...args} />
export const Filled = Template2.bind({})