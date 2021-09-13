import React from 'react'
import  Banner  from './Banner'

export default {
	title: 'Components/Banner',
	component: Banner,
	parameters: {
		status: {
			type: 'stable'
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=265%3A218'
		}
	}
}

const Template = (args) => <Banner {...args} />
export const BannerExample = Template.bind(null)