import React, { useState } from 'react'
import DisplayPart from './DisplayPart';

function DisplayChapter({chapter}){
    return (
        <>
            {chapter.parts.map((p)=>(
                <div key={p.id} className='p-2'>
                    <DisplayPart part={p}/>
                </div>
            ))}
        </>
    )
}

export default DisplayChapter
