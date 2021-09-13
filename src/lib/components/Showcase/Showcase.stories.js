import React from 'react';
import Showcase from './Showcase'

export default {
	title: 'Template/Showcase',
	component: Showcase,
}

const Template = () => <Showcase />

export const LandingPage = Template.bind(null)
LandingPage.parameters = {
	controls: {
		expanded: false,
	}
}