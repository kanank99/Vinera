import React from 'react'
import Youtube from '../assets/images/youtube-icon.svg';
import Discord from '../assets/images/discord-icon.svg';
import Twitter from '../assets/images/twitter-icon.svg';
import LinkedIn from '../assets/images/linkedin-original-icon.svg';

function Footer() {
  return (
    <div className='dark:bg-[#000212] min-h-[450px] md:min-h-[320px] font-display pb-5 dark-testing-bottom'>
        <hr className='border-[#424347] w-full' />
        <div className='flex flex-col items-center justify-center'>
            {/* Explore */}
            <div className='lg:pt-24 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-0 w-[90%] max-w-[1450px]'>
                <div className='md:flex md:flex-row md:justify-between md:items-center md:gap-10 lg:gap-0 w-[90%] max-w-[1200px] m-auto mt-20 lg:mt-0'>
                    <div className='text-[#f7f7f7] md:text-left flex flex-col lg:h-[250px] text-2xl w-full mt-14 lg:mt-0'>
                        <div>
                            <p className='font-semibold text-4xl lg:text-3xl mb-6'>Explore</p>
                        </div>
                        <div className='flex flex-col gap-5 md:gap-1'>
                            <a href='#main' className='lg:text-md text-[#8a8f98] hover:text-[#fff]'>Home</a>
                            <a href='#whyus' className='text-[#8a8f98] hover:text-[#fff]'>Solutions</a>
                            <a href='#team' className='text-[#8a8f98] hover:text-[#fff]'>Our Team</a>
                            <a href='#calendly' className='text-[#8a8f98] hover:text-[#fff]'>Get Started</a>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className='text-[#f7f7f7] md:text-left flex flex-col lg:h-[250px] text-2xl w-full mt-14 lg:mt-0'>
                        <div>
                            <p className='font-semibold text-4xl mb-6'>Contact</p>
                        </div>
                        <div className='flex flex-col gap-5 md:gap-1'>
                            <a href='https://www.linkedin.com/company/vineraai/' target='_blank' rel='noreferrer' className='text-[#8a8f98] hover:text-[#fff]'>LinkedIn</a>
                            <a href='https://discord.gg/YxkGcgfZSD' target='_blank' rel='noreferrer' className='text-[#8a8f98] hover:text-[#fff]'>Discord</a>
                            <p className='text-[#8a8f98] hover:text-[#fff]'>vinerasolutions@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* Links */}
                <div className='md:flex md:flex-row md:justify-between md:items-center md:gap-10 lg:gap-0 w-[90%] max-w-[1200px] m-auto mt-20 lg:mt-0'>
                    <div className='text-[#f7f7f7] md:text-left flex flex-col lg:h-[250px] text-2xl w-full mt-14 lg:mt-0'>
                        <p className='font-semibold text-4xl mb-6'>Links</p>
                        <div className='flex flex-row justify-center md:justify-start items-center gap-5 transition-all'>
                            <a href='https://www.youtube.com/channel/UC9x2bDRah7ItTvbvTmR-Cdg' target='_blank' rel='noreferrer' className=''><img src={Youtube} alt='youtube-icon' className='w-7 h-7 grayscale hover:grayscale-[0.1]' /></a>
                            <a href='https://discord.gg/YxkGcgfZSD' target='_blank' rel='noreferrer' className=''><img src={Discord} alt='discord-icon' className='w-7 h-7 grayscale hover:grayscale-[0.1]' /></a>
                            <a href='https://twitter.com/vineraai' target='_blank' rel='noreferrer' className=''><img src={Twitter} alt='twitter-icon' className='w-7 h-7 grayscale hover:grayscale-[0.1]' /></a>
                            <a href='https://www.linkedin.com/company/vineraai/' target='_blank' rel='noreferrer' className=''><img src={LinkedIn} alt='linkedin-icon' className='w-7 h-7 grayscale hover:grayscale-[0.1]' /></a>
                        </div>
                    </div>
                    {/* Legal */}
                    <div className='text-[#f7f7f7] md:text-left flex flex-col lg:h-[250px] text-2xl w-full mt-14 lg:mt-0'>
                        <p className='font-semibold text-4xl mb-6'>Legal</p>
                        <a href='https://www.iubenda.com/privacy-policy/44290910' target='_blank' rel='noreferrer' className='text-[#8a8f98] hover:text-[#fff]'>Privacy Policy</a>
                        <a href='https://www.iubenda.com/privacy-policy/44290910/cookie-policy' target='_blank' rel='noreferrer' className='text-[#8a8f98] hover:text-[#fff]'>Refund Policy</a>
                        <a href='https://www.iubenda.com/terms-and-conditions/44290910' target='_blank' rel='noreferrer' className='text-[#8a8f98] hover:text-[#fff]'>Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </div>
        {/* Code for copyright */}
        <div className='flex flex-col items-center justify-center mt-20 md:mt-10 lg:mt-0'>
            <div className='text-[#8a8f98e1] text-md'>© 2023 Vinera AI. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer