import React from 'react'
import Breadcrumbs  from './Breadcrumbs'

export default {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	parameters: {
		status: {
			type: 'beta'
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=304%3A216'
		}
	}
}

const Template2 = (args) => <Breadcrumbs {...args} />
export const Default = Template2.bind({})
Default.args = {
	action: 'Home',
	link: '/home',
	current: 'Catalog'
}
