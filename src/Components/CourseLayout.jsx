import React, { useState } from 'react';
import MentorSessions from './MentorSessions';
import LearningMaterial from './LearningMaterial';
import HowItWorks from './HowItWorks';

function CourseLayout() {
    const [subsession, setsubsession] = useState(1);

    return (
        <>  
            <div className="flex flex-col md:flex-row justify-between items-center text-black py-4 px-4 md:px-8 shadow-md">
                <div className="flex text-sm rounded-lg space-x-6 bg-blue-100 p-2 mb-4 md:mb-0">
                    <div 
                        onClick={() => setsubsession(0)} 
                        className={`flex p-1 rounded-lg cursor-pointer font-medium border border-blue-500 ${subsession === 0 ? 'bg-white' : ''}`}
                    >
                        <img className='h-4 w-4' src='/session.png' alt="Mentor Sessions" />
                        <span className='mx-2 hover:font-bold'>Mentor Sessions</span>
                    </div>
                    <div 
                        onClick={() => setsubsession(1)} 
                        className={`flex p-1 rounded-lg cursor-pointer font-medium border border-blue-500 ${subsession === 1 ? 'bg-white' : ''}`}
                    >
                        <img className='h-4 w-4' src='/bag.png' alt="Learning Material" />
                        <span className='mx-2 hover:font-bold'>Learning Material</span>
                    </div>
                </div>
                <div 
                    onClick={() => setsubsession(2)}  
                    className="flex cursor-pointer font-medium border-2 p-2 rounded-lg border-blue-200"
                >
                    <img className='h-5 w-5 md:h-5 md:w-4' src='/i.png' alt="How it works" />
                    <span className='mx-2 hover:font-bold text-md'>How it works</span>
                </div>
            </div>
            {subsession === 0 && <MentorSessions />}
            {subsession === 1 && <LearningMaterial />}
            {subsession === 2 && <HowItWorks />}
        </>
    );
}

export default CourseLayout;
