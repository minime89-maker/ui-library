import React from 'react';
import  TextCard  from './TextCard';

export default {
	title: 'Example/Cards',
	component: TextCard,
}

const Template = (args) => <TextCard {...args} />
export const CardText = Template.bind(null);