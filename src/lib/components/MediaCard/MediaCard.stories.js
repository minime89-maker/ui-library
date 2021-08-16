import React from 'react'
import  MediaCard  from './MediaCard'

export default {
	title: 'Example/Cards',
	component: MediaCard,
}

const Template = (args) => <MediaCard {...args} />
export const CardMedia = Template.bind(null)