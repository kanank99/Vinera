import React from 'react'
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div id='calendly' className={`dark:bg-[#000212] min-h-[500px] font-display pb-20 dark-testing-middle`}>
        <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
        <h1 className="font-bold mt-20 text-[#f7f7f7] text-4xl lg:text-5xl w-full mb-10 md:mb-0">Book a Consultation Call</h1>
        <InlineWidget 
        url="https://calendly.com/vineraautomations/consultationcall"
        styles={{
            height: '900px',
          }} />
    </div>
  )
}

export default Calendly