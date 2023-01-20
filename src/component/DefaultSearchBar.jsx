import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react'

const DefaultSearchBar = ({ onSelect }) => {
	return (
		<div className="custom-rounded shadow-sm">
			<ul className="list-none flex gap-1 justify-center items-center py-1">
				<li className="search-item" onClick={onSelect}>
					<p>Anywhere</p>
				</li>
				<li className="search-item" onClick={onSelect}>
					<p>Any week</p>
				</li>
				<li
					className="flex flex-row items-center cursor-pointer"
					onClick={onSelect}
				>
					<p className="px-4 font-normal text-sm">Add guests</p>
					<div className="rounded-full w-8 h-8 bg-red-500 flex justify-center items-center text-white">
						<MagnifyingGlassIcon className="w-4 h-4" />
					</div>
				</li>
			</ul>
		</div>
	);
};

export default DefaultSearchBar;