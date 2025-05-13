import React, { useState } from 'react'
import plusIcon from "../assets/images/icon-plus.svg"
import minusIcon from "../assets/images/icon-minus.svg"

const FAQsComponent = ({question, answer}) => {
    const [expanded, setExpanded] = useState(false);

  return (
    <div className='border-b border-gray-200 p-4'>
        <div className=' flex justify-between items-center' onClick={() => setExpanded(!expanded)}>
            <div className='w-5/6 cursor-pointer'>
                <h2 className='text-purple-950 hover:text-purple-600 text-md font-semibold'>{question}</h2>
            </div>
            <button>
                <img src={expanded ? minusIcon : plusIcon} alt="" className='w-7 h-7'/>
            </button>
        </div>
        {
            expanded && 
            <div className="mt-2 transition-all duration-300 ">
                <p className='text-gray-400'>{answer}</p>
            </div>
        }
    </div>
  )
}

export default FAQsComponent
