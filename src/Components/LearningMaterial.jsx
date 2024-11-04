import React, { useState } from 'react';
import courseContent from './CourseContent';
import DisplayChapter from './DisplayChapter';

function LearningMaterial() {
    const [currchapter, setcurrchapter] = useState(1);
    const [hoveredChapter, setHoveredChapter] = useState(null);

    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            <div className="w-1/4 bg-white border-r border-gray-200 p-4">
                {courseContent.chapters.map((c) => (
                    <div 
                        key={c.id}  
                        onClick={() => setcurrchapter(c.id)}
                        onMouseEnter={() => setHoveredChapter(c.id)} 
                        onMouseLeave={() => setHoveredChapter(null)} 
                        className={`lg:flex justify-between w-full text-left px-4 py-3 rounded-lg mb-2 transition ${
                            currchapter === c.id 
                                ? 'bg-blue-200' 
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                        <span className="font-bold">{c.title}</span>
                        {(hoveredChapter === c.id || currchapter==c.id) && (
                            <div className='flex'>
                            <img src='/clock.png' className='h-5 w-5'/>
                            <span className="text-sm text-gray-500 px-1">
                                {c.duration}
                            </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex-1 p-6">
                <DisplayChapter chapter={courseContent.chapters[currchapter - 1]} />
            </div>
        </div>
    );
}

export default LearningMaterial;
