import React from 'react';
import Link from "next/link";
import FullResult from "@/components/FullResult";
import GradeTable from "@/components/GradeTable";

const Page = () => {
    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold my-5 text-right justify-center">Result</h1>

            </div>
            <Link href="/home/" className="btn btn-circle bg-gray-400 absolute top-7 right-10 ">X</Link>
            <FullResult></FullResult>
            <div className="py-4"></div>
            <GradeTable></GradeTable>

        </div>
    );
};

export default Page;