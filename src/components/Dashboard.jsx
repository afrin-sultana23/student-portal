import React from 'react';
import Calendar from "@/components/calendar";
import {FaArrowRight, FaClock} from "react-icons/fa";
import Stats from "@/components/Stats";
import Reminders from "@/components/Reminders";

const Dashboard = () => {
    return (
        <div className="flex m-6 max-w-[120rem] mx-auto">
            <div className=" w-4/5">
                <div className="bg-[#F6E4E8] flex rounded-2xl mx-8 col-span-3 h-[18rem]">
                    <h1 className="text-3xl font-bold text-white p-12">Overview</h1>
                    <div className="card w-full  p-4 m-5 bg-base-100">

                    </div>
                    <div className="card w-full  p-4 m-5 bg-base-100">

                    </div>
                    <div className="card w-full  p-4 m-5 bg-base-100">
                        <h1 className="card-title pl-5">Stats</h1>
                        <Stats></Stats>
                    </div>
                </div>

                {/*  notices */}
                <h1 className="text-4xl font-bold text-gray-900 py-5 pl-4">Notices</h1>
                <div className="flex justify-evenly space-x-8 h-[22rem] m-5">
                    <div className="w-full  rounded-2xl shadow-xl bg-base-100"></div>
                    <div className="w-full rounded-2xl shadow-xl bg-base-100"></div>
                </div>

                {/* courses   */}

                <h1 className="text-4xl font-bold text-gray-900 pb-5 pl-4">Courses</h1>
                <div className=" col-span-3 h-[10rem] grid grid-cols-3 pr-5">
                    <div className="bg-[#4D4CAC] text-white flex items-center justify-between  mx-3 rounded-2xl p-6">
                        <div
                            className="bg-[#5A5AB9] text-white font-bold text-2xl text-center rounded-2xl py-5 w-20 h-20 ">
                            B1
                        </div>
                        <div className="pl-4">
                            <p className="text-lg text-gray-200 pb-2">1.75 credit hour complete</p>
                            <h1 className="text-2xl font-bold">Numerical method</h1>
                        </div>
                        More<FaArrowRight className="h-6 w-6 ml-2"/>
                    </div>
                    <div className="bg-[#9698D6] text-white flex items-center  mx-3 rounded-2xl p-6">
                        <div
                            className="bg-[#A4A6DB] text-white font-bold text-2xl text-center rounded-2xl py-5 w-20 h-20 ">
                            B1
                        </div>
                        <div className="pl-4">
                            <p className="text-lg text-gray-200 pb-2">3.00 credit hour complete</p>
                            <h1 className="text-2xl font-bold">Object oriented programming</h1>
                        </div>
                        <span className="font-medium  ">more<FaArrowRight className="h-6 w-6"/></span>
                    </div>
                    <div className="bg-[#ED7E89] text-white flex items-center  mx-3 rounded-2xl p-6">
                        <div
                            className="bg-[#EE8F9A] text-white font-bold text-2xl text-center rounded-2xl py-5 w-20 h-20 ">
                            B1
                        </div>
                        <div className="pl-4">
                            <p className="text-lg text-gray-200 pb-2">3.00 credit hour complete</p>
                            <h1 className="text-2xl font-bold">Object oriented programming</h1>
                        </div>
                        <span className="font-medium  ">more<FaArrowRight className="h-6 w-6"/></span>
                    </div>
                </div>
            </div>
            <div className=" w-1/5  pt-5">
                <Calendar></Calendar>
                <div className="my-10">
                    <Reminders></Reminders>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;