import React from 'react'
import PropTypes from 'prop-types'



const Breadcrumbs = ({ children, className, separator, action, summary }) => {
	const [openTab, setOpenTab] = React.useState(0)

	return (
		<div>
			<div className="w-80">
				<ul className="flex flex-wrap pt-3 pb-2 flex-row"
					role="tablist" >
					<li className=" last:mr-0 flex-0 text-center">
						<a className={`font-normal text-md px-2 py-1 tracking-wide ${openTab === 1 ? 'bg-gray-10 rounded-default' : ''}`}
							onClick={e => {
								e.preventDefault();
								setOpenTab(1);
							}}
							data-toggle="tab"
							href="#"
							role="tablist"
						>
							{!action ? 'Home' : action}
						</a>
					</li>
					<div>
						{separator && <span className="text-sm text-gray-60 mx-2">{separator}</span>}
					</div>
					<li className=" last:mr-0 flex-0 text-center">
						<a
							className={`text-md px-2 py-1 tracking-wide ${openTab === 2 ? 'bg-gray-10 rounded-default' : ''}`}
							onClick={e => {
								e.preventDefault();
								setOpenTab(2);
							}}
							data-toggle="tab"
							href="#"
							role="tablist"
						>
							{!action ? 'Pages' : action}
						</a>
					</li>
				</ul>
				<div className="relative flex flex-col min-w-0 break-words w-full mb-6 text-left">
					<div className="py-2 flex-auto">
						<div className="tabs-content">
							<div className={openTab === 1 ? "block" : "hidden"} id="link1">
								<p className='text-md text-body'>
									{!summary ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' : summary}
								</p>
							</div>
							<div className={openTab === 2 ? "block" : "hidden"} id="link2">
								<p className='text-md text-body'>
									{!summary ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, omnis non tenetur aspernatur dolorem architecto facilis dolor.' : summary}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Breadcrumbs.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	separator: PropTypes.string,
	action: PropTypes.node,
	summary: PropTypes.node,
}

Breadcrumbs.defaultProps = {
	children: null,
	className: '',
	separator: '>',
	action: '',
	summary: '',
}

export default Breadcrumbs
