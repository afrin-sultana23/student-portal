import React from 'react';

const GradeTable = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-black text-white">
                    <th className="border border-gray-300 py-2 px-4">Numerical Grade</th>
                    <th className="border border-gray-300 py-2 px-4">Letter Grade</th>
                    <th className="border border-gray-300 py-2 px-4">Grade Point</th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-gray-100">
                    <td className="border border-gray-300 py-2 px-4">80% and above</td>
                    <td className="border border-gray-300 py-2 px-4">A+</td>
                    <td className="border border-gray-300 py-2 px-4">(A Plus) 4.00</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 py-2 px-4">75% to less than 80%</td>
                    <td className="border border-gray-300 py-2 px-4">A</td>
                    <td className="border border-gray-300 py-2 px-4">(A Regular) 3.75</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border border-gray-300 py-2 px-4">70% to less than 75%</td>
                    <td className="border border-gray-300 py-2 px-4">A-</td>
                    <td className="border border-gray-300 py-2 px-4">(A Minus) 3.50</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 py-2 px-4">65% to less than 70%</td>
                    <td className="border border-gray-300 py-2 px-4">B+</td>
                    <td className="border border-gray-300 py-2 px-4">(B Plus) 3.25</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border border-gray-300 py-2 px-4">60% to less than 65%</td>
                    <td className="border border-gray-300 py-2 px-4">B</td>
                    <td className="border border-gray-300 py-2 px-4">(B Regular) 3.00</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 py-2 px-4">55% to less than 60%</td>
                    <td className="border border-gray-300 py-2 px-4">B-</td>
                    <td className="border border-gray-300 py-2 px-4">(B Minus) 2.75</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border border-gray-300 py-2 px-4">50% to less than 55%</td>
                    <td className="border border-gray-300 py-2 px-4">C+</td>
                    <td className="border border-gray-300 py-2 px-4">(C Plus) 2.50</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 py-2 px-4">45% to less than 50%</td>
                    <td className="border border-gray-300 py-2 px-4">C</td>
                    <td className="border border-gray-300 py-2 px-4">(C Regular) 2.25</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border border-gray-300 py-2 px-4">40% to less than 45%</td>
                    <td className="border border-gray-300 py-2 px-4">D</td>
                    <td className="border border-gray-300 py-2 px-4">2.00</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 py-2 px-4">Less than 40%</td>
                    <td className="border border-gray-300 py-2 px-4">F</td>
                    <td className="border border-gray-300 py-2 px-4">0.00</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border border-gray-300 py-2 px-4"></td>
                    <td className="border border-gray-300 py-2 px-4">I</td>
                    <td className="border border-gray-300 py-2 px-4">Incomplete</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 py-2 px-4"></td>
                    <td className="border border-gray-300 py-2 px-4">W</td>
                    <td className="border border-gray-300 py-2 px-4">Withdrawn</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable;
