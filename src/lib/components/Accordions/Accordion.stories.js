import React from 'react'
import AccordionOutlined from './AccordionOutlined'
import Accordion from './Accordion'

export default {
	title: 'Example/Accordions',
	component: AccordionOutlined,
}

const Template = (args) => <AccordionOutlined {...args} />
export const Outlined = Template.bind({})

const Template2 = (args) => <Accordion {...args} />
export const Filled = Template2.bind({})