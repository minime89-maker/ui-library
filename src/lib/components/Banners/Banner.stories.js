import React from 'react'
import  Banner  from './Banner'

export default {
	title: 'Example/Template',
	component: Banner,
}

const Template = (args) => <Banner {...args} />
export const BannerBasic = Template.bind(null)