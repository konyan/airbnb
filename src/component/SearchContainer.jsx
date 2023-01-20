import React, { useState } from 'react'
import { Tab } from "@headlessui/react";
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SearchContainer = () => {


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
			<div className="w-full px-2 sm:px-0">
				<Tab.Group>
					<Tab.List className="custom-rounded-big shadow mt-4 bg-gray-300">
						<Tab
							key="where"
							className={({ selected }) =>
								classNames(
									"tab_item",
									"pr-24 pl-8 py-3",
									selected
										? "shadow-md rounded-full bg-white"
										: "hover:rounded-full hover:bg-white/[0.12]"
								)
							}
						>
							<p className="font-bold text-xs text-black text-left">Where</p>
							<input placeholder="Search Destination" />
						</Tab>
						<Tab
							key="checkIn"
							className={({ selected }) =>
								classNames(
									"tab_item",
									"pr-12 pl-8 py-3",
									selected
										? "shadow-md rounded-full bg-white"
										: "hover:rounded-full hover:bg-white/[0.12]"
								)
							}
						>
							<p className="font-bold text-xs text-black text-left">CheckIn</p>
							<small className="text-gray-500">Add Dates</small>
						</Tab>
						<Tab
							key="checkOut"
							className={({ selected }) =>
								classNames(
									"tab_item",
									"pr-12 pl-8 py-3",
									selected
										? "shadow-md rounded-full bg-white"
										: "hover:rounded-full hover:bg-white/[0.12]"
								)
							}
						>
							<p className="font-bold text-xs text-black text-left">
								Check Out
							</p>
							<small className="text-gray-500">Add Dates</small>
						</Tab>
						<Tab
							key="who"
							className={({ selected }) =>
								classNames(
									"flex justify-start items-center",
									"pr-4",
									selected
										? "shadow-md rounded-full bg-white"
										: "hover:rounded-full hover:bg-white/[0.12]"
								)
							}
						>
							<div className="basis-1/2 flex-col justify-start items-start flex pl-6">
								<p className="font-bold text-xs text-black">Who</p>
								<small className="text-gray-500 text-left">Add guests</small>
							</div>
							<div className="basis-1/2 items-baseline justify-center">
								<button
									type="button"
									className="flex items-center pr-6 pl-2 py-1 ml-4 mr-0 border border-transparent text-md font-bold rounded-full shadow-sm text-white bg-red-600"
								>
									<MagnifyingGlassIcon
										className="m-2 h-5 w-5"
										aria-hidden="true"
									/>
									Search
								</button>
							</div>
						</Tab>
					</Tab.List>
					<Tab.Panels className="mt-2">
						<Tab.Panel
							key={1}
							className={classNames("rounded-xl bg-white p-3 shadow-md w-3/5")}
						>
							<p className="font-bold text-sm px-4 mt-4">Search By Region</p>

							<ul className="flex flex-row flex-wrap ml-4 mt-4 gap-2">
								<li className="flex flex-col">
									<div className="region_item"></div>
									<p>I'm flexible</p>
								</li>
								<li className="flex flex-col">
									<div className="region_item"></div>
									<p>Europe</p>
								</li>
								<li className="flex flex-col">
									<div className="region_item"></div>
									<p>Japan</p>
								</li>
								<li className="flex flex-col">
									<div className="region_item"></div>
									<p>United States</p>
								</li>
								<li className="flex flex-col">
									<div className="region_item"></div>
									<p>South Korea</p>
								</li>
								<li className="flex flex-col">
									<div className="region_item"></div>
									<p>Australia</p>
								</li>
							</ul>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
}

export default SearchContainer