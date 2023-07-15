import React from 'react'
import Typed from 'typed.js';
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import Reviews from '../assets/images/reviews-logo.png';





function Main() {

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
    backgroundColor: 0xf7f7f7,
    color1: 0x1f7019,
    color2: 0x148dca,
    birdSize: 2.00,
    speedLimit: 7.00,
    quantity: 2.00
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
      <div className='relative vanta font-display flex justify-center items-center h-[100dvh]'>
        <div className='z-20 flex flex-col justify-center items-center sm:gap-14'>              <p className='text-4xl h-60 sm:text-6xl leading-snug sm:leading-snug font-bold text-center w-[90%] pt-10'>Develop <span className='text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800'>AI</span> Powered <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-800 to-green-100'>Automated</span> <br /> <span ref={ele} /></p>
          <p className='text-center leading-snug w-[90%] text-2xl font-normal' >Leverage Vinera AI to <span className='font-semibold'>automate tasks</span>, eradicate manual work, and achieve <span className='font-semibold'>significant cost savings</span>.</p>
          <div className='text-center leading-snug w-[90%] text-2xl font-normal flex justify-center items-center gap-2 pt-14 sm:pt-0' >
            <p className='tracking-tight'>4.8/5.0</p>
            <img src={Reviews} className='h-7 w-7 bg-[#f7f7f7]' alt='reviews' />
            <p className='tracking-tight'>Rating</p>
            <p className='tracking-tight text-base place-self-end'>(based on client reviews)</p>
          </div>
          <div className='flex gap-10'>
            <div className='glow-button mt-20 sm:mt-0 text-xl p-3 rounded-xl h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center hover-color-change'>
              <div className='relative z-10 font-semibold'>GET STARTED</div>
            </div>
            <div className='glow-button mt-20 bg-[#f7f7f7] sm:mt-0 text-xl p-3 rounded-xl h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center border-2'>
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
