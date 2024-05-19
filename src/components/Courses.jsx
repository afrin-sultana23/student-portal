"use client"
import React from 'react';
import {FaBookOpen} from "react-icons/fa";

const Courses = () => {

    const courses = [
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


    return (
        <div>
            <div className="bg-teal-100 rounded-lg w-full my-24 p-6">
                <div className="flex justify-between items-center bg-teal-50 rounded-xl px-8 py-2 my-4">
                    <div className="bg-slate-200 text-center p-5 rounded-lg">
                        <FaBookOpen className="w-6 h-6 text-slate-700"/>
                    </div>
                    <h1 className="text-2xl font-bold">Object Oriented programming</h1>
                    <button className="btn bg-black text-white hover:text-black">Drop out</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;