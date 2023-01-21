import React, { useState } from 'react'
import { Tab } from "@headlessui/react";
import { CalendarIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Calendar } from 'react-multi-date-picker';
import MonthBox from './monthBox';

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


//dummy data for month name and year object arrays
const months = [
  {
    month: "January",
    year: 2021

  },
  {
    month: "February",
    year: 2021
  },
  {
    month: "March",
    year: 2021
  },
  {
    month: "April",
    year: 2021
  },
  {
    month: "May",
    year: 2021
  },
  {
    month: "June",
    year: 2021
  },
  {
    month: "July",
    year: 2021
  },
  {
    month: "August",
    year: 2021
  },
  {
    month: "September",
    year: 2021
  }
];


const SearchContainer = () => {
  const [value, setValue] = useState();


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
						<Tab.Panel
							key={1}
							className={classNames("rounded-xl bg-white p-3 shadow-md w-full")}
						>
							<Tab.Group>
								<Tab.List className="flex flex-row rounded-full shadow w-72 bg-gray-300 justify-center items-center mx-auto">
									<Tab
										key="choose_date"
										className={({ selected }) =>
											classNames(
												"flex justify-start items-center px-4 py-2 m-1 mr-0",
												selected
													? "shadow-md rounded-full bg-white"
													: "hover:rounded-full hover:bg-white/[0.12]"
											)
										}
									>
										Choose Dates
									</Tab>
									<Tab
										key="flex_date"
										className={({ selected }) =>
											classNames(
												"flex justify-start items-center px-4 py-2 m-1",
												selected
													? "shadow-md rounded-full bg-white"
													: "hover:rounded-full hover:bg-white/[0.12]"
											)
										}
									>
										<p className="text-sm font-bold block">Flexible Dates</p>
									</Tab>
								</Tab.List>
								<Tab.Panels className="h-80">
									<Tab.Panel className="w-full h-full">
										<Calendar
											className="border-none mt-4 mx-auto h-80"
											minDate={new Date()}
											numberOfMonths={2}
											disableMonthPicker
											shadow={false}
											range
											disableYearPicker
											value={value}
											onChange={setValue}
											mapDays={({
												date,
												today,
												selectedDate,
												currentMonth,
												isSameDate,
											}) => {
												let props = {};

												props.style = {};
												if (isSameDate(date, today))
													props.style = {
														...props.style,
														backgroundColor: "white",
														color: "black",
														border: "none",
													};
												return props;
											}}
										/>
									</Tab.Panel>
									<Tab.Panel>
										<div className="text-center flex flex-col items-center">
											<p className="pt-4 pb-4 text-2xl font-semibold">
												Stay for a month
											</p>
											<div className="flex gap-2">
												<button className="border hover:border-1 hover:border-black py-2 px-4 rounded-full text-center">
													Weekend
												</button>
												<button className="border hover:border-1 hover:border-black py-2 px-4 rounded-full text-center">
													Week
												</button>
												<button className="border hover:border-1 hover:border-black py-2 px-4 rounded-full text-center">
													Month
												</button>
											</div>
											<div></div>
											<div>
												<p className="pt-4 pb-4 text-2xl font-semibold">
													Go anytime
												</p>

												<div className="max-w-3xl">
													<Swiper
														slidesPerView={5}
														spaceBetween={0}
														navigation={true}
														modules={[Navigation]}
														className="mySwiper  "
													>
														{months.map((m,i) => (
                              <SwiperSlide
																	key={i}
																	className="flex flex-col items-center"
																>
																	<MonthBox  month={m.month} year={m.year} />
																</SwiperSlide>
														))}
													</Swiper>
												</div>
											</div>
										</div>
									</Tab.Panel>
								</Tab.Panels>
							</Tab.Group>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
}

export default SearchContainer