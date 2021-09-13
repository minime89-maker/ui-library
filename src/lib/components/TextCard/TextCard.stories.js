import React from 'react';
import  TextCard  from './TextCard';

export default {
	title: 'Template/Showcase',
	component: TextCard,
	parameters: {
		status: {
			type: 'stable'
		}
	}
}

const Template = (args) => <TextCard {...args} />
export const CardText = Template.bind(null);