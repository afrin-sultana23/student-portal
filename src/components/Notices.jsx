"use client"
import React, {useState} from 'react';

const Page = () => {
    const notices =  [

        {
            title: "Reminder: Tuition Fee Payment Deadline",
            date: "05/30/2024",
            content: "This is a reminder to all students to pay their tuition fees by the specified deadline to avoid late fees.",
            category: "Payment"
        },
        {
            title: "Change in Academic Calendar",
            date: "06/05/2024",
            content: "Please note that there has been a change in the academic calendar. Refer to the updated schedule for details.",
            category: "Important"
        },
        {
            title: "New routine published !",
            date: "06/10/2024",
            content: "New semester routine is published by section office",
            category: "New"
        },
        {
            title: "Important Announcement Regarding Graduation Ceremony",
            date: "05/25/2024",
            content: "All graduating students are requested to attend a mandatory meeting regarding the upcoming graduation ceremony.",
            category: "Important"
        },
        {
            title: "Scholarship Opportunities for Undergraduate Students",
            date: "06/01/2024",
            content: "The university is offering scholarships to undergraduate students based on academic merit. Apply now!",
            category: "New"
        },
        {
            title: "Invitation to Alumni Reunion Event",
            date: "06/15/2024",
            content: "All alumni are invited to attend the annual reunion event. Join us for a memorable evening of reconnecting and reminiscing.",
            category: "New"
        },
        {
            title: "Faculty Meeting Agenda",
            date: "06/03/2024",
            content: "There will be a faculty meeting to discuss important matters. All faculty members are requested to attend.",
            category: "Important"
        },
        {
            title: "Career Fair Registration Deadline Extended",
            date: "06/02/2024",
            content: "Good news! The registration deadline for the career fair has been extended. Register now to secure your spot.",
            category: "Payment"
        },
        {
            title: "Student Council Elections: Call for Candidates",
            date: "05/28/2024",
            content: "Nominations are now open for the upcoming student council elections. Be a leader and represent your peers.",
            category: "New"
        },
        {
            title: "Reminder: Library Book Returns",
            date: "05/29/2024",
            content: "All borrowed library books must be returned by the specified date to avoid fines. Please return them promptly.",
            category: "Payment"
        },
        {
            title: "Notice Regarding Campus Maintenance",
            date: "06/07/2024",
            content: "Maintenance work will be conducted on campus buildings. Please be advised of potential disruptions during this period.",
            category: "Important"
        },
        {
            title: "Internship Opportunities for Graduating Students",
            date: "06/12/2024",
            content: "Attention graduating students! Explore internship opportunities available exclusively for you. Apply now to gain valuable experience.",
            category: "New"
        },
        {
            title: "Financial Aid Application Deadline",
            date: "06/20/2024",
            content: "The deadline to apply for financial aid for the upcoming academic year is approaching. Submit your applications before it's too late.",
            category: "Payment"
        },
        {
            title: "Academic Advising Sessions",
            date: "06/08/2024",
            content: "Academic advising sessions will be held for all students. Schedule your appointment to discuss your academic goals and progress.",
            category: "Important"
        },
        {
            title: "Library Extended Hours During Finals Week",
            date: "06/25/2024",
            content: "The library will have extended hours during finals week to accommodate students' study needs. Take advantage of this opportunity.",
            category: "Important"
        },
        {
            title: "Student Research Symposium",
            date: "06/15/2024",
            content: "Showcase your research at the student research symposium. Present your findings and contribute to the academic community.",
            category: "New"
        },
        {
            title: "Parking Permit Renewal Reminder",
            date: "06/10/2024",
            content: "Renew your parking permit for the upcoming academic year to ensure uninterrupted access to campus parking facilities.",
            category: "Payment"
        },
        {
            title: "Research Grant Funding Opportunity",
            date: "06/17/2024",
            content: "Apply for research grant funding to support your innovative research projects. Funding is available for eligible applicants.",
            category: "New"
        },
        {
            title: "Notice Regarding Campus Safety Measures",
            date: "06/05/2024",
            content: "The university has implemented additional safety measures on campus. Please familiarize yourself with these measures for your safety.",
            category: "Important"
        },
        {
            title: "Summer Internship Fair",
            date: "06/19/2024",
            content: "Explore internship opportunities at the summer internship fair. Network with employers and find the perfect opportunity for you.",
            category: "New"
        },
        {
            title: "Housing Application Deadline",
            date: "06/28/2024",
            content: "Apply for university housing for the upcoming academic year before the deadline. Secure your on-campus accommodation today.",
            category: "Payment"
        },
        {
            title: "Graduate School Information Session",
            date: "06/10/2024",
            content: "Attend the graduate school information session to learn about various graduate programs and admission requirements.",
            category: "New"
        },
        {
            title: "Study Abroad Information Session",
            date: "06/20/2024",
            content: "Interested in studying abroad? Attend the information session to learn about exciting opportunities.",
            category: "New"
        },
        {
            title: "Student Leadership Conference",
            date: "06/29/2024",
            content: "Calling all student leaders! Attend the leadership conference to develop your leadership skills and network with peers.",
            category: "New"
        },
        {
            title: "Summer Sports Camp Registration",
            date: "06/22/2024",
            content: "Sign up for the summer sports camp and improve your athletic skills while having fun!",
            category: "New"
        },
        {
            title: "Reminder: Student ID Card Renewal",
            date: "06/24/2024",
            content: "Ensure your student ID card is up-to-date. Renew your card at the designated office before it expires.",
            category: "Payment"
        },
        {
            title: "Faculty Development Workshop",
            date: "06/23/2024",
            content: "Faculty members are invited to attend the development workshop to enhance teaching and research skills.",
            category: "Important"
        },
        {
            title: "Career Development Seminar Series",
            date: "06/21/2024",
            content: "Participate in the career development seminar series to gain insights into various career paths and opportunities.",
            category: "New"
        },
        {
            title: "Summer Research Internship Opportunity",
            date: "06/26/2024",
            content: "Apply for the summer research internship program and gain hands-on experience in your field of study.",
            category: "New"
        },
        {
            title: "Reminder: Course Evaluation Surveys",
            date: "06/29/2024",
            content: "Complete your course evaluation surveys to provide valuable feedback on your learning experience.",
            category: "Important"
        },
        {
            title: "International Student Orientation",
            date: "06/30/2024",
            content: "Welcome to all international students! Attend the orientation session to learn about campus resources and services.",
            category: "New"
        },
        {
            title: "Graduation Rehearsal Information",
            date: "06/28/2024",
            content: "All graduating students must attend the rehearsal session for the upcoming graduation ceremony. Details provided.",
            category: "Important"
        },
        {
            title: "Summer Study Abroad Programs",
            date: "06/30/2024",
            content: "Embark on an enriching academic journey with our summer study abroad programs. Discover new cultures and expand your horizons.",
            category: "New"
        }
// Add more notices as needed...
    ];

    // Legend mapping notice types to background colors
    const legend = {
        New: "cyan",
        Payment: "green",
        Important: "rose",
        // Add more types and colors as needed
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const openModal = (notice) => {
        setSelectedNotice(notice);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderNotices = () => {
        return notices.map((notice, index) => (
            <div key={index} onClick={() => openModal(notice)}
                 className={`w-full bg-${legend[notice.category]}-50 p-2 rounded-lg group my-2 mr-1  hover:bg-${legend[notice.category]}-100 cursor-pointer`}>
                <div className="flex justify-between">
                    <div key={index+"da"} className={`w-fit h-full rounded bg-${legend[notice.category]}-500 px-2`}>{notice.category}</div>
                    <div>{notice.date}</div>
                </div>
                <h1 className="text-xl font-semibold text-cyan-950 truncate">{notice.title}</h1>
                <span className="truncate-text text-sm text-cyan-700">{notice.content}</span>
                <div className="flex justify-end">
          <span
              className="text-right text-cyan-700 group-hover:text-black group-hover:underline text-sm">Read more</span>
                </div>
            </div>
        ));
    };

    const Modal = (color) => {
        return (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 text-black">
                <div className="bg-white p-4  rounded-lg">
                    <div className='flex justify-between'>
                        <h1 className="text-2xl font-semibold mb-2">{selectedNotice.title}</h1>
                        <p className="text-lg  text-gray-800">{selectedNotice.date}</p>
                    </div>

                    <p className="text-lg text-gray-800 mt-2">{selectedNotice.content}</p>
                    <button onClick={closeModal} className={`mt-4 bg-${legend[selectedNotice.category]}-500  btn btn-circle hover:bg-${legend[selectedNotice.category]}-600`}>X</button>
                </div>
            </div>
        );
    };

    return (
        <div>
            {isModalOpen && <Modal />}
            <div className="w-[40rem] h-[24rem] mx-auto my-auto bg-white text-black p-2">
                <h1 className="text-xl font-medium py-1">NOTICES</h1>
                <div className="w-full h-[85%] overflow-y-auto  overflow-x-hidden  thinbar">
                    {renderNotices()}
                </div>
            </div>
        </div>
    );
};
export default Page;

