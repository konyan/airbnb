import React from 'react'

const NewSearchContainer = props => {
  return (
		<div className="flex-row justify-center items-center">
			<ul className="flex flex-row gap-8 justify-center">
				<li className="font-normal transition-all search_title_item_selected">
					Stays
				</li>
				<li className="search_title_item">
					<p className="mb-2">Experience</p>
				</li>
				<li className="search_title_item">
					<p className="mb-2">Online Experience</p>
				</li>
			</ul>
				<ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
					<li>
						<a href="#page1" class="flex justify-center py-4">
							Pilot Training
						</a>
					</li>
					<li>
						<a
							href="#page2"
							class="flex justify-center bg-white rounded-full shadow text-indigo-900 py-4"
						>
							Titan maintenance
						</a>
					</li>
					<li>
						<a href="#page3" class="flex justify-center py-4">
							Loadout
						</a>
					</li>
					<li>
						<a href="#page4" class="flex justify-center py-4">
							Server Browser
						</a>
					</li>
					<li>
						<a href="#page5" class="flex justify-center py-4">
							Settings
						</a>
					</li>
				</ul>
		</div>
	);
}


export default NewSearchContainer