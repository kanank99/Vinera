import React from 'react'
import { useEffect } from 'react';
import Bot from '../assets/images/bot-icon.svg';
import Integrate from '../assets/images/integrate-icon.svg';
import Enhancement from '../assets/images/enhancement-icon.svg';
import Personalized from '../assets/images/personalized-icon.svg';
import Time from '../assets/images/time-icon.svg';
import Scale from '../assets/images/scale-icon.svg';

function Whyus(props) {

  useEffect(() => {
    document.getElementById("cards").onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }
  }, [])

  return (
      <div id='whyus' className={`whyusdiv flex lg:flex-col lg:gap-24 items-center justify-center relative h-[100dvh] min-h-[900px] ${props.darkMode ? "dark-testing-2" : "light-bg"}  font-display z-40`}>
        <div className='hidden lg:block lg:text-[#f7f7f7] lg:text-5xl lg:w-full'>
          <p className='font-bold'>WHY <span className='relative text-transparent bg-clip-text bg-gradient-to-b from-green-900 to-green-400 dark:from-blue-500 dark:via-[#435674] dark:to-purple-600'>CHOOSE</span> US?</p>
        </div>
        <div id='cards'>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content flex flex-col items-center'>
              <div class="card-image">
                <img src={Bot} alt='bot-logo' className='w-32' />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info flex items-center justify-center">
                  <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                    <p className='self-start text-xl font-semibold'>Custom AI Chatbots</p>
                    <p className='text-[#8a8f98] leading-snug text-left'>Our chatbots handle inquiries, requests, management, and support tasks effectively.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content flex flex-col items-center'>
              <div class="card-image">
                <img src={Integrate} alt='bot-logo' className='w-32 scale-75	' />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info flex items-center justify-center">
                  <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                    <p className='self-start text-xl font-semibold'>Efficient Web Integration</p>
                    <p className='text-[#8a8f98] leading-snug text-left'>We seamlessly integrate and deploy chatbot solutions into your existing systems and platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content flex flex-col items-center'>
              <div class="card-image">
                <img src={Enhancement} alt='bot-logo' className='w-32 scale-75' />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info flex items-center justify-center">
                  <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                    <p className='self-start text-xl text-left font-semibold'>Continued Enhancements</p>
                    <p className='text-[#8a8f98] leading-snug text-left'>We continuously improve performance and guest satisfaction through monitoring, analysis, and user feedback.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content flex flex-col items-center'>
              <div class="card-image">
                <img src={Personalized} alt='bot-logo' className='w-32 scale-75' />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info flex items-center justify-center">
                  <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                    <p className='self-start text-left text-xl font-semibold'>Personalized Experience</p>
                    <p className='text-[#8a8f98] leading-snug text-left'>Customized chatbot solutions tailored to your brand. Personalized responses for a seamless guest experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content flex flex-col items-center'>
              <div class="card-image">
                <img src={Time} alt='bot-logo' className='w-32 scale-[0.7]' />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info flex items-center justify-center">
                  <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                    <p className='self-start text-left text-xl font-semibold'>Save Time & Money</p>
                    <p className='text-[#8a8f98] leading-snug text-left'>With the help of AI Chatbots,  you can focus on more important tasks, while maximizing efficiency and achieving optimal results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content flex flex-col items-center'>
              <div class="card-image">
                <img src={Scale} alt='bot-logo' className='w-32 scale-75' />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info flex items-center justify-center">
                  <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                    <p className='self-start text-left text-xl font-semibold'>Scalable AI Tools</p>
                    <p className='text-[#8a8f98] leading-snug text-left'>Our AI tools seamlessly scale alongside your business growth, ensuring continued support and efficiency as your needs evolve.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Whyus