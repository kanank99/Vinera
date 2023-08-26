import React from 'react'
import Integrations from './Integrations';

function Automations(props) {
    return (
        <div>
            <Integrations darkMode={props.darkMode} />
            {/* build a sticky header */}
            {/* // bg-[#131315] */}
            <div className='sticky z-50  top-[72px] py-[32px] text-white font-display'>
                <div className='relative flex  items-center max-w-[1008px] w-full mx-auto'>

                    <div className='flex items-center justify-between gap-20 lg:gap-2 w-full lg:overflow-hidden overflow-x-scroll'>
                        <div className='flex items-center gap-2'>
                            <img className='' alt="" data-nosnippet="true" data-loaded="true" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" class="sc-5f7b9831-0 dqWqYY" src="https://cdn.sanity.io/images/ornj730p/production/aae450ebc16ab7686096745ac69aafabac309c41-64x64.png?q=95&amp;auto=format&amp;dpr=2" />
                            <h1 className='whitespace-nowrap'>Customer Service</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img className='' alt="" data-nosnippet="true" data-loaded="true" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" class="sc-5f7b9831-0 dqWqYY" src="https://cdn.sanity.io/images/ornj730p/production/aae450ebc16ab7686096745ac69aafabac309c41-64x64.png?q=95&amp;auto=format&amp;dpr=2" />
                            <h1 className='whitespace-nowrap'>Lead Generation</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img className='' alt="" data-nosnippet="true" data-loaded="true" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" class="sc-5f7b9831-0 dqWqYY" src="https://cdn.sanity.io/images/ornj730p/production/aae450ebc16ab7686096745ac69aafabac309c41-64x64.png?q=95&amp;auto=format&amp;dpr=2" />
                            <h1 className='whitespace-nowrap'>Data</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img className='' alt="" data-nosnippet="true" data-loaded="true" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" class="sc-5f7b9831-0 dqWqYY" src="https://cdn.sanity.io/images/ornj730p/production/aae450ebc16ab7686096745ac69aafabac309c41-64x64.png?q=95&amp;auto=format&amp;dpr=2" />
                            <h1 className='whitespace-nowrap'>Marketing</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img className='' alt="" data-nosnippet="true" data-loaded="true" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" class="sc-5f7b9831-0 dqWqYY" src="https://cdn.sanity.io/images/ornj730p/production/aae450ebc16ab7686096745ac69aafabac309c41-64x64.png?q=95&amp;auto=format&amp;dpr=2" />
                            <h1 className='whitespace-nowrap'>Process Automations</h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Automations