import React from 'react';

function Pricing(props) {

    return (
        <div className='bg-[#000212] font-display transition-all dark-testing-top'>
            <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
            <section class="">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">AI Plans That Understand Your Demands.</h2>
                        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-[#b4bcd0]">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div>
                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* <!-- Pricing Card --> */}
                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-3xl font-semibold">Monthly</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-[#b4bcd0]">No minimum commitment. Pause or cancel anytime. Everything you need to get started.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold"><span className='font-semibold'>$</span>6,000</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Monthly workshop calls</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>One request at a time</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Automations: <span class="font-semibold">Unlimited</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>15-day free trial</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Pause or cancel anytime</span>
                                </li>
                            </ul>
                            <a href="#calendly" className='transition text-white bg-[#5e6ad2] hover:bg-[#828fff] focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white'>Get Started with Monthly</a>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-3xl font-semibold">Quarterly</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-[#b4bcd0]">Commit for a season, with the flexibility to change. Pause or cancel anytime.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold"><span className='font-semibold'>$</span>4,500</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Monthly workshop calls</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>One request at a time</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Automations: <span class="font-semibold">Unlimited</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>15-day free trial</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Pause or cancel anytime</span>
                                </li>
                            </ul>
                            <a href="#calendly" class="transition text-white bg-[#5e6ad2] hover:bg-[#828fff] focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white" >Get Started with Quarterly</a>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 class="mb-4 text-3xl font-semibold">Yearly</h3>
                            <p class="font-light text-gray-500 sm:text-lg dark:text-[#b4bcd0]">Embrace the full year, but always with an exit in mind. Pause or cancel anytime.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold"><span className='font-semibold'>$</span>3,000</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Monthly workshop calls</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>One request at a time</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Automations: <span class="font-semibold">Unlimited</span></span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>15-day free trial</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Pause or cancel anytime</span>
                                </li>
                            </ul>
                            <a href="#calendly" class="transition text-white bg-[#5e6ad2] hover:bg-[#828fff] focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white" >Get Started with Yearly</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Pricing;