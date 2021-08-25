import React from 'react'
import Link from './Link'

export default {
	title: 'Example/Links',
	component: Link,
}

const Template = (args) => <Link {...args} />

export const Standard = Template.bind({})
Standard.args = {
	href: 'https://www.google.com/',
	label: 'Google'
}