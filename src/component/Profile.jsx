import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, UserCircleIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Profile = () => {
	return (
		<Popover className="relative">
			{({ open }) => (
				<>
					<Popover.Button
						className={classNames(
							open ? "text-gray-900" : "text-gray-500",
							"group inline-flex items-center bg-white text-base font-medium hover:text-gray-900 border rounded-full py-1 px-2"
						)}
					>
						<Bars3BottomLeftIcon className="w-6 h-6" />
						<UserCircleIcon className="w-8 h-8 ml-2" />
					</Popover.Button>

					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className="absolute left-0 z-10 mt-3 w-56 max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
							<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
								<div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
									<div className="relative grid gap-2 bg-white py-4 sm:gap-4">
										<ul className="flex justify-start flex-col items-start gap-4 sm:px-6 mt-2">
											<li className="font-bold text-base">Sign Up</li>
											<li className="font-normal text-base">Login In</li>
										</ul>
										<div className="w-full h-[1px] bg-gray-200"></div>
										<ul className="flex justify-start flex-col items-start gap-6 sm:px-6">
											<li className="font-normal text-base">Airbnb you home</li>
											<li className="font-normal text-base">Host an experience</li>
											<li className="font-normal text-base">Help</li>
										</ul>
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default Profile;
