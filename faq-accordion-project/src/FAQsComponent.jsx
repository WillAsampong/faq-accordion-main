import React, { useState } from 'react'
import plusIcon from "../assets/images/icon-plus.svg"
import minusIcon from "../assets/images/icon-minus.svg"

const FAQsComponent = ({question, answer, isLast = false}) => {
    const [expanded, setExpanded] = useState(false);

  return (
    <div  className={`py-3 ${!isLast ? 'border-b border-gray-200' : ''}`}>
        <div className=' flex justify-between items-center' onClick={() => setExpanded(!expanded)}>
            <div className='w-5/6 cursor-pointer'>
                <h2 className='text-purple-950 hover:text-purple-600 text-md font-semibold'>{question}</h2>
            </div>
            <button className='cursor-pointer'>
                <img src={expanded ? minusIcon : plusIcon} alt="" className='w-7 h-7'/>
            </button>
        </div>
         
            <div 
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${expanded ? 'max-h-40' : 'max-h-0'}`}
            >
                <div className="mt-2">
                    <p className='text-gray-500 text-sm md:text-base pr-6'>{answer}</p>
                </div>
            </div>

    </div>
  )
}

export default FAQsComponent
