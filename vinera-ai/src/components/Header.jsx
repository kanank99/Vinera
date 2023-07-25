import React from 'react'
import { useState } from 'react'
// import Logo from '../assets/images/1.png';
import VineraTransparent from '../assets/images/vinera-transparent.png';
import Menu from '../assets/images/menu.png';
// import Dropdown from '../assets/images/arrow-down-icon.svg';
// import Moon from '../assets/images/moon-icon.svg';
// import Sun from '../assets/images/sun-icon.svg';

function Header(props) {

    const [appHovering, setAppHovering] = useState(false)

    return (
        <div className='header-transparency transition-all text-[#191c1d] fixed w-full flex justify-between h-20 border-b-[1px] border-b-[#27282b] items-center pl-6 pr-6 lg:pl-20 lg:pr-20 z-50'>
            <div className='z-10 select-none'>
                <a href='#main'> <img src={VineraTransparent} alt='logo' className='w-44 h-44 pt-5' /> </a>
            </div>
            <div className='flex gap-5 z-10'>
                {/* Code for dropdown */}
                <div className='hidden sm:flex sm:gap-5 lg:gap-10 sm:items-center sm:justify-center'>
                    {/*Code for tailwind dark mode*/}  
                    {/* <div className='flex items-center justify-center cursor-pointer' onClick={props.toggleDarkMode}>
                        {props.darkMode ? <img src={Sun} alt='sun' className='w-8 h-8 z-10' /> : <img src={Moon} alt='moon' className='w-8 h-8 z-10' />}
                    </div> */}
                    <div className='hidden lg:flex text-[#313435] dark:text-[#f7f7f7] dark:hover:text-[#8a8f98] transition-all text-xl h-full cursor-pointer justify-center items-center gap-2'><a href='#whyus' className='tracking-tight'>Solutions</a>{/*<img src={Dropdown} alt='dropdown' className='w-5 h-5 transition-all hover:rotate-180' />*/}</div> 
                    <div className='hidden lg:flex text-[#313435] dark:text-[#f7f7f7] dark:hover:text-[#8a8f98] transition-all text-xl h-full cursor-pointer justify-center items-center'><a href='#team' className='tracking-tight'>Our Team</a></div>
                    <div className='text-xl text-[#313435] dark:text-[#f7f7f7] dark:hover:text-[#8a8f98] h-full transition-all cursor-pointer flex justify-center items-center'>
                        <a href='#calendly' className='relative z-10'>Get Started</a>
                    </div>
                    <div className={`${props.darkMode ? 'glow-button-dark' : 'glow-button'} relative select-none text-xl rounded-full h-full transition cursor-pointer bg-gradient-to-tr from-[#15803d] to-[#dcfce7] dark:text-[#f7f7f7] dark:from-blue-500 dark:via-[#4356746E] dark:to-purple-600 px-6 py-1 flex justify-center items-center`}
                                onMouseEnter={() => setAppHovering(true)}
                                onMouseLeave={() => setAppHovering(false)}
                    >
                        <div className='relative z-10'>App</div>
                        {appHovering && 
                        <div style={{position: 'absolute', top: '45px', width: '150%', backgroundColor: '#f9f9f9', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '2px', zIndex: '1', fontSize: '16px'}}>
                            <p>Coming soon!</p>
                        </div>
                        }
                    </div>
                </div>
                <div className='lg:hidden select-none cursor-pointer bg-[#19d6a752] dark:bg-gradient-to-tr dark:from-blue-500 dark:via-[#4356746E] dark:to-purple-600 p-2 rounded-xl sm:gap-2 flex justify-center items-center' onClick={() => document.querySelector('dialog').showModal()}>
                    <img src={Menu} alt='menu' className='sm:w-6 sm:h-6 w-10 h-10' />
                </div>
            </div>
        </div>
    )
}

export default Header