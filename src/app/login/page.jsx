import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Page = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-[30rem] shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="mx-auto lg:text-left">
                                <Image src="/puc_logo.webp"
                                       width={150}
                                       height={150} alt="Logo" className="mx-auto" />
                                <h1 className="text-2xl text-center text-slate-900 font-semibold tracking-wider">Student Portal</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Student Id</span>
                                </label>
                                <input type="text" placeholder="student Id" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                       required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <Link href="/home/" className="btn bg-black text-white tracking-widest hover:text-black">Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;