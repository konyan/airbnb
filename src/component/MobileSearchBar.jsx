import {
	AdjustmentsHorizontalIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const MobileSearchBar = ({ onSelect }) => {
	return (
		<div className="mobile_search_box">
			<div
				className="flex flex-row items-center cursor-pointer"
				onClick={onSelect}
			>
				<div className="w-8 h-8  flex justify-center items-center text-gray-700">
					<MagnifyingGlassIcon className="w-6 h-6" />
				</div>
				<div
					className="flex ml-3 items-center cursor-pointer"
					onClick={onSelect}
				>
					<div>
						<p className="text-md font-semibold">Anywhere</p>
						<p className="text-sm text-gray-500">
							<span>Any Week .</span>
							<span> Add guests</span>
						</p>
					</div>
				</div>
			</div>

			<div
				className="flex flex-row items-center cursor-pointer"
				onClick={onSelect}
			>
				<div className="rounded-full p-2 bg-transparent border  flex justify-center items-center text-gray-700">
					<AdjustmentsHorizontalIcon className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
};

export default MobileSearchBar;
