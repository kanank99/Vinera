import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../assets/images/1.png';
import VineraTransparent from '../assets/images/vinera-transparent.png';
import Menu from '../assets/images/menu.png';
import { PopupButton } from "react-calendly";
// import Dropdown from '../assets/images/arrow-down-icon.svg';
// import Moon from '../assets/images/moon-icon.svg';
// import Sun from '../assets/images/sun-icon.svg';

function Header(props) {

    const [appHovering, setAppHovering] = useState(false)

    return (
        <>
            <div className='header-transparency transition-all text-[#191c1d] fixed w-full flex justify-between h-20 border-b-[1px] border-b-[#27282b] items-center pl-6 pr-6 lg:pl-20 lg:pr-20 z-50 max-w-[100dvw]'>
                <div className='z-10 select-none'>
                    <Link to='/'> <img src={VineraTransparent} alt='logo' className='w-44 h-44 pt-5' /> </Link>
                </div>
                <div className='hidden lg:flex lg:gap-10 lg:items-center lg:justify-center z-10'>
                    <div className='hidden lg:flex text-[#313435] dark:text-[#f7f7f7] dark:hover:text-[#8a8f98] transition-all text-xl h-full cursor-pointer justify-center items-center gap-2'><a className='tracking-tight' href='#steps'>Solutions</a>{/*<img src={Dropdown} alt='dropdown' className='w-5 h-5 transition-all hover:rotate-180' />*/}</div>
                    {/* <div className='text-xl text-[#313435] dark:text-[#f7f7f7] dark:hover:text-[#8a8f98] h-full transition-all cursor-pointer flex justify-center items-center'><Link to='/automations' className='relative z-10'>Automations</Link></div> */}
                    <div className='hidden lg:flex text-[#313435] dark:text-[#f7f7f7] dark:hover:text-[#8a8f98] transition-all text-xl h-full cursor-pointer justify-center items-center'><a href='#team' className='tracking-tight'>Our Team</a></div>
                    <div className='text-xl text-[#313435] dark:text-[#f7f7f7] dark:hover:text-[#8a8f98] h-full transition-all cursor-pointer flex justify-center items-center'><a href='#pricing' className='relative z-10'>Memberships</a></div>
                </div>
                <div className='flex gap-5 z-10'>
                    {/* Code for dropdown */}
                    <div className='hidden sm:flex sm:gap-5 lg:gap-5 sm:items-center sm:justify-center'>
                        {/*Code for tailwind dark mode*/}
                        {/* <div className='flex items-center justify-center cursor-pointer' onClick={props.toggleDarkMode}>
                            {props.darkMode ? <img src={Sun} alt='sun' className='w-8 h-8 z-10' /> : <img src={Moon} alt='moon' className='w-8 h-8 z-10' />}
                        </div> */}
                        <div className={`${props.darkMode ? 'glow-button-dark' : 'glow-button'} relative select-none text-xl rounded-full h-full transition cursor-pointer button-gradient text-[#f7f7f7] px-6 py-1 flex justify-center items-center`}>
                            <div className='relative z-10'>
                                <PopupButton
                                    url="https://calendly.com/vineraautomations/discoverycall"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={document.getElementById("root")}
                                    text="Book a Demo"
                                />
                            </div>
                        </div>
                        <div className={`${props.darkMode ? 'glow-button-dark' : 'glow-button'} relative select-none text-xl rounded-full h-full transition cursor-pointer button-gradient text-[#f7f7f7] px-6 py-1 flex justify-center items-center`}
                            onMouseEnter={() => setAppHovering(true)}
                            onMouseLeave={() => setAppHovering(false)}
                        >
                            <div className='relative z-10'>App</div>
                            {appHovering &&
                                <div style={{ position: 'absolute', top: '45px', width: '150%', backgroundColor: '#f9f9f9', color: '#000', border: '1px solid #ccc', borderRadius: '4px', padding: '2px', zIndex: '1', fontSize: '16px' }}>
                                    <p>Coming soon!</p>
                                </div>
                            }
                        </div>

                    </div>
                    <div className='lg:hidden select-none cursor-pointer button-gradient p-2 rounded-xl sm:gap-2 flex justify-center items-center' onClick={() => document.querySelector('dialog').showModal()}>
                        <img src={Menu} alt='menu' className='sm:w-6 sm:h-6 w-10 h-10' />
                    </div>
                </div>

            </div>
            {props.showAlert ?
                <div id="dismiss-alert" class="fixed z-50 w-[50dvw] hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-teal-50 border border-teal-200 rounded-md p-4 top-[50%] left-[50%] transform -translate-x-1/2 translate-y-[100px] sm:translate-y-[200px] md:translate-y-[300px] lg:translate-y-[400px]" role="alert">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-4 w-4 text-teal-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <div class="text-sm text-teal-800 font-medium">
                                You have been added to the newsletter!
                            </div>
                        </div>
                        <div class="pl-3 ml-auto">
                            <div class="-mx-1.5 -my-1.5">
                                <button type="button" class="inline-flex bg-teal-50 rounded-md p-1.5 text-teal-500 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-teal-600" data-hs-remove-element="#dismiss-alert" onClick={() => props.setShowAlert(false)}>
                                    <span class="sr-only">Dismiss</span>
                                    <svg class="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

        </>

    )
}

export default Header