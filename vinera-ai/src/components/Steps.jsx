import React from 'react'

function Steps() {
    return (
        // <div className='bg-[#000212] font-display transition-all z-40 flex flex-col items-center'>
        //     {/* <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' /> */}
        //     <div className='flex flex-col items-center justify-center pt-20 pb-10 md:pb-0 '>
        //         <p className='text-[#F2F2F2] text-4xl font-bold'>Fast-Track Your Business From Outdated to AI Leader</p>
        //         <p className='text-[#8A8F98] text-xl font-semibold text-center max-w-[600px] mt-5'>Our Simple 3 Step Process</p>
        //     </div>
        //     <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:py-20 md:max-w-[80%]'>
        //         <div className='flex flex-col bg-white bg-opacity-5 p-8 rounded-lg items-center justify-center gap-5 w-[80%] md:w-[600px]'>
        //             <svg class="w-20 h-20 my-7 text-gray-800 dark:text-[#5827ff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
        //                 <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        //                     <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        //                     <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
        //                 </g>
        //             </svg>
        //             <p className='text-[#F2F2F2] text-xl font-semibold'>Step One: Discover</p>
        //             <p className='text-[#8A8F98] text-lg font-semibold text-center max-w-[600px]'>We'll work with you to understand your business and identify opportunities for automation.</p>
        //         </div>
        //         <div className='flex flex-col bg-white bg-opacity-5 p-8 rounded-lg items-center justify-center gap-5 w-[80%] md:w-[600px]'>
        //             <svg class="w-20 h-20 my-7 text-gray-800 dark:text-[#5827ff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
        //                 <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        //                     <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        //                     <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
        //                 </g>
        //             </svg>
        //             <p className='text-[#F2F2F2] text-xl font-semibold'>Step One: Discover</p>
        //             <p className='text-[#8A8F98] text-lg font-semibold text-center max-w-[600px]'>We'll work with you to understand your business and identify opportunities for automation.</p>
        //         </div>
        //         <div className='flex flex-col bg-white bg-opacity-5 p-8 rounded-lg items-center justify-center gap-5 w-[80%] md:w-[600px]'>
        //             <svg class="w-20 h-20 my-7 text-gray-800 dark:text-[#5827ff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
        //                 <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        //                     <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        //                     <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
        //                 </g>
        //             </svg>
        //             <p className='text-[#F2F2F2] text-xl font-semibold'>Step One: Discover</p>
        //             <p className='text-[#8A8F98] text-lg font-semibold text-center max-w-[600px]'>We'll work with you to understand your business and identify opportunities for automation.</p>
        //         </div>
        //     </div>
        // </div>

        // <!-- Features -->
        <div className='bg-[#000212] dark-testing-top'>
            <hr className='border-[#27282B] w-[90%] max-w-[1600px] m-auto' />
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                {/* <!-- Grid --> */}
                <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div class="lg:col-span-1 flex flex-col justify-center items-center">
                        <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                            From Discovery to Enhancement in Four Steps
                        </h2>
                        <p class="mt-2 md:mt-4 text-gray-500">
                            Dive deep with us as we understand your challenges, automate your processes, ensure smooth operations, and continuously refine for excellence.
                        </p>
                        <a href="#pricing" class="hidden lg:inline-block w-[35%] mt-12 px-6 py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                            View Plans
                        </a>
                    </div>
                    {/* <!-- End Col --> */}

                    <div class="lg:col-span-2">
                        <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
                            {/* <!-- Icon Block --> */}
                            <div class="flex gap-x-5">
                                <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-[#574eff]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                </svg>
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                        Step 1: Discover
                                    </h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        Our goal isn't to push any AI solution onto our clients. Instead, we carefully explore which type of AI chatbot and automations will best fit the unique needs and challenges of each client.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div class="flex gap-x-5">
                                <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-[#574eff]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                </svg>
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                        Step 2: Automate
                                    </h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        Drawing from our experiences in building enterprise products and addressing common pain points across various projects, we're equipped to deliver precise automation solutions.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div class="flex gap-x-5">
                                <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-[#574eff]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                </svg>
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                        Step 3: Operate
                                    </h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        Vinera's automations are designed to be simple, eliminating the complexity of your tasks. From managing enterprise databases to automating everyday tasks, we make operations seamless.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- End Icon Block --> */}

                            {/* <!-- Icon Block --> */}
                            <div class="flex gap-x-5">
                                <svg class="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-[#574eff]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z" />
                                </svg>
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                        Step 4: Repeat
                                    </h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        AI and automation are ever-evolving. That's why we're always seeking the right balance between functionality and aesthetics, ensuring that as your needs evolve, our solutions do too, creating delightful and efficient experiences every time.
                                    </p>
                                </div>
                            </div>
                            <div class="flex justify-center lg:hidden">
                                <a href="#pricing" class="inline-block lg:hidden w-[35%] mt-2 px-6 py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                                    View Plans
                                </a>
                            </div>

                            {/* <!-- End Icon Block --> */}
                        </div>
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
            </div>
            <hr className='border-[#27282B] w-[90%] max-w-[1600px] m-auto' />
        </div>

    )
}

export default Steps