import React from 'react'
import Newsletter from './Newsletter'
import Footer from './Footer'
import { useEffect } from 'react'

function Contact(props) {

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'instant'
        })
    }, [])

    return (
        // < !--Hire Us-- >
        <div class='dark-testing-top-contact h-[100dvh] font-display'>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-24 lg:mb-36 mt-[5rem]">
                {/* <!-- Grid --> */}
                <div class="grid md:grid-cols-2 items-center gap-12">
                    <div>
                        <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:text-left lg:leading-tight dark:text-white">
                            Contact Sales
                        </h1>
                        <div class='enterprise-card-content-upper-text-title-contact lg:text-left'>
                            Vinera
                            <span className='pl-2 text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-400 dark:from-[#BE05FF] dark:via-[#A954FF] dark:to-[#A771FF]'>
                                Enterprise
                            </span>
                        </div>
                        <p class="md:text-lg lg:text-left text-gray-800 dark:text-[#bdc3cf] mt-10">
                            Crafted for forward-thinking corporations with a goal to broaden their reach safely, Vinera Enterprise provides advanced functionalities, comprehensive management automations, and additional benefits.
                        </p>

                        <div class="mt-8 lg:block flex flex-col items-center justify-center ">
                            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 lg:mb-0 lg:text-left">
                                What can I expect?
                            </h2>

                            <ul class="mt-2 space-y-2">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="text-gray-600 dark:text-[#bdc3cf]">
                                        Development-Leading Design
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="text-gray-600 dark:text-[#bdc3cf]">
                                        Advanced Functionalities
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="text-gray-600 dark:text-[#bdc3cf]">
                                        24/7 Support
                                    </span>
                                </li>
                            </ul>
                        </div>


                        <div class="mt-10 lg:flex items-center gap-x-5">
                            {/* <!-- Avatar Group --> */}
                            <div class="lg:flex mb-4 lg:mb-0 -space-x-2">
                                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Description" />
                                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Description" />
                                <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Description" />
                                <span class="inline-flex justify-center items-center h-8 w-8 rounded-full bg-[#5345e5] text-white ring-2 ring-white">
                                    <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                            </div>
                            {/* <!-- End Avatar Group --> */}
                            <span class="text-sm text-gray-500">
                                4.8/5.0 rating <span className='hidden md:block'>(based on client reviews)</span>
                            </span>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className='relative bg-[#ffffff08] rounded-xl'>
                        {/* <!-- Card --> */}
                        <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
                            <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Fill in the form
                            </h2>

                            <form action="https://formsubmit.co/vinerasolutions@gmail.com" method="POST">
                                <div class="mt-6 grid gap-4 lg:gap-6">
                                    {/* <!-- Grid --> */}
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div className='flex flex-col gap-[8px]'>
                                            <label for="hs-firstname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">First Name</label>
                                            <input required type="text" name="hs-firstname-hire-us-1" id="hs-firstname-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#ffffff08] dark:border-[#ffffff08] border dark:text-gray-400" />
                                        </div>

                                        <div className='flex flex-col gap-[8px]'>
                                            <label for="hs-lastname-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
                                            <input required type="text" name="hs-lastname-hire-us-1" id="hs-lastname-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#ffffff08] dark:border-[#ffffff08] border dark:text-gray-400" />
                                        </div>
                                    </div>
                                    {/* <!-- End Grid --> */}

                                    <div className='flex flex-col gap-[8px]'>
                                        <label for="hs-work-email-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Work Email</label>
                                        <input required type="email" name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#ffffff08] dark:border-[#ffffff08] border dark:text-gray-400" />
                                    </div>

                                    {/* <!-- Grid --> */}
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div className='flex flex-col gap-[8px]'>
                                            <label for="hs-company-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Company Size</label>
                                            <select required class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#ffffff08] dark:border-[#ffffff08] border dark:text-[#f7f7f7]">
                                                <option selected>1- 50</option>
                                                <option>51 - 150</option>
                                                <option>151 - 250</option>
                                                <option>251 - 500</option>
                                                <option>500+</option>
                                            </select>
                                        </div>

                                        <div className='flex flex-col gap-[8px]'>
                                            <label for="hs-company-website-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Company Website</label>
                                            <input required type="text" name="hs-company-website-hire-us-1" id="hs-company-website-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#ffffff08] dark:border-[#ffffff08] border dark:text-gray-400" />
                                        </div>
                                    </div>
                                    {/* <!-- End Grid --> */}

                                    <div className='flex flex-col gap-[8px]'>
                                        <label for="hs-about-hire-us-1" class="block text-sm text-gray-700 font-medium dark:text-white">Details</label>
                                        <textarea required id="hs-about-hire-us-1" name="hs-about-hire-us-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#ffffff08] dark:border-[#ffffff08] border dark:text-gray-400"></textarea>
                                    </div>
                                </div>
                                {/* <!-- End Grid --> */}
                                <input type="hidden" name="_captcha" value="false" />
                                <div class="flex flex-col min-[1086px]:flex-row-reverse max-[1086px]:gap-[20px] justify-between items-center mt-8">
                                    <button type="submit" class="transition bg-[#ffffff08] hover:bg-[#ffffff18] border border-[#ffffff0D] px-[16px] h-[32px] rounded-full flex items-center justify-center backdrop-blur-[14px]">
                                        <p class="text-[13px] text-white font-medium focus:outline-none">Send message</p>
                                    </button>
                                    <div class="text-center">
                                        <p class="text-[13px] font-medium text-[#b4bcd099]">
                                            We'll get back to you in 1-2 business days.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
            </div>
            <Newsletter setShowAlert={props.setShowAlert} />
            <Footer />
        </div>
    )
}

export default Contact