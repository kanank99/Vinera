import React from 'react'
import { Link } from 'react-router-dom'

function Benefits() {
    return (
        <div id='benefits' className='bg-[#000212] font-display relative'>
            <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
            <div className='benefits-circle-gradient-left'></div>
            <div className='benefits-circle-gradient-right'></div>
            <div className='benefits-circle-gradient-left-2'></div>
            {/* Header */}
            <div className='flex flex-col items-center justify-center py-16 pt-16 lg:py-28'>
                <h1 class="px-4 mb-10 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">What advantages can <span class="text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-[#455eb5] dark:to-purple-600">AI</span> offer your <span class="text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-[#455eb5] dark:to-purple-600">team</span>?</h1>
                <p class="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400 px-4 lg:w-[60%] leading-8">Discover how AI and Automation free up your team from repetitive tasks, allowing more concentration on essential work.</p>
            </div>
            <div className='min-h-[500px] dark-testing-middle-benefit-left top-0 sticky'>
                <section class="">
                    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Customer Service</h2>
                            <p class="mb-4">Transform your customer service with instant and accurate responses 24/7, ensuring that no inquiry goes unanswered, in any language. These are automatically implemented through existing tools.</p>
                            <div class="inline-block w-[65%] lg:w-[42%] mt-5 py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                                <Link to='/automations#customer-service'> Discover Customer Service </Link>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-8">
                            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </div>
            <div className='min-h-[500px] dark-testing-middle-benefit-right sticky top-0'>
                <hr className='border-[#27282B] w-full m-auto' />
                <section class="">
                    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Lead Generation</h2>
                            <p class="mb-4">Detect and engage with potential customers, refining your lead generation into a highly efficient system. It helps filter leads more effectively to ensure smoother customer interaction and reduce churn rate.</p>
                            <div class="inline-block w-[60%] lg:w-[42%] mt-5 py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                                <Link to='/automations#lead-generation'>Discover Lead Generation</Link>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-8">
                            <img class="w-full rounded-lg" src="https://images.pexels.com/photos/7735691/pexels-photo-7735691.jpeg" alt="office content 1" />
                            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/8112186/pexels-photo-8112186.jpeg" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </div>
            <div className='min-h-[500px] dark-testing-middle-benefit-left sticky top-0'>
                <hr className='border-[#27282B] w-full m-auto' />
                <section class="">
                    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Data</h2>
                            <p class="mb-4">Power strategies with AI, leverage data for insights, and confidently drive your business forward. Enable non-technical staff to use natural language for instant data queries.</p>
                            <div class="inline-block w-[50%] lg:w-[30%] mt-5 py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                                <Link to='/automations#data'>Discover Data</Link>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-8">
                            <img class="w-full rounded-lg" src="https://images.pexels.com/photos/5935788/pexels-photo-5935788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="office content 1" />
                            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1561233835-f937539b95b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </div>
            <div className='min-h-[500px] dark-testing-middle-benefit-right sticky top-0'>
                <hr className='border-[#27282B] w-full m-auto' />
                <section class="">
                    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Marketing</h2>
                            <p class="mb-4">Produce platform-tailored, branded content that engages your audience and increases traffic, while partially automating your CRM, SEO, and PPC with GPT to enhance content creation.</p>
                            <div class="inline-block w-[60%] lg:w-[35%] mt-5 py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                                <Link to='/automations#marketing'>Discover Marketing</Link>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-8">
                            <img class="w-full rounded-lg" src="https://images.pexels.com/photos/6476805/pexels-photo-6476805.jpeg" alt="office content 1" />
                            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/6476806/pexels-photo-6476806.jpeg" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </div>
            <div className='min-h-[500px] dark-testing-middle-benefit-left sticky top-0'>
                <hr className='border-[#27282B] w-full m-auto' />
                <section class="">
                    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Process Automation</h2>
                            <p class="mb-4">Use AI to streamline routine tasks, freeing up your team's bandwidth. This allows them to concentrate on high-priority projects, leading to a notable increase in both productivity and efficiency.</p>
                            <div class="inline-block w-[70%] lg:w-[50%] mt-5 py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                                <Link to='/automations#process-automations'>Discover Process Automation</Link>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-8">
                            <img class="w-full rounded-lg" src="https://images.pexels.com/photos/7887821/pexels-photo-7887821.jpeg" alt="office content 1" />
                            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.pexels.com/photos/7873574/pexels-photo-7873574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="office content 2" />
                        </div>
                    </div>
                </section>
                <hr className='border-[#27282B] w-full m-auto' />
            </div>
        </div>
    )
}





export default Benefits