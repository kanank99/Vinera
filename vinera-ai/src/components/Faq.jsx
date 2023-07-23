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
    <div className={`dark:bg-[#000212] min-h-[500px] font-display pb-20`}>
        <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
        {/* Code for FAQ  */}
        <div className='flex flex-col items-center justify-center'>
            <div className='text-[#f7f7f7] text-4xl lg:text-5xl w-full my-20'>
                <p className='font-bold'>FREQUENTLY ASKED <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-blue-500 dark:to-purple-600'>QUESTIONS</span></p>
            </div>
            {/* question 1 */}
            <div className='flex flex-col max-w-[800px] px-20 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer1(!showAnswer1)}>
                <div className='flex flex-col w-full'>
                    <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                        <hr className='absolute left-0 top-0 border-[#414247] w-full' />
                        <p className='text-3xl text-[#f7f7f7] font-semibold text-left'>What is an AI chatbot?</p>
                        <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer1 ? '-rotate-90' : null}`} />
                    </div>
                    <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer1 ? 'block' : 'hidden'} transition-all mb-4`}>An AI chatbot is a computer program that simulates human conversation through voice commands or text chats or both. Chatbot, short for chatterbot, is an Artificial Intelligence (AI) feature that can be embedded and used through any major messaging applications.</p>
                </div>
            </div>
            {/* question 2 */}
            <div className='flex flex-col max-w-[800px] px-20 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer2(!showAnswer2)}>
                <div className='flex flex-col w-full'>
                    <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                        <hr className='absolute left-0 top-0 border-[#414247] w-full' />
                        <p className='text-3xl text-[#f7f7f7] font-semibold text-left'>What is an AI chatbot?</p>
                        <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer2 ? '-rotate-90' : null}`} />
                    </div>
                    <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer2 ? 'block' : 'hidden'} transition-all mb-4`}>An AI chatbot is a computer program that simulates human conversation through voice commands or text chats or both. Chatbot, short for chatterbot, is an Artificial Intelligence (AI) feature that can be embedded and used through any major messaging applications.</p>
                </div>
            </div>
            {/* question 3 */}
            <div className='flex flex-col max-w-[800px] px-20 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer3(!showAnswer3)}>
                <div className='flex flex-col w-full'>
                    <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                        <hr className='absolute left-0 top-0 border-[#414247] w-full' />
                        <p className='text-3xl text-[#f7f7f7] font-semibold text-left'>What is an AI chatbot?</p>
                        <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer3 ? '-rotate-90' : null}`} />
                    </div>
                    <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer3 ? 'block' : 'hidden'} transition-all mb-4`}>An AI chatbot is a computer program that simulates human conversation through voice commands or text chats or both. Chatbot, short for chatterbot, is an Artificial Intelligence (AI) feature that can be embedded and used through any major messaging applications.</p>
                </div>
            </div>
            {/* question 4 */}
            <div className='flex flex-col max-w-[800px] px-20 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer4(!showAnswer4)}>
                <div className='flex flex-col w-full'>
                    <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                        <hr className='absolute left-0 top-0 border-[#414247] w-full' />
                        <p className='text-3xl text-[#f7f7f7] font-semibold text-left'>What is an AI chatbot?</p>
                        <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer4 ? '-rotate-90' : null}`} />
                    </div>
                    <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer4 ? 'block' : 'hidden'} transition-all mb-4`}>An AI chatbot is a computer program that simulates human conversation through voice commands or text chats or both. Chatbot, short for chatterbot, is an Artificial Intelligence (AI) feature that can be embedded and used through any major messaging applications.</p>
                </div>
            </div>  
            {/* question 5 */}
            <div className='flex flex-col max-w-[800px] px-20 md:px-0 w-full cursor-pointer select-none' onClick={() => setShowAnswer5(!showAnswer5)}>
                <div className='flex flex-col w-full'>
                    <div className='relative flex flex-row justify-between items-center py-7 w-full'>
                        <hr className='absolute left-0 top-0 border-[#414247] w-full' />
                        <p className='text-3xl text-[#f7f7f7] font-semibold text-left'>What is an AI chatbot?</p>
                        <img src={Dropdown} alt='dropdown' className={`w-6 h-6 transition-all ${showAnswer5 ? '-rotate-90' : null}`} />
                    </div>
                    <p className={`text-[#8a8f98] leading-snug text-left ${showAnswer5 ? 'block' : 'hidden'} transition-all mb-4`}>An AI chatbot is a computer program that simulates human conversation through voice commands or text chats or both. Chatbot, short for chatterbot, is an Artificial Intelligence (AI) feature that can be embedded and used through any major messaging applications.</p>
                </div>
            </div>          
        </div>
        
    </div>
  )
}

export default Faq