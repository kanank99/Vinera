import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { InlineWidget } from "react-calendly";
import { useLocation } from "react-router-dom";
import VineraTransparent from '../assets/images/vinera-purple-transparent.png';

function Calendly() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;
  const breakpoint2 = 1250;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const location = useLocation();

  return (
    <div id='calendly' className={`dark:bg-[#000212] min-h-[1100px] max-w-[1008px] m-auto font-display pb-20 flex-col items-center justify-center ${location.pathname === '/' ? 'dark-testing-middle' : 'dark-testing-middle-calendly-automations'}`}>
      <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
      <h1 className="font-bold mt-20 text-[#f7f7f7] text-4xl lg:text-5xl w-full mb-10">Book a <span className='text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-[#455eb5] dark:to-purple-600'>Discovery</span> Call</h1>
      <p className="text-gray-400 text-xl lg:text-2xl w-full mb-5 lg:mb-0">Let's focus on your challenges and let's discover together if we are a good fit!</p>
      <div className='relative min-[800px]:w-full p-[40px] pt-[25px] min-[800px]:mt-[200px] pricing-card-background-main min-[1008px]:border border-gray-600 min-[1008px]:rounded-xl min-[800px]:h-[420px] flex flex-col items-center justify-center min-[800px]:block'>
        <img className='hidden min-[800px]:block w-[30px] scale-[2.6] mb-2 min-[800px]:-translate-x-4 min-[800px]:-translate-y-1' src={VineraTransparent} alt="logo" />
        <h3 class="hidden min-[800px]:block min-[800px]:text-left text-3xl text-white mb-2 font-semibold">Get in touch</h3>
        <p className='hidden min-[800px]:block min-[800px]:text-left min-[800px]:w-[40%] text-[#b4bcd0] text-md'>See how Vinera AI can help automate your most time-consuming challenges. We will:</p>
        <ul class="hidden min-[800px]:block mb-8 space-y-2 text-left mt-8">
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <p className='text-[#b4bcd0]'>Deep dive into <span className='text-white font-semibold'>your business</span></p>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg class="self-start translate-y-[0.14rem] flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <p className='text-[#b4bcd0]'>Map out biggest <span className='text-white font-semibold'>challenges</span></p>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg class="self-start translate-y-[0.14rem] flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <p className='text-[#b4bcd0]'>Determine optimal <span className='text-white font-semibold'>solutions</span></p>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <p className='text-[#b4bcd0]'>Calculate a <span className='text-white font-semibold'>potential ROI</span></p>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <p className='text-[#b4bcd0]'>Understand your <span className='text-white font-semibold'>processes</span></p>
          </li>
        </ul>
        <div className='min-[800px]:absolute -top-[100px] right-[4rem]'>
          {/* <div className='absolute top-0 left-0 w-full h-full z-20 rounded-xl bg-black'></div> */}
          {width >= breakpoint2 ?
            <InlineWidget
              url="https://calendly.com/vineraautomations/discoverycall?hide_event_type_details=1"
              styles={{
                height: '720px',
                width: '500px',
              }} />
            : (width >= breakpoint && width < breakpoint2 ?
              <InlineWidget
                url="https://calendly.com/vineraautomations/discoverycall?hide_event_type_details=1"
                styles={{
                  height: '720px',
                  width: '400px',
                }} />
              :
              <InlineWidget
                url="https://calendly.com/vineraautomations/discoverycall?hide_event_type_details=1"
                styles={{
                  height: '600px',
                  width: '280px',
                }} />
            )
          }
        </div>

      </div>
    </div>
  )
}

export default Calendly