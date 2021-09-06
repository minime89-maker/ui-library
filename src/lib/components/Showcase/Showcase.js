import React from 'react'
import Avatar from '../Avatars/Avatar'
import Block from '../Block/Block'
import Badge from '../Badge/Badge'
import Button from '../Buttons/Button'
import InputOutlined from '../Inputs/InputOutlined'
import TextAreaOutlined from '../TextAreas/TextAreaOutlined'
import Alert from '../Alerts/Alert'
import MediaCard from '../MediaCard/MediaCard'
import Dropdown from '../Dropdowns/DropdownFilled'
import Input from '../Inputs/Input'
import TextArea from '../TextAreas/TextArea'
import { Email24, LogoGithub32 } from '@carbon/icons-react'

const Showcase = () => {
	return (
		<div className="py-6 px-4 bg-gray-10 h-full w-full flex flex-col space-y-20">
			{/* NavBar */}
			<nav className="px-4">
				<ul className='flex items-center justify-between'>
					<li>
						<a href="https://www.npmjs.com/package/minja-ui" className='text-gray-80 text-light'>version 0.1.12</a>
					</li>
					<li>
						<a href="https://github.com/minime89-maker">{<LogoGithub32 />}</a>
					</li>
				</ul>
			</nav>
			{/* Main */}
			<main className='flex items-center justify-center flex-wrap text-center mb-8 xl:justify-around xl:pl-20'>
				{/* Left */}
				<div className='mb-14 xl:pr-10'>
					<h1 className='text-h1 font-semibold text-gray-80 xl:text-left xl:text-6xl xl:pb-2'>minja-ui</h1>
					<h3 className='text-h3 font-light text-gray-60 xl:text-3xl'>Taiwind CSS Components</h3>
					<br />
					<br />
					<div className='flex items-center justify-between'>
						<Block >
							<p className='py-2 px-3 font-semibold text-gray-80'>npm i minja-ui</p>
						</Block>
						<Button variant='secondary'><a href='https://www.npmjs.com/package/minja-ui'>HOW TO USE?</a></Button>
					</div>
				</div>
				{/* Right */}
				<div className='xl:transform xl:rotate-3 xl:overflow-x-hidden'>
					<div className='flex flex-wrap justify-center'>
						<Block className='p-6 text-center flex flex-col items-center justify-center mt-4 w-80'> {/* Social Card */}
							<Avatar image='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' />
							<h2 className='text-h2 text-gray-80'>John Doe</h2>
							<p className='text-gray-60'>Web Developer</p>
							<p className='text-gray-60'>Graphic Designer</p>
							<div className='flex my-4 space-x-2 mb-14'>
								<Badge>Designer</Badge>
								<Badge>Developer</Badge>
								<Badge>Rider</Badge>
							</div>
							<Button variant='primary'>FOLLOW</Button>
						</Block>
						<Block className='px-6 py-2 w-80'> {/* Contact Form */}
							<h2 className='text-h2 font-semibold text-center'>Contact Us</h2>
							<br />
							<div className='space-y-3'>
								<InputOutlined label='First Name' required />
								<InputOutlined label='Last Name' />
								<br />
								<TextAreaOutlined label='Message' />
							</div>
							<Button className='mx-auto my-2'>SUBMIT</Button>
						</Block> 
						<Block className='space-y-4 p-6 md:my-8 w-80'> {/* Alerts */}
							<Alert type='alert' />
							<Alert type='secondary'/>
							<Alert type='warning' label='This is Warning!'/>
							<Alert type='success' label='This is Success!'/>
							<Alert type='error' label='This is Error!'/>
						</Block>
					</div>
					<div className='flex flex-wrap justify-center'>
						<Block className='flex items-center justify-center p-6 md:mt-16 space-x-4 w-80'> {/* Buttons */}
							<div className='space-y-4'>
								<Button variant='primary' />
								<Button variant='secondary' />
								<Button variant='success' />
								<Button variant='warning' />
								<Button variant='error' />
							</div>
							<div className='space-y-4'>
								<Button variant='link' />
								<Button variant='btn' />
								<Button variant='ghost' />
								<Button variant='primary' icon={<Email24 />}></Button>
								<Button variant='btn' icon={<Email24 />}></Button>
							</div>
						</Block>
					 	<Block className='text-left'> {/* Media Card */}
							<MediaCard />
						</Block>
						<Block className='px-6 mt-10 xl:my-14 pb-6 space-y-3 w-80'> {/* Filled Form */}
							<Dropdown className='mb-3' />
							<Input />
							<br />
							<TextArea />
						</Block>
					</div>
				</div>
			</main>
			{/* Footer */}
			<footer className='border-t-2 border-gray-30 pt-4'>
				<div className='flex items-center justify-center space-x-2'>
					<Avatar badge={false} image='https://avatars.githubusercontent.com/u/77694499?v=4' />
					<span>
						<p className='font-light text-body1 text-gray-60'>Designed and Developed by <br/></p>
						<a href='https://www.linkedin.com/in/milijan-popovic/' className='font-semibold text-h3 text-gray-80'>MINJA</a>
					</span>
				</div>
				
			</footer>
		</div>
	)
}


export default Showcase
