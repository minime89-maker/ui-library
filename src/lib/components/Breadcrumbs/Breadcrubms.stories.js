import React from 'react'
import Breadcrumbs  from './Breadcrumbs'

export default {
	title: 'Example/Breadcrumbs',
	component: Breadcrumbs,
}

const Template2 = (args) => <Breadcrumbs {...args} />
export const Default = Template2.bind({})
Default.args = {
	separator: '>',
	action: 'Home',
	link: '/home',
	current: 'Catalog'
}
