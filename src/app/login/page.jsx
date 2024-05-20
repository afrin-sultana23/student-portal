"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const Page = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error for the field that is being changed
        setErrors({ ...errors, [name]: '' });
    };

    const validateInputField = (fieldName, value) => {
        let error = '';

        switch (fieldName) {
            case 'studentId':
                if (!value.trim()) {
                    error = 'Student ID is required';
                } else if (!/^\d+$/.test(value)) {
                    error = 'Student ID must contain only numbers';
                }
                break;
            case 'password':
                if (!value.trim()) {
                    error = 'Password is required';
                } else if (value.length < 6) {
                    error = 'Password must be at least 6 characters long';
                }
                break;
            default:
                break;
        }

        return error;
    };

    const validateSubmission = () => {
        const errors = {};

        // Student ID validation
        if (formData.studentId !== '1047') {
            errors.studentId = 'Invalid Student ID';
        }

        // Password validation
        if (formData.password !== 'afrinpuc') {
            errors.password = 'Invalid Password';
        }

        return errors;
    };

    const validateForm = () => {
        const errors = {};

        // Student ID validation
        const studentIdError = validateInputField('studentId', formData.studentId);
        if (studentIdError) {
            errors.studentId = studentIdError;
        }

        // Password validation
        const passwordError = validateInputField('password', formData.password);
        if (passwordError) {
            errors.password = passwordError;
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        let errors = validateForm();
        if (Object.keys(errors).length === 0) {
            errors = validateSubmission();
        }
        if (Object.keys(errors).length === 0) {
            // Form is valid, you can submit the data here
            console.log('Form submitted:', formData);
            router.push('/home');
        } else {
            setErrors(errors);
            setIsSubmitting(false);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateInputField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-[30rem] shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="mx-auto lg:text-left">
                                <Image src="/puc_logo.webp" width={150} height={150} alt="Logo" className="mx-auto" />
                                <h1 className="text-2xl text-center text-slate-900 font-semibold tracking-wider">Student Portal</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Student Id</span>
                                </label>
                                {errors.studentId && <span className="text-red-600 mb-2">{errors.studentId}</span>}
                                <input
                                    type="text"
                                    name="studentId"
                                    placeholder="student Id"
                                    className={`input input-bordered ${errors.studentId ? 'input-error' : ''}`}
                                    value={formData.studentId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                {errors.password && <span className="text-red-600 mb-2">{errors.password}</span>}
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn bg-black text-white tracking-widest hover:text-black"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Login'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
