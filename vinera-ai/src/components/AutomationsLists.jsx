import React from 'react'
import { useState } from 'react';
import AutomationListItem from './AutomationListItem'

function AutomationsLists() {

    const [dontShowCustomerService, setDontShowCustomerService] = useState(true);

    return (
        <div className='mt-[56px] max-w-[1008px] mx-auto px-[24px] bg-[#060606] font-display font-[510]'>
            <div className='flex flex-col items-start'>
                <div className='text-[#f7f8f8] text-[24px] leading-[1.4] tracking-[-0.019px]'><a id="customer-service" class="sc-a3a2bb76-0 dhWvXK sc-d3209b9b-0 dvdUyL" rel="noopener" href="/automations#engineering">Customer Service</a></div>
                <div className='text-[#8a8f98] mt-[4px] mb-[32px] leading-[1.6] tracking-[-0.011px] font-normal text-left'>Elevate customer satisfaction with personalized support.</div>
                <div className='w-full'>
                    <ul className='automation-list-grid' data-overflow-hidden={dontShowCustomerService}>
                        <AutomationListItem
                            name="Zendesk"
                            description="Optimize customer interactions with streamlined support solutions"
                            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWCH-XDgsY1D6xkTBJNuVlleZV0vmYsV_9rSCNqRO&s"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Intercom"
                            description="Personalize communication for enhanced engagement"
                            photo="https://www.mailerlite.com/assets/integration/intercom-icon.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Wix Answers"
                            description="Simplify support with efficient Wix Answers tools"
                            photo="https://cdn-icons-png.flaticon.com/512/5968/5968770.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Freshdesk"
                            description="Automate stronger relationships with customer support tools"
                            photo="https://yt3.googleusercontent.com/tk47_rvk-fjQuEd9VHkEXPaiE-uHt3i514xS0aWNpTvac7YILyk1zFgEGB_TAJSZLvgsbB5VTA=s900-c-k-c0x00ffffff-no-rj"
                        />
                        <AutomationListItem
                            name="Tidio"
                            description="Boost engagement with AI-powered live chat"
                            photo="https://play-lh.googleusercontent.com/5-eR3PalWOR2dp-Kr--rNi_uqeE7OUfmxPugO6QNxGpq-MMqkMNHe2f0Osair0nxHyg"
                        />
                        <AutomationListItem
                            name="Drift"
                            description="Drive engagement through conversational marketing and sales "
                            photo="https://media.glassdoor.com/sqll/1145026/drift-squarelogo-1583960659114.png"
                        />
                        <AutomationListItem
                            name="TeamWork Desk"
                            description="Streamline support operations with powerful desk software"
                            photo="https://play-lh.googleusercontent.com/tW7VUD6ee2aEov2ifbTlib5AV4bSNq6GHY038-f3zNLk8uC4t1FvscV4AqAy57DrM0U"
                        />
                        <AutomationListItem
                            name="Canny"
                            description="Collect and organize customer feedback with ease"
                            photo="https://cdn.sanity.io/images/ornj730p/production/5320afb074f86bd08bf2c3a34333b721ea984856-640x640.png?w=256&q=95&auto=format&dpr=2"
                        />
                        <AutomationListItem
                            name="Featurebase"
                            description="Automate public feedback suggestion with roadmap boards"
                            photo="https://cdn.sanity.io/images/ornj730p/production/4c40543d75cb9ee03c6afc8c2691897eb367d4a4-640x640.png?w=256&q=95&auto=format&dpr=2"
                        />
                        <AutomationListItem
                            name="DIxa"
                            description="Create effortless service experiences for teams and customers"
                            photo="data:image/png;base64,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"
                        />
                        <AutomationListItem
                            name="Olark"
                            description="Elevate engagement with seamless live chat solutions"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1145823100324302868/Screenshot_2023-08-28_at_22.51.49.png"
                        />
                        <AutomationListItem
                            name="Kayako"
                            description="Automate workflows. Collaborate with your team from a shared inbox"
                            photo="https://www.x-cart.com/img/26002/kayako_module_icon_252_252-raw.png"
                        />
                        <AutomationListItem
                            name="Groove"
                            description="delight their customers with awesome, fast, personal support"
                            photo="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/603d37b0-35b9-4592-a3b0-46acb8ccd0f8.png?w=80&h=80&fit=max&dpr=3&auto=format&q=50"
                        />
                        <AutomationListItem
                            name="WhatsApp"
                            description="Connect with customers through efficient communication"
                            photo="https://img.freepik.com/vector-premium/icono-cuadrado-logotipo-whatsapp_444390-16602.jpg?w=2000"
                        />
                        <AutomationListItem
                            name="And many more..."
                            description="We have over 100+ integrations to choose from!"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1145043341164155032/Vinera-3.png"
                            isFavorite={true}
                        />
                        {dontShowCustomerService ?
                            <div className="automation-list-showmore-shadow"><button className="automation-list-showmore-button" onClick={() => setDontShowCustomerService(!dontShowCustomerService)}>Show more</button></div>
                            : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AutomationsLists

// Gmail lead gen
// "https://cdn-icons-png.flaticon.com/512/732/732200.png"
// Facebook
// "https://cdn-icons-png.flaticon.com/512/733/733547.png"