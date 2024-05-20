"use client";
import React, { useState } from 'react';
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";
import ClassTimes from "@/components/ClassTimes";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [droppedCourses, setDroppedCourses] = useState([]);

    const subjects = [
        {
            session: "Fall 23",
            value: 0,
            courses: [
                {
                    name: "Introduction to Classical & Modern Physics",
                    code: "ICMP/MKR/406",
                    teacher: "Mihir Kumar Sir",
                    classTimes: ["Sat 8:30 AM - 10:00 AM"],
                    credit: 3
                },
                {
                    name: "Engineering Economics",
                    code: "EE/SD/406",
                    teacher: "Sudip Dey Sir",
                    classTimes: ["Sat 10:00 AM - 11:30 AM"],
                    credit: 3
                },
                {
                    name: "Physics Lab",
                    code: "PHY-LAB /MHM/505",
                    teacher: "Moinul Haque Sir",
                    classTimes: ["Sat 2:30 PM - 5:30 PM"],
                    credit: 1.5
                },
                {
                    name: "Competitive Programming Lab",
                    code: "CPL/MHN/605",
                    teacher: "Md. Hasan Sir",
                    classTimes: ["Sun 8:30 AM - 10:00 AM"],
                    credit: 1.5
                },
                {
                    name: "Electronics Devices and Circuits",
                    code: "EDC/MRRC/404",
                    teacher: "Md. Rezaur Rahman Sir",
                    classTimes: ["Sun 10:00 AM - 11:30 AM"],
                    credit: 3
                },
                {
                    name: "Data Structures Lab",
                    code: "DSL/DD/604",
                    teacher: "Dhrubajyoti Das Sir",
                    classTimes: ["Sun 11:30 AM - 1:00 PM"],
                    credit: 1.5
                },
                {
                    name: "Introduction to Classical & Modern Physics",
                    code: "ICMP/MKR/410",
                    teacher: "Mihir Kumar Sir",
                    classTimes: ["Mon 8:30 AM - 10:00 AM"],
                    credit: 3
                },
                {
                    name: "Discrete Mathmatics and Number theory",
                    code: "DMNT/FSC/410",
                    teacher: "Farhana Shirin Ma'am",
                    classTimes: ["Mon 11:30 AM - 1:00 PM"],
                    credit: 3
                },
                {
                    name: "Data Structures",
                    code: "DS/DD/410",
                    teacher: "Dhrubajyoti Das Sir",
                    classTimes: ["Mon 1:00 PM - 2:30 PM"],
                    credit: 3
                },
                {
                    name: "Data Structures",
                    code: "DS/DD/404",
                    teacher: "Dhrubajyoti Das Sir",
                    classTimes: ["Tue 8:30 AM - 10:00 AM"],
                    credit: 3
                },
                {
                    name: "Electronics Devices and Circuits Lab",
                    code: "EDCL/MRRC/506",
                    teacher: "Md. Rezaur Rahman Sir",
                    classTimes: ["Tue 11:30 AM - 1:00 PM"],
                    credit: 1.5
                },
                {
                    name: "Engineering Economics",
                    code: "EE/DD/408",
                    teacher: "Sudip Dey Sir",
                    classTimes: ["Wed 8:30 AM - 10:00 AM"],
                    credit: 3
                },
                {
                    name: "Electronics Devices and Circuits",
                    code: "EDC/MRRC/408",
                    teacher: "Md. Rezaur Rahman Sir",
                    classTimes: ["Wed 11:30 AM - 1:00 PM"],
                    credit: 3
                },
                {
                    name: "Discrete Mathmatics and Number theory",
                    code: "DMNT/FSC/408",
                    teacher: "Farhana Shirin Ma'am",
                    classTimes: ["Wed 1:00 PM - 2:30 PM"],
                    credit: 3
                }
            ]
        },
        {
            session: "Spring 24",
            value: 1,
            courses: [
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

            ]
        }
    ]

    const handleDropout = (code) => {
        setDroppedCourses([...droppedCourses, code]);
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <div className="bg-white my-12">
                <select
                    value={selectedOption}
                    onChange={handleChange}
                    className="block w-1/2 mx-auto px-4 py-2 text-xl bg-white  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 "
                >
                    <option  value="" disabled selected>Select</option>
                    {subjects.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.session}
                        </option>
                    ))}
                </select>
            </div>

            <div className=" rounded-lg w-full bg-teal-100 ">
                {
                    subjects[selectedOption] && subjects[selectedOption].courses.map((subject) => (
                        <div key={subject.code} className="flex justify-between bg-teal-50  items-center rounded-xl px-8 py-2 my-4">
                            <div className="bg-slate-200 text-center p-5 rounded-lg ">
                                <FaBookOpen className="w-6 h-6 text-slate-700"/>
                            </div>
                            <div className="flex justify-between w-2/3">
                                <div className="text-left ">
                                    <h1 className="text-2xl text-left font-bold">{subject.name}</h1>
                                    <h1 className="text-sm text-left text-gray-500 font-bold">{subject.teacher}</h1>
                                </div>
                                <div className="flex">
                                    <FaUserGraduate className="w-6 h-6 text-blue-900"/>
                                    <p className="pl-2">{subject.credit} credit</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDropout(subject.code)}
                                disabled={droppedCourses.includes(subject.code)} // Disable if course is dropped
                                className='disabled:text-red-500 bg-black text-white btn'
                            >
                                {droppedCourses.includes(subject.code) ? 'Pending' : 'Drop out'}
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;
