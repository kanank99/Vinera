import React from 'react'
import { useState } from 'react'
import Dropdown from '../assets/images/arrow-down-icon.svg';

function Faq(props) {

    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);
    const [showAnswer5, setShowAnswer5] = useState(false);

    return (
        <div className='bg-[#000212] flex justify-center relative'>
            <hr className='border-[#27282B] w-[100%] m-auto hidden lg:block absolute top-0 left-0' />
            <div className='lg:flex lg:flex-row lg:w-full  lg:justify-center lg:items-center bg-[#000212] max-w-[1360px] lg:py-20'>
                <div className='hidden lg:h-full lg:pt-12 lg:flex-1 lg:block text-[#f7f7f7] text-2xl lg:text-5xl w-full my-20 text-left'>
                    <p className='font-bold'>Frequently<br /> asked <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-[#455eb5] dark:to-purple-600'>questions</span></p>
                </div>
                <div className={`dark:bg-[#000212] min-h-[500px] font-display pb-20 lg:flex-[2]`}>
                    <hr className='border-[#27282B] w-full m-auto lg:hidden' />
                    {/* Code for FAQ  */}
                    <div className='flex flex-col items-center justify-center'>
                        <div className='lg:hidden text-[#f7f7f7] text-2xl lg:text-5xl w-full my-20'>
                            <p className='font-bold'>Frequently<br /> asked <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-blue-500 dark:to-purple-600'>questions</span></p>
                        </div>
                        {/* question 1 */}
                        <div className='flex flex-col max-w-[950px] px-4 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer1(!showAnswer1)}>
                            <div className='flex flex-col w-full'>
                                <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                                    <p className='text-lg text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 text-left'>How can Vinera AI help me?</p>
                                    <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer1 ? '-rotate-90' : null}`} />
                                </div>
                                <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer1 ? 'block' : 'hidden'} transition-all mb-4`}>At Vinera AI we specialize in delivering customized AI Automation solutions that precisely align with your unique business requirements, resulting in heightened efficiency and substantial cost reductions.</p>
                            </div>
                        </div>
                        {/* question 2 */}
                        <div className='flex flex-col max-w-[950px] px-4 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer2(!showAnswer2)}>
                            <div className='flex flex-col w-full'>
                                <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                                    <hr className='absolute left-0 top-0 border-[#374151] w-full' />
                                    <p className='text-lg text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 text-left'>How easy is it to implement Vinera AI's solutions?</p>
                                    <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer2 ? '-rotate-90' : null}`} />
                                </div>
                                <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer2 ? 'block' : 'hidden'} transition-all mb-4`}>Implementing Vinera AI's solutions is a seamless process facilitated by our dedicated team. We collaborate closely with you to guarantee a smooth and efficient implementation journey. Throughout the process, we offer unwavering support and guidance, ensuring that you are well-assisted at every stage.</p>
                            </div>
                        </div>
                        {/* question 3 */}
                        <div className='flex flex-col max-w-[950px] px-4 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer3(!showAnswer3)}>
                            <div className='flex flex-col w-full'>
                                <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                                    <hr className='absolute left-0 top-0 border-[#374151] w-full' />
                                    <p className='text-lg text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 text-left'>Who can benefit most from Vinera's Automation services?</p>
                                    <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer3 ? '-rotate-90' : null}`} />
                                </div>
                                <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer3 ? 'block' : 'hidden'} transition-all mb-4`}>Vinera's Automation is ideally suited for entrepreneurs and small to medium-sized businesses seeking to fortify their operations with AI (Ex. E-commerece brands, Real Estate Agents, Multi-purpose Consultants, etc...).</p>
                            </div>
                        </div>
                        {/* question 4 */}
                        <div className='flex flex-col max-w-[950px] px-4 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer4(!showAnswer4)}>
                            <div className='flex flex-col w-full'>
                                <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                                    <hr className='absolute left-0 top-0 border-[#374151] w-full' />
                                    <p className='text-lg text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 text-left'>Is it necessary for me to have a predefined list of automations, or can you help me identify the best options?</p>
                                    <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer4 ? '-rotate-90' : null}`} />
                                </div>
                                <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer4 ? 'block' : 'hidden'} transition-all mb-4`}>At Vinera AI, we welcome both scenarios. If you already have a clear idea of the automations you need, that's fantastic! However, if you're unsure about the most suitable solutions for your business, rest assured that we're here to assist. Our team excels at discovering untapped potential within businesses and can guide you through an initial workshop call to identify and prioritize the most beneficial automations for your specific requirements.</p>
                            </div>
                        </div>
                        {/* question 5 */}
                        <div className='flex flex-col max-w-[950px] px-4 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer5(!showAnswer5)}>
                            <div className='flex flex-col w-full'>
                                <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                                    <hr className='absolute left-0 top-0 border-[#374151] w-full' />
                                    <p className='text-lg text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 text-left'>Is there a refund policy if I'm unsatisfied with the service?</p>
                                    <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer5 ? '-rotate-90' : null}`} />
                                </div>
                                <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer5 ? 'block' : 'hidden'} transition-all mb-4`}>Absolutely! We offer a hassle-free refund policy within 15 days of your service purchase, no questions asked. If you're unsatisfied with our service, we will gladly issue a full refund upon your request.</p>
                            </div>
                        </div>



                    </div>

                </div>
            </div>


            {/* // <!-- FAQ --> */}

        </div>

    )
}

export default Faq