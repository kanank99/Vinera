import React from 'react'
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div id='calendly' className={`dark:bg-[#000212] min-h-[500px] font-display pb-20 dark-testing-middle`}>
      <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
      <h1 className="font-bold mt-20 text-[#f7f7f7] text-4xl lg:text-5xl w-full mb-10">Book a <span className='text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-[#455eb5] dark:to-purple-600'>Discovery</span> Call</h1>
      <p className="text-gray-400 text-xl lg:text-2xl w-full mb-5 md:mb-0">Let's focus on your challenges and let's discover together if we are a good fit!</p>
      <InlineWidget
        url="https://calendly.com/vineraautomations/discoverycall"
        styles={{
          height: '900px',
        }} />
    </div>
  )
}

export default Calendly