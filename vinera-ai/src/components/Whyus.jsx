import React from 'react'
import { useEffect } from 'react';
import Bot from '../assets/images/bot-icon.svg';
import Integrate from '../assets/images/integrate-icon.svg';
import Enhancement from '../assets/images/enhancement-icon.svg';
import Personalized from '../assets/images/personalized-icon.svg';
import Time from '../assets/images/time-icon.svg';
import Scale from '../assets/images/scale-icon.svg';
import ZapierSVG from '../assets/images/zapier-svg.svg';
import VoiceflowSVG from '../assets/images/voiceflow-svg.svg';
import StripeSVG from '../assets/images/stripe-svg.svg';
import BotpressSVG from '../assets/images/botpress-svg.svg';
// import StackaiSVG from '../assets/images/stackai-svg.svg';

function Whyus(props) {

  useEffect(() => {
    document.getElementById("cards").onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }
  }, [])

  return (
    <div id='whyus' className={`whyusdiv flex flex-col  items-center justify-center relative ${props.darkMode ? "dark-testing-2" : "light-bg"}  font-display z-40`}>
      <div className='text-[#f7f7f7] text-5xl w-full py-8 lg:py-14'>
        <p className='font-bold'>WHY <span className='relative text-transparent bg-clip-text bg-gradient-to-b from-green-900 to-green-400 dark:from-[#455eb5] dark:to-purple-600'>CHOOSE</span> US?</p>
      </div>
      <div id='cards'>
        <div className='card'>
          <div className='card-border'></div>
          <div className='card-content flex flex-col items-center'>
            <div class="card-image">
              <img src={Bot} alt='bot-logo' className='w-32' />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info flex items-center justify-center">
                <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                  <p className='text-xl font-semibold text-center'>Custom AI Chatbots</p>
                  <p className='text-[#8a8f98] leading-snug text-center'>Our chatbots handle inquiries, requests, management, and support tasks effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-border'></div>
          <div className='card-content flex flex-col items-center'>
            <div class="card-image">
              <img src={Integrate} alt='bot-logo' className='w-32 scale-75	' />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info flex items-center justify-center">
                <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                  <p className='text-xl font-semibold text-center'>Efficient Integration</p>
                  <p className='text-[#8a8f98] leading-snug text-center'>We seamlessly integrate and deploy chatbot solutions into your existing systems and platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-border'></div>
          <div className='card-content flex flex-col items-center'>
            <div class="card-image">
              <img src={Enhancement} alt='bot-logo' className='w-32 scale-75' />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info flex items-center justify-center">
                <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                  <p className='text-xl font-semibold text-center'>Continued Improvements</p>
                  <p className='text-[#8a8f98] leading-snug text-center'>We continuously improve performance and guest satisfaction through monitoring, analysis, and user feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-border'></div>
          <div className='card-content flex flex-col items-center'>
            <div class="card-image">
              <img src={Personalized} alt='bot-logo' className='w-32 scale-75' />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info flex items-center justify-center">
                <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                  <p className='text-xl font-semibold text-center'>Personalized Experience</p>
                  <p className='text-[#8a8f98] leading-snug text-center'>Customized chatbot solutions tailored to your brand. Personalized responses for a seamless guest experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-border'></div>
          <div className='card-content flex flex-col items-center'>
            <div class="card-image">
              <img src={Time} alt='bot-logo' className='w-32 scale-[0.7]' />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info flex items-center justify-center">
                <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                  <p className='text-xl font-semibold text-center'>Save Time & Money</p>
                  <p className='text-[#8a8f98] leading-snug text-center'>With the help of AI Chatbots,  you can focus on more important tasks, while maximizing efficiency and achieving optimal results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-border'></div>
          <div className='card-content flex flex-col items-center'>
            <div class="card-image">
              <img src={Scale} alt='bot-logo' className='w-32 scale-75' />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info flex items-center justify-center">
                <div class="card-info-title text-white flex flex-col gap-1 w-[90%]">
                  <p className='text-xl font-semibold text-center'>Scalable AI Tools</p>
                  <p className='text-[#8a8f98] leading-snug text-center'>Our AI tools seamlessly scale alongside your business growth, ensuring continued support and efficiency as your needs evolve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonials with Stats --> */}
      <div class="max-w-[85rem] px-4 pt-24 sm:px-6 lg:px-8 lg:pb-2 lg:pt-24 mx-auto font-display">
        {/* <!-- Grid --> */}
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
          <div class="lg:col-span-5 lg:col-start-1">
            {/* <!-- Title --> */}
            <div class="mb-8">
              <h2 class="text-center lg:text-left mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-gray-200">
                It's all about <span class="text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-[#455eb5] dark:to-purple-600">efficiency</span>.
              </h2>
              <p class="text-center lg:text-left text-gray-600 dark:text-gray-400">
                Experience instant access through a streamlined automated process. Our core priority revolves around rapid response times to empower your operations promptly.
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Blockquote --> */}
            <blockquote class="relative">
              <svg class="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-800" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
              </svg>

              <div class="relative z-10">
                <p class="text-left text-xl italic text-gray-800 dark:text-white">
                  You’re either the one that creates the automation or you’re getting automated.”
                </p>
              </div>

              <footer class="mt-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/3276311659/9a5ac16a84dc44337c3e09186273ada9_400x400.png" alt="GitHub Cofounder" />
                  </div>
                  <div class="grow ml-4">
                    <div class="font-semibold text-gray-800 dark:text-gray-200 text-left">Tom Preston-Werner</div>
                    <div class="text-xs text-gray-500 text-left">Cofounder of GitHub</div>
                  </div>
                </div>
              </footer>
            </blockquote>
            {/* <!-- End Blockquote --> */}
          </div>
          {/* <!-- End Col --> */}

          <div class="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
            <div class="space-y-6 sm:space-y-8">
              {/* <!-- List --> */}
              <ul class="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden dark:divide-gray-700">
                <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                    $2.02T+
                  </div>
                  <p class="text-left text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Artificial intelligence market size is projected to grow by 2030.
                  </p>
                </li>

                <li class="text-left flex flex-col -m-0.5 p-4 sm:p-8">
                  <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                    <svg class="w-4 h-4 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor" />
                    </svg>
                    95%
                  </div>
                  <p class="text-left text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Of queries are resolved in the 1st conversation
                  </p>
                </li>

                <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                    <svg class="w-4 h-4 text-blue-600 rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 14.4452C9 14.9504 8.55229 15.36 8 15.36C7.44772 15.36 7 14.9504 7 14.4452V3.38868L1.70711 8.23079C1.31658 8.58806 0.683417 8.58806 0.292893 8.23079C-0.0976311 7.87353 -0.0976311 7.29429 0.292893 6.93703L7.11612 0.694919C7.60427 0.248339 8.39573 0.248341 8.88388 0.694919L15.7071 6.93703C16.0976 7.29429 16.0976 7.87353 15.7071 8.23079C15.3166 8.58806 14.6834 8.58806 14.2929 8.23079L9 3.38868V14.4452Z" fill="currentColor" />
                    </svg>
                    15.3%
                  </div>
                  <p class="text-left text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Churn Rate Reduction (loss of customers)
                  </p>
                </li>

                <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                    66%
                  </div>
                  <p class="text-left text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Of clients will no longer wait more than 2 minutes for assistance
                  </p>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Testimonials with Stats --> */}
      <div className='pt-20'>
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-6 mx-auto">
          {/* <!-- Title --> */}
          <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center">
            <h2 class="text-xl text-gray-600 dark:text-gray-400 pb-12 lg:pb-0">Powered with the best in the industry</h2>
          </div>
          {/* <!-- End Title --> */}

          <div class="flex flex-col items-center md:flex-row justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
            <svg class="py-3 lg:py-5 w-16 scale-[1.7] md:scale-[1] h-auto md:w-20 lg:w-32 mx-auto sm:mx-0 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607"><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor" /></svg>

            <img class="py-3 lg:py-5 w-16 scale-[1.7] md:scale-[1] h-auto md:w-20 lg:w-28 mx-auto sm:mx-0 text-gray-500" src={VoiceflowSVG} alt="" />

            <img class="py-3 lg:py-5 w-16 scale-[1.5] md:scale-[1] h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" src={ZapierSVG} alt="" />

            <img class="py-3 lg:py-5 w-16 scale-[1.3] md:scale-[1] h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" src={StripeSVG} alt="" />

            <img class="py-3 lg:py-5 w-16 scale-[3] md:scale-[1] h-auto md:w-20 lg:w-40 mx-auto sm:mx-0 text-gray-500" src={BotpressSVG} alt="" />

            {/* <img class="py-3 lg:py-5 w-16 md:scale-[1] h-auto md:w-20 lg:w-40 mx-auto sm:mx-0 text-gray-500" src={StackaiSVG} alt="" /> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Whyus