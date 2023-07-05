import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { AiOutlineReconciliation } from "react-icons/ai";
import { MdOutlineMan2 } from "react-icons/md";

const AnalyticsCard = () => {
  return (
    <div className="flex gap-4 m-5">

<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoPeople className="text-2xl text-white" />

				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Doctor</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">162</strong>
						<span className="text-sm text-red-500 pl-2">-83</span>
					</div>
				</div>
			</BoxWrapper>
            <BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<AiOutlineReconciliation className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Appointments</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$3423</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>


			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<MdOutlineMan2 className="text-2xl text-white" />

				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Patients</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
  )
}
function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
export default AnalyticsCard