import React from 'react'
import Link from './Link'

export default {
	title: 'Components/Links',
	component: Link,
	parameters: {
		status: {
			type: 'stable'
		}
	}
}

const Template = (args) => <Link {...args} />

export const Standard = Template.bind({})
Standard.args = {
	href: 'https://www.google.com/',
	label: 'Google'
}