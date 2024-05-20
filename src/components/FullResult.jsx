"use client";
import { useState } from "react";


const FullResult = () => {
    const [name, setName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
        setShowResult(true);
    };

    return (
        <div className="py-6 px-[43rem] bg-white shadow-lg mx-auto rounded-lg">

            <div className="mb-4 mx-auto">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
                    placeholder="Student ID"
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                />
                <button
                    className="btn bg-black text-white py-2 px-4 rounded-md hover:text-black "
                    onClick={handleButtonClick}
                >
                    Show Result
                </button>
            </div>
            {showResult && (
                <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 py-2 px-4">Course</th>
                        <th className="border border-gray-300 py-2 px-4">Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-gray-100">
                        <td className="border border-gray-300 py-2 px-4">Introduction to Programming</td>
                        <td className="border border-gray-300 py-2 px-4">A</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-gray-300 py-2 px-4">Data Structures and Algorithms</td>
                        <td className="border border-gray-300 py-2 px-4">A-</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-gray-300 py-2 px-4">Database Management Systems</td>
                        <td className="border border-gray-300 py-2 px-4">B+</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-gray-300 py-2 px-4">Web Development</td>
                        <td className="border border-gray-300 py-2 px-4">B</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-gray-300 py-2 px-4">Software Engineering</td>
                        <td className="border border-gray-300 py-2 px-4">A+</td>
                    </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FullResult;