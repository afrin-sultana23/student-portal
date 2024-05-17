import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Dashboard from "@/components/Dashboard";

const Page = () => {
    return (
        <div>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <div className="navbar bg-violet-200 px-10">
                        <div className="flex-none">
                            <label className="btn btn-square btn-ghost " htmlFor="my-drawer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-5 h-5 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1">
                            <div>
                                <Image src="/puc_logo.webp"
                                       width={100} height={100} className="w-[3rem]" alt="logo"/>
                            </div>
                            <a className="pl-3 font-bold text-xl">PUC Student Portal</a>
                        </div>
                        <div className="flex-none">
                            <div className="pr-3">
                                <ul className="menu menu-horizontal px-1 space-x-3 text-lg">
                                    <li className="">Courses</li>
                                    <li className="">Routines</li>
                                    <li className="">Enrollment</li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-ful rounded-full">
                                        <Image src="/picture.webp" width={60} height={60} alt="" />
                                    </div>
                                </div>
                                <ul tabIndex={0}
                                    className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48 ">
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/*<Overview></Overview>*/}
                    <Dashboard></Dashboard>
                    {/*<label  className="btn btn-primary drawer-button">Open drawer</label>*/}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-4 text-base-content text-lg ">
                        {/* Sidebar content here */}
                        <div className="w-full flex justify-center mb-6">
                            <Image src="/puc_logo.webp"
                                 height={200} width={200} className="w-[3rem]" alt="logo"/>
                            <h1 className="text-2xl ml-2">Premier University</h1>
                        </div>
                        <Link className="w-full h-10 bg-violet-200 hover:bg-opacity-35   shadow rounded flex justify-center items-center"
                              href="/home/">Routine</Link>
                        <Link className="w-full h-10  bg-gray-200 shadow rounded flex justify-center items-center"
                              href="/home/">Enrollment</Link>
                        <Link className="w-full h-10 bg-gray-200 shadow rounded flex justify-center items-center"
                              href="/result/">Result</Link>
                        <Link className="w-full h-10 bg-gray-200 shadow rounded flex justify-center items-center"
                              href="/home/">Notices</Link>
                        <Link className="w-full h-10 bg-gray-200 shadow rounded flex justify-center items-center"
                              href="/home/">Transcript</Link>
                        <Link className="w-full h-10 bg-gray-200 shadow rounded flex justify-center items-center"
                              href="/home/">Payment Form</Link>
                        <Link className="w-full h-10 bg-gray-200 shadow rounded flex justify-center items-center"
                              href="/home/">Section Office</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Page;