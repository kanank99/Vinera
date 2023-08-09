import React from 'react'
import { useEffect } from 'react';
import '../App.css';
// import Plus from '../assets/images/plus-icon.svg';
import Facebook from '../assets/images/facebook-icon.svg';
import Mailchimp from '../assets/images/mailchimp-icon.svg';
import Gmail from '../assets/images/gmail-icon.svg';
import Drive from '../assets/images/drive-icon.svg';
import Slack from '../assets/images/slack-icon.svg';
import Sheets from '../assets/images/sheets-icon.png';
import Youtube from '../assets/images/youtube-icon.svg';
import Twitter from '../assets/images/twitter-icon.svg';
import Vinera from '../assets/images/vineraVblack.png';
import Vinerawhite from '../assets/images/vineraVwhite.png';

function Integrations(props) {

    useEffect(() => {
        const observerScale = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scaleUp');
                    return;
                }
                // else {
                //     entry.target.classList.remove('scaleUp');
                // }
            });
        });

        const hiddenElements = document.querySelectorAll('.noShowBall');
        hiddenElements.forEach((element) => {
            observerScale.observe(element);
        });

        const observerSlideUp = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slideUp');
                    return;
                }
                // else {
                //     entry.target.classList.remove('slideUp');
                // }
            });
        });

        const hiddenElements2 = document.querySelectorAll('.textSlide');
        hiddenElements2.forEach((element) => {
            observerSlideUp.observe(element);
        });

        // const observerBreathe = new IntersectionObserver((entries) => {
        //     entries.forEach((entry) => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add('breathe');
        //             return;
        //         }
        //         else {
        //             entry.target.classList.remove('breathe');
        //         }
        //     });
        // });

        // const hiddenElements3 = document.querySelectorAll('.noBreathe');
        // hiddenElements3.forEach((element) => {
        //     observerBreathe.observe(element);
        // });
    }, []);



    return (
        <div id='automations' className={`${props.darkMode ? null : 'light-bg'} dark:bg-[#000212] min-h-[500px] font-display`}>
            <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
            <div className='w-full h-full'>
                <div className='max-w-7xl mx-auto py-16 sm:py-24 lg:px-8 flex flex-col '>
                    <div className='relative flex flex-row justify-center items-center gap-3 lg:gap-5 py-20'>
                        <div className='corner-shadows'></div>
                        <div className='noShowBall ball glowing-item-integrations absolute'></div>
                        <div className='noShowBall ball lg:flex lg:items-center lg:justify-center hidden lg:h-16 lg:w-16 lg:rounded-full lg:bg-[#000212] lg:dark:bg-[white] lg:text-white'>
                            <img src={Youtube} alt='twitter-icon' className='hidden lg:flex lg:w-7 lg:h-7' />
                        </div>
                        <div className='noShowBall ball md:flex md:items-center md:justify-center hidden md:w-14 md:h-14 lg:h-20 lg:w-20 md:rounded-full md:bg-[#000212] md:dark:bg-[white] md:text-white'>
                            <img src={Sheets} alt='google-sheets-icon' className='hidden md:flex md:w-6 md:h-8 lg:w-8 lg:h-12' />
                        </div>
                        <div className='noShowBall ball flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24 rounded-full bg-[#000212] dark:bg-[white] text-white'>
                            <img src={Facebook} alt='facebook-icon' className='w-10 h-10 lg:w-12 lg:h-12' />
                        </div>
                        <div className='noShowBall ball flex items-center justify-center h-20 w-20 lg:h-32 lg:w-32 rounded-full bg-[#000212] dark:bg-[white] text-white'>
                            <img src={Mailchimp} alt='mailchimp-icon' className='w-10 h-10 lg:w-20 lg:h-20 scale-125' />
                        </div>
                        <div className='noShowBall ball flex items-center justify-center h-24 w-24 lg:h-40 lg:w-40 rounded-full bg-gradient-to-tr from-green-600 to-green-900 dark:from-[#455eb5] dark:to-purple-600 text-white'>
                            <img src={`${props.darkMode ? Vinerawhite : Vinera}`} alt='vinera-icon' className='w-16 h-16 lg:w-24 lg:h-24 lg:scale-150' />
                            <div className={`${props.darkMode ? 'space' : 'null'} flex items-center justify-center rounded-full bg-gradient-to-bl text-white`}></div>
                        </div>
                        <div className='noShowBall ball flex items-center justify-center h-20 w-20 lg:h-32 lg:w-32 rounded-full bg-white text-white'>
                            <img src={Gmail} alt='gmail-icon' className='w-10 h-10 lg:w-16 lg:h-16' />
                        </div>
                        <div className='noShowBall ball flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24 rounded-full bg-white text-white'>
                            <img src={Drive} alt='drive-icon' className='w-10 h-10 lg:w-14 lg:h-14' />
                        </div>
                        <div className='noShowBall ball md:flex md:items-center md:justify-center hidden md:w-14 md:h-14 lg:h-20 lg:w-20 md:rounded-full md:bg-white md:text-white'>
                            <img src={Slack} alt='drive-icon' className='hidden md:flex md:w-7 md:h-7 lg:w-10 lg:h-10 md:scale-150' />
                        </div>
                        <div className='noShowBall ball lg:flex lg:items-center lg:justify-center hidden lg:h-16 lg:w-16 lg:rounded-full lg:bg-white lg:text-white'>
                            <img src={Twitter} alt='twitter-icon' className='hidden lg:flex lg:w-7 lg:h-7' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h2 className='noShowBall noShowText textSlide text1 text-lg lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-800 dark:from-blue-500 dark:to-purple-600 tracking-widest uppercase mb-6'>Automations</h2>
                        <p className='noShowBall noShowText textSlide text2 mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl'>Dozens of Integrations. Endless possibilities.</p>
                        <p className='noShowBall noShowText textSlide text3 max-w-xl mt-5 mx-auto text-xl tracking-wide text-gray-300'>We seamlessly integrate and deploy AI solutions into your existing systems and platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrations