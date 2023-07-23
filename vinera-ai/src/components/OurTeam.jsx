import React from 'react'
import Carlos from '../assets/images/carlos.jpg';
import Kanan from '../assets/images/kanan-highres.png';
import Linkedin from '../assets/images/linkedin-icon.svg';
import Twitter from '../assets/images/twitter-green-icon.svg';
import LinkedinDark from '../assets/images/linkedin-night-icon.svg';
import TwitterDark from '../assets/images/twitter-night-icon.svg';

function OurTeam(props) {
  return (
        <div className={`${props.darkMode ? 'dark-testing' : 'light-bg'} font-display min-h-[80dvh] box-border transition-all`}>
            {/* Code for our team */}
            <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
            <div className='flex flex-col items-center justify-center '>
                <div className='text-[#f7f7f7] text-4xl lg:text-5xl w-full mt-20'>
                    <p className='font-bold'>MEET THE <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-blue-500 dark:to-purple-600'>TEAM</span></p>
                </div>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 mt-20'>
                    <div className={`relative flex items-center justify-center w-[320px] aspect-[11/15] border-2 border-green-700 dark:border-blue-800 rounded-[1rem] ${props.darkMode ? 'rgba-dark' : 'rgba'}`}>
                        <div className={`${props.darkMode ? 'screen-overlay-dark' : 'screen-overlay'}`}></div>
                        <div className={`flex flex-col items-center rounded-lg ${props.darkMode ? 'screen-content-dark' : 'screen-content'} `}>
                            <div className=''>
                                <img src={Carlos} alt='ceo' className='w-[220px] h-[220px] rounded-full  opacity-[0.7]' />
                            </div>
                            <div className='text-[#f7f7f7] text-xl mt-5'>Carlos Suárez</div>
                            <div className='text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-blue-500 dark:to-purple-600'>CEO / Marketer</div>
                            <div className='flex gap-3 mt-2'>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlossuareze/" className='flex items-center justify-center h-12 w-12 z-40'>
                                    <img src={`${props.darkMode ? LinkedinDark : Linkedin}`} alt='linkedin-icon' className='w-[60%] h-[60%]' />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://codepen.io" className='flex items-center justify-center h-12 w-12 z-40'>
                                    <img src={`${props.darkMode ? TwitterDark : Twitter}`} alt='twitter-icon' className='w-[60%] h-[60%]' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`relative flex items-center justify-center w-[320px] aspect-[11/15] border-2 border-green-700 dark:border-blue-800 rounded-[1rem] ${props.darkMode ? 'rgba-dark' : 'rgba'}`}>
                        <div className={`${props.darkMode ? 'screen-overlay-dark' : 'screen-overlay'}`}></div>
                        <div className={`flex flex-col items-center rounded-lg ${props.darkMode ? 'screen-content-dark' : 'screen-content'} `}>
                            <div className=''>
                                <img src={Kanan} alt='dev' className='w-[220px] h-[220px] rounded-full  opacity-[0.75]' />
                            </div>
                            <div className='text-[#f7f7f7] text-xl mt-5'>Kanan Kontorovsky</div>
                            <div className='text-xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-blue-500 dark:to-purple-600'>COO / Developer</div>
                            <div className='flex gap-3 mt-2'>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kanan-kontorovsky-052405228/" className='flex items-center justify-center h-12 w-12 z-40'>
                                    <img src={`${props.darkMode ? LinkedinDark : Linkedin}`} alt='linkedin-icon' className='w-[60%] h-[60%]' />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/KKontorovsky" className='flex items-center justify-center h-12 w-12 z-40'>
                                    <img src={`${props.darkMode ? TwitterDark : Twitter}`} alt='twitter-icon' className='w-[60%] h-[60%]' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OurTeam