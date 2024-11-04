import React, { useEffect, useState } from 'react';

function DisplayPart({ part }) {
    const [active,setactive]=useState(false);
    useEffect(()=>{
        if(part.id==0)
        {
            setactive(true);
        }
    },[])

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <div className="flex items-center justify-between border-b pb-3 mb-3">
        <div>
          <h2 className="text-lg font-semibold">Part {part.id + 1}</h2>
          <p className="text-xl font-bold text-gray-800">{part.title}</p>
        </div>
        <div className="lg:flex lg:flex-row flex-col items-center space-x-4 text-gray-600">
          <div className="flex items-center space-x-1">
            <img src='/clock.png' className='h-5 w-5'/>
            <span>{part.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src='/bar.png' className='h-5 w-5'/>
            <span>{part.difficulty}</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src='/page.png' className='h-5 w-5'/>
            <span>{part.points}</span>
          </div>
          <div onClick={()=>{
            setactive(!active);
          }} className="flex items-center space-x-1 p-3 bg-blue-200 rounded-lg">
            {active && <img src='/arrow.png' className='h-2 w-4'/>}
            {!active && <img src='/arrowdown.png' className='h-2 w-4'/>}
          </div>
        </div>
      </div>
      <span className="flex flex-row-reverse px-2 py-1 rounded-lg text-sm text-gray-600 mb-4">{part.completion}% Completed</span>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${part.completion}%`}}
        ></div>
      </div>
      
    {active && 
      <div className="space-y-2">
        {part.content.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
            <div className="flex">
              <img className="h-5 w-5" src={item.type === 'video' ? '/video.png' :
                 item.type === 'article' ? '/questionmark.png' :
                 item.type === 'quiz' ? '/questionmark.png' :
                 item.type === 'coding' ? '/code.png' :
                 '/page.png'}>
              </img>
              <p className="px-2 text-gray-800 font-medium">{item.title}</p>
            </div>
            <div className="text-gray-500">{item.duration}</div>
          </div>
        ))}
      </div>}   
    </div>
  );
}

export default DisplayPart;
