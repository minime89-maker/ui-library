import React from 'react'
import  MediaCard  from './MediaCard'

export default {
	title: 'Example/MediaCard',
	component: MediaCard,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=145%3A580'
		}
	}
}

const Template = (args) => <MediaCard {...args} />
export const CardMedia = Template.bind(null)