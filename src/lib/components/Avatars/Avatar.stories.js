import React from 'react'
import  Avatar  from './Avatar'
import AvatarGroup from './AvatarGroup'

export default {
	title: 'Example/Avatars',
	component: Avatar,
}

const Template = (args) => <Avatar {...args} />
export const Standard = Template.bind(null)

export const Group = (args) => <AvatarGroup {...args} />
