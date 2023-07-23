import React from 'react'
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div className={`dark:bg-[#000212] min-h-[500px] font-display pb-20`}>
        <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
        <h1 className="font-bold mb-4 mt-20 text-[#f7f7f7] text-4xl lg:text-5xl w-full">Book a Consultation Call</h1>
        <InlineWidget 
        url="https://calendly.com/vineraautomations/consultationcall"
        styles={{
            height: '900px',
          }} />
    </div>
  )
}

export default Calendly