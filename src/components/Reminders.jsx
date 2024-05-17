"use client"
import React, { useState } from 'react';
import {FaPlus, FaClock} from 'react-icons/fa';
import {TiDelete} from "react-icons/ti";

const Reminders = () => {
    const [reminders, setReminders] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [newReminder, setNewReminder] = useState('');

    const handleAddReminder = () => {
        setShowInput(true);
    };

    const handleInputChange = (e) => {
        setNewReminder(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        if (newReminder.trim()) {
            setReminders([...reminders, { id: Date.now(), title: newReminder, date: '20 May 2024, Friday' }]);
            setNewReminder('');
            setShowInput(false);
        }
    };

    const handleDelete = (id) => {
        setReminders(reminders.filter((reminder) => reminder.id !== id));
    };

    return (
        <div className="my-10">
            <div className="flex justify-between px-3 py-3">
                <h1 className="text-2xl font-bold">Reminder</h1>
                <FaPlus className="h-8 w-8 text-rose-500 cursor-pointer" onClick={handleAddReminder}/>
            </div>
            {showInput && (
                <form onSubmit={handleInputSubmit} className="my-4">
                    <input
                        type="text"
                        value={newReminder}
                        onChange={handleInputChange}
                        placeholder="Enter a new reminder"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                </form>
            )}
            {reminders.map((reminder) => (
                <div key={reminder.id}
                     className="flex items-center justify-between px-5 rounded-2xl py-3 shadow-lg mt-5">
                    <div className="flex items-center space-x-3">
                        <div className="bg-red-200 text-center p-5 rounded-lg">
                            <FaClock className="w-6 h-6 text-rose-500"/>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{reminder.title}</h1>
                            <p className="text-sm text-gray-400">{reminder.date}</p>
                        </div>
                    </div>
                    <TiDelete className="h-10 w-10 text-black cursor-pointer"
                              onClick={() => handleDelete(reminder.id)}/>
                </div>
            ))}
            <div className="flex items-center justify-between px-5 rounded-2xl py-3 shadow-lg mt-5">
                <div className="flex items-center space-x-3">
                    <div className="bg-red-200 text-center p-5 rounded-lg">
                        <FaClock className="w-6 h-6 text-rose-500"/>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Eng - Listening test</h1>
                        <p className="text-sm text-gray-400">24 May 2024,Friday</p>
                    </div>
                </div>
                <TiDelete className="h-10 w-10 text-black cursor-pointer" onClick={handleDelete}/>
            </div>
            <div className="flex items-center justify-between px-5 rounded-2xl py-3 shadow-lg mt-5">
                <div className="flex items-center space-x-3">
                    <div className="bg-red-200 text-center p-5 rounded-lg">
                        <FaClock className="w-6 h-6 text-rose-500"/>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Dept - Class test 1</h1>
                        <p className="text-sm text-gray-400">22 May 2024,Wednesday</p>
                    </div>
                </div>
                <TiDelete className="h-10 w-10 text-black cursor-pointer" onClick={handleDelete}/>
            </div>
        </div>
    );
};

export default Reminders;