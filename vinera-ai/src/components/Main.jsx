import React from 'react'
import Typed from 'typed.js';
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import StarDay from '../assets/images/star-day-icon.svg';
import StarNight from '../assets/images/star-night-icon.svg';

function Main(props) {

  // Vanta.js
  const [vantaEffect, setVantaEffect] = React.useState(0)
  const vantaRef = React.useRef(null)
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: vantaRef.current,
        birdSize: 2,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    // if props.darkMode is true, change background color to black, else change to white
    backgroundColor: props.darkMode ? 0x000212 : 0xf7f7f7,
    color1: 0x1f7019,
    color2: 0x148dca,
    birdSize: 5.00,
    speedLimit: 7.00,
    quantity: 1.00
  })



  // Typed.js
  const ele = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(ele.current, {
      strings: ['Chatbots.^1000', 'Content Generation.^1000', 'Marketing Campaigns.^1000', 'Customer Service.^1000', 'Solutions.'],
      typeSpeed: 90,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='overflow-hidden	 relative vanta font-display flex justify-center items-center h-[100dvh] min-h-[100dvh] dark:text-[#f7f7f7] dark-testing'>
        <div className='z-20 flex flex-col justify-center items-center sm:gap-14'>              <p className='text-4xl h-60 sm:text-6xl leading-snug sm:leading-snug font-bold text-center w-[90%] pt-10 dark:text-[#f7f7f7]'>Develop <span className='text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-blue-500 dark:via-[#435674E6] dark:to-purple-600'>AI</span> Powered <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-800 to-green-100 dark:from-blue-500 dark:via-[#435674E6] dark:to-purple-600'>Automated</span> <br /> <span ref={ele} /></p>
          <p className='text-center leading-snug w-[90%] text-2xl font-normal dark:text-[#b4bcd0]' >Leverage Vinera AI to <span className='font-semibold dark:text-[#f7f7f7]'>automate tasks</span>, eradicate manual work, and achieve <span className='font-semibold dark:text-[#f7f7f7]'>significant cost savings</span>.</p>
          <div className='text-center leading-snug w-[90%] text-2xl font-normal flex justify-center items-center gap-2 pt-14 sm:pt-0' >
            <p className='tracking-tight'>4.8/5.0</p>
            {/* if props.darkMode is true, change icon to star-night, else change to star-day */}
            {props.darkMode ? <img src={StarNight} className='h-7 w-7 bg-transparent' alt='reviews-icon' /> : <img src={StarDay} className='h-7 w-7 bg-transparent' alt='reviews-icon' />}
            <p className='tracking-tight'>Rating</p>
            <p className='tracking-tight text-base place-self-end dark:text-[#b4bcd0]'>(based on client reviews)</p>
          </div>
          <div className='flex gap-10'>
            <div className='glow-button mt-20 sm:mt-0 text-xl p-3 rounded-xl h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center bg-gradient-to-tr from-[#15803d] to-[#dcfce7] dark:text-[#f7f7f7] dark:from-blue-500 dark:via-[#4356746E] dark:to-purple-600'>
              <div className='relative z-10 font-semibold'>GET STARTED</div>
            </div>
            <div className='glow-button mt-20 bg-transparent sm:mt-0 text-xl p-3 rounded-xl h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center border-2'>
              <div className='relative z-10 font-semibold'>Learn More</div>
            </div>
          </div>

        </div>
        <div className='absolute h-full w-full' id='vanta' ref={vantaRef}></div>
      </div>
    </>
  )
}

export default Main
