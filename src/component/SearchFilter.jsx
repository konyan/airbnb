import { Dialog, Tab, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

import React, { Fragment, useState } from "react";
import Calendar from "../react-year-calendar";
import GuestTypeBox from "./GuestTypeBox";
import MonthBox from "./monthBox";

//dummy data for month name and year object arrays
const months = [
	{
		month: "January",
		year: 2021,
	},
	{
		month: "February",
		year: 2021,
	},
	{
		month: "March",
		year: 2021,
	},
	{
		month: "April",
		year: 2021,
	},
	{
		month: "May",
		year: 2021,
	},
	{
		month: "June",
		year: 2021,
	},
	{
		month: "July",
		year: 2021,
	},
	{
		month: "August",
		year: 2021,
	},
	{
		month: "September",
		year: 2021,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const SearchFilter = ({ open, onClose }) => {
	const [TabSelected, setTabSelected] = useState(1);

   const [guest, setGuest] = useState({
			adult: 0,
			child: 0,
			infant: 0,
			pet: 0,
		});

  const increaseGuest = (type) => {
		setGuest({  
			...guest,
			[type]: guest[type] + 1,
		});
	};

	const decreaseGuest = (type) => {
		setGuest({
			...guest,
			[type]: guest[type] - 1 === -1 ? 0 : guest[type] - 1,
		});
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-[10000]" onClose={onClose}>
				<div className="fixed inset-0" />

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex w-full">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="-translate-y-full"
								enterTo="-translate-y-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="-translate-y-0"
								leaveTo="-translate-y-full"
							>
								<Dialog.Panel className="pointer-events-auto w-full">
									<div className="flex h-full flex-col overflow-y-scroll bg-[#F7f7f7] py-2 shadow-xl">
										<div className="relatvie  mt-3 sm:px-6">
											{/* Replace with your content */}
											{/* Title */}
											<div className="flex relative items-center justify-center gap-3">
												<div
													onClick={() => {
														onClose(false);
													}}
													className="cursor-pointer absolute top-0 left-5 rounded-full p-2 bg-transparent border border-black  flex justify-center items-center text-black"
												>
													<XMarkIcon className=" w-4 h-4" />
												</div>

												<ul className="flex gap-5 justify-center">
													<li className="font-semibold text-lg transition-all search_title_item_selected">
														Stays
													</li>
													<li className="search_title_item">
														<p className="mb-2  text-lg">Experiences</p>
													</li>
												</ul>
											</div>
											{/* /End Title */}
											{/* /Footer  */}
											<div className="left-0 w-full bottom-0 py-4 absolute lg:relative lg:block  bg-white  px-5 border  border-gray-100">
												<div className="flex w-full items-center justify-between">
													<div
														onClick={() => {
															onClose();
														}}
													>
														<p className="underline text-lg font-semibold">
															Clear All
														</p>
													</div>
													<div
														onClick={() => {
															onClose();
														}}
														className="flex rounded-md py-2 px-2  bg-red-500  justify-center items-center text-white"
													>
														<div className="">
															<MagnifyingGlassIcon className="w-4 h-4" />
														</div>
														<p className="px-2 font-normal text-sm">Search</p>
													</div>
												</div>
											</div>
											{/* /End footer */}

											{/* /End Where To */}
											<div className="mx-5 mt-5 ">
												{TabSelected !== 1 && (
													<div
														className="unSelect_Box"
														onClick={() => {
															setTabSelected(1);
														}}
													>
														<p className="text-gray-500 text-md">where</p>
														<p className="text-black font-semibold text-md">
															I'm flexible
														</p>
													</div>
												)}
												{TabSelected === 1 && (
													<div className="my-5 bg-white px-5 py-5  active_shadow rounded-3xl">
														<p className="text-xl font-bold mb-5">Where to ?</p>

														<div className="relative mt-1 rounded-md border border-gray-700 shadow-sm">
															<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
																<MagnifyingGlassIcon className="w-4 h-4" />
															</div>
															<input
																type="text"
																name="text"
																id="text"
																className="block w-full rounded-md  pl-10 border border-gray-700 sm:text-sm"
																placeholder="Search destinations"
															/>
														</div>
														<div className="mt-4 flex overflow-x-scroll gap-2">
															<li className="flex flex-col">
																<div className="region_item">
																	<img
																		src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
																		alt="flex"
																	/>
																</div>
																<p>I'm flexible</p>
															</li>
															<li className="flex flex-col">
																<div className="region_item">
																	<img
																		src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
																		alt="flex"
																	/>
																</div>
																<p>Europe</p>
															</li>
															<li className="flex flex-col">
																<div className="region_item">
																	<img
																		src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320"
																		alt="flex"
																	/>
																</div>
																<p>Japan</p>
															</li>
														</div>
													</div>
												)}
												{TabSelected !== 2 && (
													<div
														className="unSelect_Box"
														onClick={() => {
															setTabSelected(2);
														}}
													>
														<p className="text-gray-500 text-md">When</p>
														<p className="text-black font-semibold text-md">
															Add dates
														</p>
													</div>
												)}

												{TabSelected === 2 && (
													<div className="relative h-full">
														<div className="absolute top-0 w-full left-0 z-5">
															<div className="h-full overflow-hidden bg-white px-5 py-5 active_shadow rounded-3xl">
																<div className="h-[75vh]">
																	<p className="text-2xl font-bold mb-2">
																		When is your trip?
																	</p>
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
																				<p className="text-sm font-bold block">
																					Flexible Dates
																				</p>
																			</Tab>
																		</Tab.List>
																		<Tab.Panels className="h-80">
																			<Tab.Panel className="w-full h-full">
																				<div className="mt-5 w-full border-b">
																					<div className="flex text-center gap-6 justify-center w-full mx-auto">
																						<p className="text-md text-gray-500 font-semibold">
																							Mo
																						</p>
																						<p className="text-md  text-gray-500 font-semibold">
																							Tu
																						</p>
																						<p className="text-md text-gray-500 font-semibold">
																							We
																						</p>
																						<p className="text-md text-gray-500 font-semibold">
																							Th
																						</p>
																						<p className="text-md text-gray-500 font-semibold">
																							Fr
																						</p>
																						<p className="text-md  text-gray-500 font-semibold">
																							Sa
																						</p>
																						<p className="text-md text-gray-500  font-semibold">
																							Su
																						</p>
																					</div>
																				</div>
																				<div>
																					<div className="overflow-hidden mt-2">
																						<div className="min-h-[285px]  max-h-[500px] overflow-y-scroll">
																							<Calendar
																								// year={moment().year()}
																								onDayClick={""}
																								minDate={new Date()}
																								language="en"
																								weekStart={1}
																								startDate={new Date()}
																								numberMonthsDisplayed={3}
																							/>
																							<div className="flex mb-10 rounded-md py-2 px-2  bg-transparent border-black   border justify-center items-center text-black">
																								<p className="px-2 font-normal text-sm">
																									Load More Date
																								</p>
																							</div>
																						</div>
																					</div>
																				</div>
																			</Tab.Panel>
																			<Tab.Panel>
																				<div className="mt-5">
																					<p className="pt-1 pb-3 text-lg text-start font-semibold">
																						How long would you like to stay?
																					</p>
																					<div className="flex gap-2 mb-3">
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
																				</div>
																				<div className="border-t border-gray-200">
																					<p className="pt-1 pb-4 text-lg text-start font-semibold">
																						When do you want to go?
																					</p>
																					<div className="flex gap-4 overflow-scroll">
																						{months.map((m, i) => (
																							<div
																								key={i}
																								className="flex flex-col items-center"
																							>
																								<MonthBox
																									month={m.month}
																									year={m.year}
																								/>
																							</div>
																						))}
																					</div>
																				</div>
																			</Tab.Panel>
																		</Tab.Panels>
																	</Tab.Group>

																	<div className="left-0 w-full bottom-0 py-4 absolute lg:relative lg:block  bg-white  px-5   border-gray-100">
																		<div className="flex w-full items-center justify-between">
																			<div
																				onClick={() => {
																					setTabSelected(3);
																				}}
																			>
																				<p className="underline text-lg font-semibold">
																					Skip
																				</p>
																			</div>
																			<div
																				onClick={() => {
																					setTabSelected(3);
																				}}
																				className="flex rounded-md py-2 px-2  bg-black  justify-center items-center text-white"
																			>
																				<p className="px-2 font-normal text-sm">
																					Next
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												)}

												{TabSelected !== 3 && (
													<div
														className="unSelect_Box "
														onClick={() => {
															setTabSelected(3);
														}}
													>
														<p className="text-gray-500 text-md">Who</p>
														<p className="text-black font-semibold text-md">
															Add guests
														</p>
													</div>
												)}

												{TabSelected === 3 && (
													<div className="mt-5 bg-white px-5 py-5  active_shadow rounded-3xl">
														<p className="text-2xl font-bold mb-2">
															Who's coming?
														</p>

														<GuestTypeBox
															onInc={() => increaseGuest("adult")}
															onDec={() => decreaseGuest("adult")}
															count={guest.adult}
															title={"Adults"}
															caption="Ages 13 or Above"
														/>
														<GuestTypeBox
															onInc={() => increaseGuest("child")}
															onDec={() => decreaseGuest("child")}
															count={guest.child}
															title={"Child"}
															caption="Ages 2-12"
														/>
														<GuestTypeBox
															onInc={() => increaseGuest("infant")}
															onDec={() => decreaseGuest("infant")}
															count={guest.infant}
															title={"Infants"}
															caption="Under 2"
														/>
														<GuestTypeBox
															onInc={() => increaseGuest("pet")}
															onDec={() => decreaseGuest("pet")}
															count={guest.pet}
															title={"Pets"}
															caption="Bringing a service animal"
														/>
													</div>
												)}
											</div>

											{/* /End replace */}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default SearchFilter;
