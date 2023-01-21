import { CalendarIcon } from '@heroicons/react/20/solid';
import React from 'react'

const MonthBox = ({month, year}) => {
  return (
		<div className="month_box">
			<CalendarIcon className="w-8 h-8" />
			<p className="text-md  font-semibold">{month}</p>
			<p className="text-md  font-medium">{year}</p>
		</div>
	);
}


export default MonthBox;