import React from 'react'
import Typed from 'typed.js';
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import StarDay from '../assets/images/star-day-icon.svg';
import StarNight from '../assets/images/star-night-icon.svg';
import { PopupButton } from 'react-calendly'


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
    backgroundColor: props.darkMode ? 0x000212 : 0xfdfbfb,
    color1: props.darkMode ? 0x3f3ecf : 0x1f7019,
    color2: props.darkMode ? 0x240087 : 0x148dca,
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
      {props.darkMode ?
        <div className='absolute top-0 left-0 w-full h-full z-10 dark-testing-top opacity-70'></div>
        : null}
      <div id='main' className='overflow-hidden	 vanta font-display flex justify-center items-center h-[100dvh] min-h-[100dvh] dark:text-[#f7f7f7]'>
        <div className='z-20 flex flex-col justify-center items-center sm:gap-14'> <p className='text-4xl h-60 sm:text-6xl leading-snug sm:leading-snug font-bold text-center w-[90%] dark:text-[#f7f7f7]'>Develop <span className='text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-[#455eb5] dark:to-purple-600'>AI</span> Powered <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-800 to-green-100 dark:from-[#455eb5] dark:to-purple-600'>Automated</span> <br /> <span ref={ele} /></p>
          <p className=' pt-5 md:pt-0 text-center leading-snug w-[90%] text-2xl font-normal dark:text-[#b4bcd0]' >Leverage Vinera AI to <span className='font-semibold dark:text-[#f7f7f7]'>automate tasks</span>, eradicate manual work, and achieve <span className='font-semibold dark:text-[#f7f7f7]'>significant cost savings</span>.</p>
          <div className='text-center leading-snug w-[90%] text-2xl font-normal flex justify-center items-center gap-2 pt-5 sm:pt-0' >
            <div class="flex -space-x-2">
              <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-[#561eff]" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt='person-1' />
              <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-[#561eff]" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="person-2" />
              <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-[#561eff]" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="person-3" />
              <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-[#561eff]" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="person-4" />
            </div>
            <p className='tracking-tight'>4.8/5.0</p>
            {/* if props.darkMode is true, change icon to star-night, else change to star-day */}
            {props.darkMode ? <img src={StarNight} className='h-7 w-7 bg-transparent' alt='reviews-icon' /> : <img src={StarDay} className='h-7 w-7 bg-transparent' alt='reviews-icon' />}
            <p className='tracking-tight'>Rating</p>
            <p className='hidden md:block tracking-tight text-base place-self-end dark:text-[#b4bcd0]'>(based on client reviews)</p>
          </div>
          <div className='flex gap-10'>
            <a href='#calendly' className={`${props.darkMode ? 'glow-button-dark' : 'glow-button'} select-none mt-20 sm:mt-0 text-xl p-3 rounded-full h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center button-gradient`}>
              <div className='relative z-10 font-semibold'>
                <PopupButton
                  url="https://calendly.com/vineraautomations/discoverycall"
                  /*
                  * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                  * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                  */
                  rootElement={document.getElementById("root")}
                  text="Get Started"
                />
              </div>
            </a>
            <a href='#benefits' className={`${props.darkMode ? 'glow-button-dark' : 'glow-button'} select-none mt-20 bg-transparent sm:mt-0 text-xl p-3 rounded-full h-full transition hover:scale-[1.02] cursor-pointer flex justify-center items-center border-2`}>
              <div className='relative z-10 font-semibold'>Learn More</div>
            </a>
          </div>

        </div>
        <div className='absolute h-full w-full' id='vanta' ref={vantaRef}></div>
      </div>
    </>
  )
}

export default Main
