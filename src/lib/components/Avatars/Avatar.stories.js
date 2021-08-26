import React from 'react'
import  Avatar  from './Avatar'
import AvatarGroup from './AvatarGroup'

export default {
	title: 'Example/Avatars',
	component: Avatar,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=28%3A2'
		}
	}
}

const Template = (args) => <Avatar {...args} />
export const Standard = Template.bind(null)

export const Group = (args) => <AvatarGroup {...args} />
