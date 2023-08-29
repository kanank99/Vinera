import React from 'react'
import { useLocation } from "react-router-dom";

function Newsletter(props) {
    const location = useLocation();
    return (
        <div class={`py-10 px-4 sm:px-6 lg:px-8 lg:pt-0 md:pb-32 mx-auto 
        ${location.pathname === '/' ? 'bg-[#000212]' : 'bg-[#060606] mt-[60px]'}
        `}>
            <div class="max-w-xl text-center mx-auto">
                <div class="mb-5">
                    <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Sign up to our newsletter</h2>
                </div>

                <form>
                    <div class="mt-5 lg:mt-8 flex flex-col items-center gap-8 sm:flex-row sm:gap-3">
                        <div class="w-full">
                            <label for="hero-input" class="sr-only">Search</label>
                            <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-full focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter your email" />
                        </div>
                        <a href='#main' class="glow-button-dark-stay hover:button-gradient transition-all w-32 sm:w-auto inline-flex justify-center items-center gap-x-3 text-center text-white font-medium rounded-full py-3 px-4" onClick={() => props.setShowAlert(true)}>
                            Subscribe
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter