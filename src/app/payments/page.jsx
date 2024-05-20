"use client"
import React, { useState } from 'react';
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";

const Page = () => {
    const [enroll, setEnroll] = useState([]);
    const [isEnrolling, setIsEnrolling] = useState(false);

    const subjects = [
        {
            "name": "Object Oriented Programming",
            "code": "CSE 1115",
            "color": "blue",
            "teacher": "Minhaz",
            "credit": 3,
            "classTimes": ["Mon 10:00 AM - 11:30 AM", "Wed 10:00 AM - 11:30 AM", "Fri 10:00 AM - 11:30 AM"]
        },
        {
            "name": "Object Oriented Programming Lab",
            "code": "CSE 1116",
            "color": "sky",
            "teacher": "Minhaz",
            "credit": 1.5,
            "classTimes": ["Tue 1:00 PM - 2:30 PM", "Thu 1:00 PM - 2:30 PM"]
        },
        {
            "name": "Internet Programming",
            "code": "CSE 3210",
            "color": "emerald",
            "teacher": "Tamim Hossain",
            "credit": 1.5,
            "classTimes": ["Mon 2:00 PM - 3:30 PM", "Wed 2:00 PM - 3:30 PM"]
        },
        {
            "name": "Digital Electronics & Pulse Technique",
            "code": "EEE 2201",
            "color": "amber",
            "teacher": "Sarith Ghosh",
            "credit": 3,
            "classTimes": ["Tue 11:30 AM - 1:00 PM", "Thu 11:30 AM - 1:00 PM", "Sat 10:00 AM - 11:30 AM"]
        },
        {
            "name": "Digital Electronics & Pulse Technique Lab",
            "code": "EEE 2202",
            "color": "amber",
            "teacher": "Sarith Ghosh",
            "credit": 1.5,
            "classTimes": ["Mon 3:00 PM - 4:30 PM", "Wed 3:00 PM - 4:30 PM"]
        },
        {
            "name": "Communicative English",
            "code": "ENG 1102",
            "color": "rose",
            "teacher": "Shreyoshi Paul",
            "credit": 3,
            "classTimes": ["Tue 9:00 AM - 10:30 AM", "Thu 9:00 AM - 10:30 AM", "Sat 1:00 PM - 2:30 PM"]
        },
        {
            "name": "Coordinate Geometry & Vector Analysis",
            "code": "MAT 1205",
            "color": "violet",
            "teacher": "Kollol",
            "credit": 3,
            "classTimes": ["Mon 1:00 PM - 2:30 PM", "Wed 1:00 PM - 2:30 PM", "Fri 1:00 PM - 2:30 PM"]
        },
        {
            "name": "Numerical Methods",
            "code": "MAT 2304",
            "color": "teal",
            "teacher": "Tonni Dhoom",
            "credit": 1.5,
            "classTimes": ["Wed 11:00 AM - 12:30 PM"]
        },
        {
            "name": "Bangladesh Studies",
            "code": "SSC 1101",
            "color": "lime",
            "teacher": "Muntasir",
            "credit": 2,
            "classTimes": ["Tue 11:00 AM - 12:30 PM", "Thu 11:00 AM - 12:30 PM"]
        },
    ];

    const handleEnroll = () => {
        setIsEnrolling(true);
        setEnroll(subjects);
    };

    return (
        <div>
            {isEnrolling && <h1 className="text-center text-4xl font-bold mb-4 underline pt-44 pb-8 bg-sky-50 ">Pending Request</h1>}
            <div className="bg-teal-100 rounded-lg max-w-5xl mx-auto my-20 p-8">
                {subjects.map((subject) => (
                    <div key={subject.code}
                         className="flex justify-between items-center bg-teal-50 rounded-xl px-8 py-2 my-4">
                        <div className="bg-slate-200 text-center p-5 rounded-lg">
                            <FaBookOpen className="w-6 h-6 text-slate-700" />
                        </div>
                        <div className="flex justify-between w-2/3">
                            <div className="text-left">
                                <h1 className="text-2xl text-left font-bold">{subject.name}</h1>
                                <h1 className="text-sm text-left text-gray-500 font-bold">{subject.teacher}</h1>
                            </div>
                            <div className="flex">
                                <FaUserGraduate className="w-6 h-6 text-blue-900" />
                                <p className="pl-2">{subject.credit} credit</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mb-8">
                <button
                    onClick={handleEnroll}
                    className="btn tracking-widest text-white bg-black hover:text-black btn-lg"
                    disabled={isEnrolling}
                >
                    Enroll
                </button>
            </div>
        </div>
    );
};

export default Page;