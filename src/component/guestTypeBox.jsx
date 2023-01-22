
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import React from "react";

const GuestTypeBox = ({ title, caption,count ,onInc,onDec }) => {
	return (
		<div className="Guest_box">
			<div className="flex justify-between border-b pb-5 px-2 py-3 gap-3 lg:mb-4 col-span-2 items-center">
				<div>
					<p className="font-bold text-xl capitalize">{title}</p>
					<p className="text-sm font-light text-gray-400">{caption}</p>
				</div>

				<div className="flex justify-center items-center ">
					<button
						type="button"
            onClick={onDec}
						className="inline-flex items-center rounded-full border bg-transparent  px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						<MinusIcon className="lg:w-5 lg:h-5 w-3 h-3 text-black my-1" />
					</button>
					<p className="ml-4 mr-4 text-center text-[27px] w-[30px] font-medium">
						{count}
					</p>
					<button
						type="button"
            onClick={onInc}
						className="inline-flex items-center rounded-full border bg-transparent px-2 py-1 shadow-sm   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2z"
					>
						<PlusIcon className="lg:w-5 lg:h-5 w-3 h-3 text-black my-1" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default GuestTypeBox;
