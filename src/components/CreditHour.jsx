"use client"

import React from 'react';

const CreditHour = () => {

    const data = [
        {
            title: "Completed Credits",
            progress: "38 out of 150",
            color: "blue-500",
            percent: "25%"
        },
        {
            title: "Completed Courses",
            progress: "18 out of 70",
            color: "green-500",
            percent: "25.7%"
        },
        {
            title: "CGPA",
            progress: "3.5 out of 4.0",
            color: "yellow-500",
            percent: "87.5%"
        },
        {
            title: "Projects Completed",
            progress: "120 out of 300",
            color: "purple-500",
            percent: "40%"
        }
    ];

    return (
        <div>
            <div className="h-[24rem] mx-auto shadow-xl rounded-lg  px-10 bg-white">
                <h1 className="text-xl font-medium py-1">PROGRESS</h1>
                <div className="grid grid-cols-2 gap-6 h-[20rem]">
                    {data.map((item, index) => (
                        <div key={index}
                             className=" p-4 rounded-lg border-2 border-gray-300   flex flex-col justify-between ">
                            <div className="text-xl font-semibold pb-1">{item.title}</div>

                            <div>
                                <div className="text text-gray-600 mb-1">{item.progress}</div>
                                <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                                    <div className={`bg-${item.color} h-3 rounded-full`}
                                         style={{width: '0%', animation: `progress-${index} 1s forwards`}}></div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button className="text-blue-500 hover:text-blue-700 hover:underline">Show
                                    more
                                </button>
                                <div className="text-right text-gray-600">{item.percent}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CSS Animation Keyframes */}
                <style jsx>{`
                    @keyframes progress-0 {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: ${data[0].percent};
                        }
                    }

                    @keyframes progress-1 {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: ${data[1].percent};
                        }
                    }

                    @keyframes progress-2 {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: ${data[2].percent};
                        }
                    }

                    @keyframes progress-3 {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: ${data[3].percent};
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default CreditHour;