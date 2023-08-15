import React from 'react';
import { useState } from 'react';
import ZapierSVG from '../assets/images/zapier-svg.svg';
import VoiceflowSVG from '../assets/images/voiceflow-svg.svg';
import StripeSVG from '../assets/images/stripe-svg.svg';
import BotpressSVG from '../assets/images/botpress-svg.svg';

function Pricing() {

    const [showAnnualPricing, setShowAnnualPricing] = useState(false);

    return (
        <div id='pricing' className='bg-[#000212] font-display transition-all dark-testing-top max-w-[100dvw]'>
            <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
            <section class="">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">AI Plans That Understand Your Demands.</h2>
                        <p class="lg:mb-5 mb-[4.85rem] font-light text-gray-500 sm:text-xl dark:text-[#b4bcd0]">Our AI Plans leverage technology, innovation, and automation to unlock lasting value and drive exponential growth for your business.</p>
                        <div class="flex justify-center items-center mt-14 ">
                            <label class={`min-w-[3.5rem] text-md mr-3 ${showAnnualPricing ? 'text-gray-400' : 'text-[#f7f7f7]'} transition`}>Monthly</label>

                            <input type="checkbox" id="hs-basic-with-description" class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#5e6ad2] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-transparent focus:border-[#5e6ad2]  focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-[#5e6ad2] dark:focus:ring-offset-gray-800

    before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"  onChange={() => setShowAnnualPricing(!showAnnualPricing)} />

                            <label class={`relative min-w-[3.5rem] text-md ml-3 ${showAnnualPricing ? 'text-[#f7f7f7]' : 'text-gray-400'} transition`}>
                                Annual
                                <span class="absolute lg:-top-10 left-auto lg:-right-28 -right-12 -top-[3.2rem]">
                                    <span class="flex items-center">
                                        <svg class="w-14 h-8 -mr-6" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" class="fill-gray-300 dark:fill-[gray-700]" />
                                        </svg>
                                        <span class="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-[#5e6ad2] text-white rounded-full py-1 px-2.5">Save up to 15%</span>
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* <!-- Pricing Card --> */}
                        <div class="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 pricing-card-background dark:text-white">
                            <h3 class="mb-4 text-3xl font-semibold">Basic</h3>
                            <p class="text-gray-500 sm:text-lg dark:text-[#b4bcd0]">No minimum commitment. Pause or cancel anytime. Everything you need to get started.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold"><span className='font-semibold'>$</span>{showAnnualPricing ? '1,275' : '1,500'}</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <hr class="border-gray-200 dark:border-gray-600" />
                            <p class="mt-1 mb-7 text-gray-500 dark:text-[#b4bcd0] text-left">What's in the plan:</p>
                            {/* <!-- List --> */}
                            <ul class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span> 24/7 AI Chatbot w/ knowledge base</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="self-start translate-y-[0.14rem] flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Automated customer service and lead generation</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Up to 5 AI-Driven task automation</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Multi-Platform deployement</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Monthly maintenance</span>
                                </li>
                            </ul>
                            <a href="#calendly" className='lg:absolute lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:translate-y-[17rem] lg:w-[80%] transition text-white bg-[#5e6ad2] hover:bg-[#828fff] focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white'>Get Started with Basic</a>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div class="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 pricing-card-background-main rounded-xl border-2 border-gray-100 shadow dark:border-[#5e6ad2] xl:p-8 dark:text-white">
                            <h3 class="mb-4 text-3xl font-semibold">Standard</h3>
                            <p class="text-gray-500 sm:text-lg dark:text-[#b4bcd0]">Boost sales with customization, optimization, and advanced automation.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold"><span className='font-semibold'>$</span>{showAnnualPricing ? '2,550' : '3,000'}</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <hr class="border-gray-200 dark:border-gray-600" />
                            <p class="mt-1 mb-7 text-gray-500 dark:text-[#b4bcd0] text-left">Everything in basic, plus...</p>
                            {/* <!-- List --> */}
                            <ul class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>1 Monthly workshop call</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>NLP Capabilities</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>AI-Persona development</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Up to 10 AI-Driven task automation</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>API Integrations</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Monthly support and maintenance</span>
                                </li>
                            </ul>
                            <a href="#calendly" className='lg:absolute lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:translate-y-[17rem] lg:w-[80%] transition text-white bg-[#5e6ad2] hover:bg-[#828fff] focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white'>Get Started with Standard</a>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div class="lg:h-[690px] relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 pricing-card-background rounded-xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white">
                            <h3 class="mb-4 text-3xl font-semibold">Pro</h3>
                            <p class="text-gray-500 sm:text-lg dark:text-[#b4bcd0]">Maximize sales potential through expert and cutting-edge automation.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold"><span className='font-semibold'>$</span>{showAnnualPricing ? '3,825' : '4,500'}</span>
                                <span class="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <hr class="border-gray-200 dark:border-gray-600" />
                            <p class="mt-1 mb-7 text-gray-500 dark:text-[#b4bcd0] text-left">Everything in standard, plus...</p>                            {/* <!-- List --> */}
                            <ul class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Unlimited monthly workshop calls</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="self-start translate-y-[0.14rem] flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Comprehensive AI Chatbot with advanced features</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="self-start translate-y-[0.14rem] flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Unlimited AI-Driven task automation</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Advanced AI-Persona</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-[#6d7cff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Priority support and maintenance</span>
                                </li>
                            </ul>
                            <a href="#calendly" className='lg:absolute lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:translate-y-[17rem] lg:w-[80%] transition text-white bg-[#5e6ad2] hover:bg-[#828fff] focus:ring-4 focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:text-white'>Get Started with Pro</a>
                        </div>
                    </div>
                    {/* <!-- Horizontal Enterprise Card --> */}
                    <div class="enterprise-card">
                        <div class='enterprise-card-border-1'></div>
                        <div class='enterprise-card-border-2'></div>
                        <div class='enterprise-card-light-1'></div>
                        <div class='enterprise-card-light-2'></div>
                        <div class='enterprise-card-content'>
                            <div class='enterprise-card-content-upper'>
                                <div class='enterprise-card-content-upper-text'>
                                    <span class='enterprise-card-content-upper-text-title lg:text-left'>
                                        Vinera
                                        <span className='pl-2 text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-400 dark:from-[#BE05FF] dark:via-[#A954FF] dark:to-[#A771FF]'>
                                            Enterprise
                                        </span>
                                    </span>
                                    <span className='enterprise-card-content-upper-text-subtitle lg:text-left'>
                                        Designed for ambitious enterprises aiming to expand securely. Vinera Enterprise delivers heightened features, extensive administrative automations, and supplementary perks.                                    </span>
                                </div>
                                <a href="#calendly" class='enterprise-card-content-upper-button ml-[48px]'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#f7f7f7">
                                        <path d="M8 1C4.13401 1 1 3.262 1 7C1 8.83211 1.75288 10.3096 2.97581 11.3401C2.22526 13.7801 2.07619 15 2.52874 15C2.93754 15 3.96564 14.2301 5.61306 12.6902C6.35802 12.8937 7.16181 13 8 13C11.866 13 15 10.6678 15 7C15 3.33217 11.866 1 8 1Z"></path>
                                    </svg>
                                    <span className='text-[#f7f7f7]'>Contact Sales</span>
                                </a>
                            </div>
                            <div class='enterprise-card-content-lower select-none'>
                                <div class='row'>
                                    <div class="enterprise-card-content-lower-1-item-1"></div>
                                    <div class="enterprise-card-content-lower-1-item-2">Personalized Automation Kickstart</div>
                                    <div class="enterprise-card-content-lower-1-item-2">SyncAI</div>
                                    <div class="enterprise-card-content-lower-1-item-2">Robust AI Security Measures</div>
                                    <div class="enterprise-card-content-lower-1-item-3"></div>
                                </div>
                                <div class='row'>
                                    <div class="enterprise-card-content-lower-2-item-1"></div>
                                    <div class="enterprise-card-content-lower-2-item-2">Tailored Automation Pricing</div>
                                    <div class="enterprise-card-content-lower-2-item-2">Dedicated Assistance Channel</div>
                                    <div class="enterprise-card-content-lower-2-item-3"></div>
                                    <div class="enterprise-card-content-lower-2-item-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-20'>
                        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-6 mx-auto">
                            {/* <!-- Title --> */}
                            <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center">
                                <h2 class="text-xl text-gray-600 dark:text-gray-400">Partnered with the best in the industry</h2>
                            </div>
                            {/* <!-- End Title --> */}

                            <div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
                                <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-32 mx-auto sm:mx-0 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607"><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor" /></svg>

                                <img class="scale-110 py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-28 mx-auto sm:mx-0 text-gray-500" src={VoiceflowSVG} alt="" />

                                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" src={ZapierSVG} alt="" />

                                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" src={StripeSVG} alt="" />

                                <img class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-40 mx-auto sm:mx-0 text-gray-500" src={BotpressSVG} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
}

export default Pricing;