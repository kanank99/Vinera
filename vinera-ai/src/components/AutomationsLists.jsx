import React from 'react'
import { useState } from 'react';
import AutomationListItem from './AutomationListItem'

function AutomationsLists() {

    const [dontShowCustomerService, setDontShowCustomerService] = useState(true);
    const [dontShowLeadGen, setDontShowLeadGen] = useState(true);
    const [dontShowMarketing, setDontShowMarketing] = useState(true);

    return (
        <div className='mt-[56px] max-w-[1008px] mx-auto px-[24px] bg-[#060606] font-display font-[510]'>
            <div className='flex flex-col items-start'>
                <div className='text-[#f7f8f8] text-[24px] leading-[1.4] tracking-[-0.019px]'><a id="customer-service" rel="noopener" href="/automations#customer-service">Customer Service</a></div>
                <div className='text-[#8a8f98] mt-[4px] mb-[32px] leading-[1.6] tracking-[-0.011px] font-normal text-left'>Elevate customer satisfaction with personalized support</div>
                <div id="customer-service" className='w-full'>
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
                            description="Delight their customers with awesome, fast, personal support"
                            photo="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/603d37b0-35b9-4592-a3b0-46acb8ccd0f8.png?w=80&h=80&fit=max&dpr=3&auto=format&q=50"
                        />
                        <AutomationListItem
                            name="WhatsApp"
                            description="Connect with customers through efficient communication"
                            photo="https://img.freepik.com/vector-premium/icono-cuadrado-logotipo-whatsapp_444390-16602.jpg?w=2000"
                        />
                        <AutomationListItem
                            name="And many more..."
                            description="We have over 1000+ integrations to choose from!"
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

            <div id="lead-generation" className='flex flex-col items-start '>
                <div className='text-[#f7f8f8] text-[24px] leading-[1.4] tracking-[-0.019px] mt-[72px] max-[700px]:mt-[48px]'><a id="lead-generation" rel="noopener" href="/automations#lead-generation">Lead Generation</a></div>
                <div className='text-[#8a8f98] mt-[4px] mb-[32px] leading-[1.6] tracking-[-0.011px] font-normal text-left'>Power up your pipeline with high-quality leads</div>
                <div className='w-full'>
                    <ul className='automation-list-grid' data-overflow-hidden={dontShowLeadGen}>
                        <AutomationListItem
                            name="Salesforce"
                            description="Automate sales processes with powerful CRM solutions"
                            photo="https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg?w=264&h=264&crop=1"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Mailchimp"
                            description="Simplify email campaigns with powerful marketing automation"
                            photo="https://cdn.iconscout.com/icon/free/png-256/free-mailchimp-2752128-2284945.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Hubspot"
                            description="Enhance marketing efforts with HubSpot's integrated solutions"
                            photo="https://ps.w.org/leadin/assets/icon-256x256.png?rev=2890259"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Click Funnels"
                            description="Elevate marketing with Click Funnels' conversion-focused tools"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1146164179657556029/Screenshot_2023-08-29_at_21.27.00.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Typeform"
                            description="Streamline surveys and forms with interactive solutions"
                            photo="https://uploads-ssl.webflow.com/635637c5d13ee9bd2b5feb65/635a652271ea3301b3b3f570_6357d768479d2e2c6f54a2aa_typeform%2520(1).png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="JotForm"
                            description="Effortlessly manage forms with streamlined solutions"
                            photo="https://www.jotform.com/resources/assets/icon/min/jotform-icon-dark-400x400.png"
                        />
                        <AutomationListItem
                            name="Pipedrive"
                            description="Optimize sales processes with efficient CRM management"
                            photo="https://pageflows.com/media/logos/pd.jpg"
                        />
                        <AutomationListItem
                            name="Gravity Forms"
                            description="Simplify forms with intuitive solutions"
                            photo="data:image/png;base64,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"
                        />
                        <AutomationListItem
                            name="SurveyMonkey"
                            description="Gather insights using user-friendly survey tools"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1146170605167706142/sOcZJ4t9U7d5JhXJpxoU9nUdf0uO8XUiqfynEpyTbU89E4ufzpbtvMTj2itDT6oytNFQKV8NtswtfWTkvhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgPd5B7jhWrv8B68wY8PY9KbXAAAAAElFTkSuQmCC.png"
                        />
                        <AutomationListItem
                            name="Leadpages"
                            description="Optimize conversions with powerful landing page "
                            photo="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERUSEhUSFRIRHBoVEhoWGRgcEhwYGBgZGRgaGBocJTwlKSAvHxoZKzosKy8/NjU1HCQ7QDtAPy40NTEBDAwMEA8QHxISHzcrISY0NDY2NDY2NDc/MTE0NDQ0NDExMTQ0NDY3NDQ0NDQ0NDE3NDc9NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUCAwj/xAA0EAACAQIEBAMHBQEAAwEAAAAAAQIDEQQFITEGEmGBE0FxI0JRYoKRoSIycrHBUrLR8WP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQQFAgYD/8QALhEBAAECAwUJAAIDAQAAAAAAAAECAwQRIQUxQVGBEiJhcZGhwdHw4fEjQoIT/9oADAMBAAIRAxEAPwC5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8uSW4Ho+c5qKbbSS1beiS6si2d8bYaheNL29Rafofs0+s/wD1cr/OM/xWKftZ/o8oQ/TTXbz9Xc0MNsy9f1nu085+I/rzFu4HN8PXk40atOco7qMlf1S811Wh0CgIVJRkpRbjKOqcW1JP4pol+Scd1qdoYleNDbmVlVXr5S72fUsYjY9yjW1Pajlun6kWgDn5Xm+HxUeajOMrfuW04/yi9UdAyJiaZymMpAAEAAAAAAAAAAAAAAAAAAAAAAAAAYuR/POKsPhLxk3Oqvchurq65nsvLfXoV7nfFeKxV4uXh0n7kG1dfNLd/wBdC7htn3r+sRlTzn4jfP7UT3POMcLhrxi/Fqr3YNcqfzT2Xa76Fe51xNicVdTlyU37kNIfV5y7/Y4xk9BhtnWbGuWdXOfiOH7VLBkA0AAAHuhXnTkpU5SjKP7ZRbUl6NEzyXj6cbRxUeeO3PFJTX8o7PtbuQkwVsRhbV+MrkZ+PGOovTLsyo4iHPRnGcfO266ST1T9TdKEwuKqUpKdKc4SW0otp+j+K6Mm+ScftWhi43//AEgv/OP+x+xg4nZN233rXej3/n9ohYgNbB4unWgqlKUZwls1sbJk7tJAAAAAAAAAAAAAAAAAAAADAEez3hTD4tubTp1n78POysuZbP8AvqV3nXC+Kwt5Sjz0178LuP1LePfTqWLm/FmEw0uSUnOd7SjTtJx+PM72Xpe/Q6OW5pQxMOajUjNeaX7l0lF6ruaOHxeKw1EVTEzR45+08P2go4yWvnXBmGxF5QXg1HreC/Q380Nu6syvs54dxWEbdSN4eU46w7vddzdw20bN/SJyq5T8c/2iXJB5uei+AAAAzSpSnJQhGUpS0jGKbk/RImWScBVZ2nipeHDfki06j/k9o/nsV7+KtWIzuT04+giGGw9SpJQpwlKUtoxTcvx5E2yTgBu08XKy35IP9X1S2XovuTbLcroYaHLRhGC82v3PrKT1fc5eYcY4KjNU3Nzd7TdNKUY/yd/wrsw7u0sRfmaMPTMeWs/UftUOzgsFToQVOlFQhHZLbXdv4vqzbNPAY+lXgp0pxnF+cXt0a3T6M3DHnPOc9/7eAAIAAAAAAAAAAAAAAAAHLz3OKeDpeLUU5Jvlioq7cmm0r7LZ6srTOuMMTibxi/BpPTlg3zNfNPd9rItqtSjOLjOMZRlo1JJprqmQzO+AqVS88LLwpf8AEruk/R7x/K6Gjs+9hbdX+anXhO+I6cPPXoK2sfXDYidOSnTnKMo7Si2n+D75lldfDS5K0JRb/a94S/jJaM1D1NNVNynONYnrEpTnJeP5q0MWuZbc8FaS6yjs+32J1gsbRxEOelOFSD0dte0k9U+jKLPvg8ZVoyU6U5wkvOLt2fk10Zk4nZFq5ra7s+38dPQWVnnA+HrXnQ9jUetor2T9Y+Xb7EAzfI8ThXatBqL0U46036S/x2ZLsk4/2hi428vEgtPqjv3j9ia0K9HEU7wlTq05aO1pRfxTX+Mp04rF4KezdjOnx+KvifRCi4RcmoxTcpaRSV5N/BJEuyTgWvVtPEN0YPXl0dVr02j316FgYHJsNh5SnRpU4Slu0tfRN7LotDTzvijDYS8ZS5qi2hCzn9Xku53d2pevT/54enL3n6gbWVZNh8LHlowUW95PWpL1k9e2xz874uw2FvFPxaq9yD0T+eWy/voQLOuL8VibxUvCpP3YN3a+ae77WXQj53Y2RVXPbxFWvLPP1n69Uu3nXFGKxV4uXJTfuQuo2+Z7y76dDh2Mg2rVqi1T2aIygbGCx1WhPnpTnCXxi9+jWzXRk84f468SUaWIj+qTUIzgtG5Oy5o+WvmvscHJODMTiLSqLwab85r9bXyw/wBdiwcm4dw2FXs4Xn5znrUffy9FYx9pYjB1RMTHaq5xw/6+NUOyjIB58AAAAAAAAAAAAAAHxxFaNOEpyvywTk7Jt2Su7JFc53x7VneGGj4cXpzys6j/AIrZfl+hYw+Fu4icrcbt88IE4zXOsPhY81aoot/titZy/jFa99jg4Dj7DTqOFSM6Ub2jOVpRa+bl/b+V1KzrVZzk5zlKUpaylJtyfq2eTct7GtRTlXMzPPdl5R9i9Zwo4inZqFSlNdJQa/ohmd8AQleeElyPfkm24fTLdd79iGZVnOIwsuajNxT1lF6wl6xenfcn2ScdUKtoYheDN+9vRffePfTqUqsHi8FPbsznHh80/SVdY/AVsPPkrQlCXkpLR9YtaNejNcvTE4ajiIcs406kJaq6Tj0af+ohGd8ANXnhJX8/DqP8Ql/kvuXcNte3X3bsdmefD+BAjZy/Ma2Hnz0ZyhLzt+19JRej7nzxeFq0puFWE4SW6krP1XxXVHyNaYpuU5TrE9YkSDMuMsbXhyc8aataTppxlL1le67WI8ZPJxasW7UZW6YjyHoxc7eS8L4rFWlGPJTfvzuo2+Vby7adSwsk4RwuGtK3i1VrzzWz+SOy/vqVMTtKzY031co+Z4ftBAsk4RxWJtJx8Km/fmndr5Y7v8LqWFkvC+FwlpRjz1F787OX0rZdjczXOcPhY81aai3rGK1nL+MVr32IBnfHVereOHXgwfvaOq++0e2vUyZrxmPnKnSj0j13z5aoTvOM/wANhV7Wa591COs328vV6HGyvjzDVZ8lWLotu0XJ80GvLmklo/XTqVfOTk3KTbk9W22238W2YL1vY1mKMqpmZ57vSPtK/ac1JKUWmnqmndNdGfQpHJ8+xOFfsp/o84S1pv6fL1VmWRwxxTDGt03CUKsY80lvBq6V4y9WtH+TKxWzruHiat9POOHnH9oSYAFAAAAAAAAAAABgjmd8I4XFXkl4VV+/BKzfzR2f4fUkgO7dyu3V2qJykUznfDGKwt5Sjz0178NY2+Zbx76dTiH6AaRFc64Lw2IvKn7Go9bwXs2/mht3Vjbw22P9b8dY+Y+vQVUYOtnPD2JwjbqQvT8px1h3fl3OSbdu5Rcp7VE5x4JdPJ8+xOFfspvk84S1g+3l6qxYOScb4avaNX2NR6fqd6bfSfl3sVYYKmJ2fZv6zGU84/ai88fl9DEw5a0I1IPVX3V/OLWq9UyCZ3wDON54SXPHfkm0p/TLZ97epwMm4mxOFsoS5qa9yesPp849iwck4xwuJtGT8Gq9OWo1yt/JLZ+js+hkVWMXge9ROdPt1jh5+6Ff5dwtjK83BUpQUXacqicIL76vtcnmScFYbD2lUXjVFrea9mn8sNu7ud/HY6jQhz1ZxhH4ye/RLdvoiCZ1x83eGEjyrbnmlzesY7Lv9hOIxmO7tuMqeOWkdZ+IE4zHM6GGhzVpxgvJP9z6RitX2IFnfHtSd4YVeHHbnlZ1X6LaP57EPxOJqVJOdSUpSlvKTbZ8i/htkWretzvT7enHr6D3WqynJynKUpS1lKTbk/Vs8gzSpSnJQhGUpS0jGKbk30S1NXSmPCEvJ9MPQnUko04SlKW0YpuX2RMMk4DqztPFS8KG/JGzqv1e0fy/QnuWZVQw0eWjCMV5tayf8pPVmVidrWrfdt96fb149PVCD5LwBKVp4uXIt+SDTn9Utl2v6k7wGX0cPDkowjCPwitX1b3b6s3QYOIxV2/OdyenD0AAFcAAAAAAAAAAAAAAAAeJwTVmk09GnsyJZ3wNh6150PY1N7JXpN9Y+Xb7EwB9LV65aq7Vucp/eoo/NsjxOFlatBqN7Rktab9JL+nZnPL7q0ozi4ySlGWjTScWuqZDs74Co1Lzwz8KX/Lu6T9POPa66G5htsUz3b0ZeMbusfQrUwzdzPKsRhpcteEo3/a94S/jJaP+zSNqmumuO1TOceCXqpVlK3NKUuVWjzNuy+CvsjAMf/DqIy0gZEIttJJtvRJK7b+CS8yT5JwVicRadT2NN63kvatdIeX1fZlg5Rw/hsIvZQXPs5y1qPv5LorIzMTtWza0p71Xhu6z9CCZJwLiK1p134EP+dHVa9No99ehP8pyTD4WNqMFFvSUnrOXrJ69tjp2MmBiMZexE9+dOUbv56oAAVQAAAAAAAAAAAAAAAAAAAAAAAAAAHwxGHhUi4VIxnCWjjJJxfqmQrO+AYSvPCy5Jb+HNtwf8ZbrvfsTwH2sYi7YnO3OXz5wKly3gfGVJuNSKowi7OUmm3/CMXr3aRPcl4Yw2FtKEeap/wBz1n9PlHsd0H2xGOvX9KpyjlGn99RhIyAUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
                        />
                        <AutomationListItem
                            name="HoneyBook"
                            description="Enhance business processes with efficient management tools"
                            photo="https://media.licdn.com/dms/image/C560BAQETokWWZwS4SA/company-logo_200_200/0/1678111764522?e=2147483647&v=beta&t=1ZKXClApOh9PlW9IWCjmjqb6fbfyjSUSIfujO9qkmFo"
                        />
                        <AutomationListItem
                            name="Formstack"
                            description="Automate workflows. Save hours. Deliver frictionless experiences"
                            photo="https://play-lh.googleusercontent.com/d41LSxhTxSNjB2Ee8C9tM1iwSANFr0B_YY72BDBUdNBFyntAVdt_vVoFUSzmJPjnLB3L"
                        />
                        <AutomationListItem
                            name="Instapage"
                            description="Power your campaigns and turn more ad clicks into customers"
                            photo="https://ps.w.org/instapage/assets/icon-256x256.jpg?rev=1491646"
                        />
                        <AutomationListItem
                            name="DocuSign"
                            description="Simplify agreements with digital signing solutions"
                            photo="https://assets-global.website-files.com/633c59f8e08675a520e9f0ae/6345a42c2a73234ee04669dd_sig-icon.svg"
                        />
                        <AutomationListItem
                            name="And many more..."
                            description="We have over 1000+ integrations to choose from!"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1145043341164155032/Vinera-3.png"
                            isFavorite={true}
                        />
                        {dontShowLeadGen ?
                            <div className="automation-list-showmore-shadow"><button className="automation-list-showmore-button" onClick={() => setDontShowLeadGen(!dontShowLeadGen)}>Show more</button></div>
                            : null
                        }
                    </ul>
                </div>
            </div>

            <div id="data" className='flex flex-col items-start '>
                <div className='text-[#f7f8f8] text-[24px] leading-[1.4] tracking-[-0.019px] mt-[72px] max-[700px]:mt-[48px]'><a id="data" rel="noopener" href="/automations#data">Data</a></div>
                <div className='text-[#8a8f98] mt-[4px] mb-[32px] leading-[1.6] tracking-[-0.011px] font-normal text-left'>Unlock insights with clean and comprehensive data</div>
                <div className='w-full'>
                    <ul className='automation-list-grid auto-height'>
                        <AutomationListItem
                            name="SEMrush"
                            description="Automate SEO, content marketing, competitor research, PPC"
                            photo="https://cdn.semrush.com/__static__/semrush-logo-700.jpg"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Google Analytics"
                            description="Automate insights with data-driven solutions"
                            photo="https://img.freepik.com/vector-premium/icono-aplicacion-google-analytics-hecho-manualmente-basado-vector_952415-3.jpg?w=2000"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Databox"
                            description="Connect your data from any tool and track it from any device"
                            photo="https://www.getharvest.com/hs-fs/hubfs/integrations/databox-icon@2x.png?width=300&name=databox-icon@2x.png"
                        />
                        <AutomationListItem
                            name="Zoho Analytics"
                            description="Connect, analyze, visualize data, and uncover insights swiftly"
                            photo="https://play-lh.googleusercontent.com/T2l8oIm5SbiLXJgFEsolqwG_10yI_OSOvnrn8vJM4-1xyde6dMzjnkUN0QHfNXrODyE"
                        />
                        <AutomationListItem
                            name="SegMetrics"
                            description="Lead value and lifetime revenue attribution insights"
                            photo="https://segmetrics.io/wp-content/uploads/2016/02/cropped-icon-lg.png"
                        />
                        <AutomationListItem
                            name="And many more..."
                            description="We have over 1000+ integrations to choose from!"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1145043341164155032/Vinera-3.png"
                            isFavorite={true}
                        />
                    </ul>
                </div>
            </div>

            <div id="marketing" className='flex flex-col items-start '>
                <div className='text-[#f7f8f8] text-[24px] leading-[1.4] tracking-[-0.019px] mt-[72px] max-[700px]:mt-[48px]'><a id="marketing" rel="noopener" href="/automations#marketing">Marketing</a></div>
                <div className='text-[#8a8f98] mt-[4px] mb-[32px] leading-[1.6] tracking-[-0.011px] font-normal text-left'>Amplify your brand’s presence with targeted strategies</div>
                <div className='w-full'>
                    <ul className='automation-list-grid' data-overflow-hidden={dontShowMarketing}>
                        <AutomationListItem
                            name="Google Ads"
                            description="Optimize campaigns, automate engagement, and analyze"
                            photo="https://yt3.googleusercontent.com/ytc/AOPolaQL5ukfpY6_FK0NlM8iTuwXJGujT4fAmH1u-bpbwA=s900-c-k-c0x00ffffff-no-rj"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Meta Ads"
                            description="Unite platforms; automate customer engagement across Meta"
                            photo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=2000"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="LinkedIn Ads"
                            description="Build leads, share content, and increase online recognition"
                            photo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="TikTok Ads"
                            description="Make ads that entertain and campaigns that connect"
                            photo="https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Instagram Ads"
                            description="Boost any post to turn it into an ad. Just decide where to send users"
                            photo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="X Ads"
                            description="Reach your target audience with X Ads"
                            photo="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Beehiiv"
                            description="Works as a hybrid of a blog and a newsletter all in one place"
                            photo="https://yt3.googleusercontent.com/f1L2vQEFDQ3YkNI-OHJkx4VsXNCvjW8-owfegcKeFDCgIKqcXGDFzpPiQa8lyX267tyzW4HZmE0=s900-c-k-c0x00ffffff-no-rj"
                        />
                        <AutomationListItem
                            name="Hootsuite"
                            description="Social media management tools that continues to grow"
                            photo="https://www.gartner.com/pi/vendorimages/hootsuite_1657641677121.png"
                        />
                        <AutomationListItem
                            name="Typefully"
                            description="Create content according to the needs of the user"
                            photo="https://pbs.twimg.com/profile_images/1613115484060139521/jpPZ88Rt_400x400.jpg"
                        />
                        <AutomationListItem
                            name="Taplio"
                            description="Leverage the power of AI for LinkedIn"
                            photo="https://x5h8w2v3.rocketcdn.me/wp-content/uploads/2023/07/FS-AFFI5-318-Taplio.png"
                        />
                        <AutomationListItem
                            name="YouTube Ads"
                            description="Ensure your target audience finds you"
                            photo="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000"
                        />
                        <AutomationListItem
                            name="Brevo"
                            description="Build customer relationships across email, SMS, chat, and more"
                            photo="data:image/png;base64,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"
                        />
                        <AutomationListItem
                            name="SalesHandy"
                            description="Scale your cold email outreach, not cost"
                            photo="https://static.crozdesk.com/web_app_library/providers/logos/000/001/277/original/saleshandy-1669203766-logo.png?1669203766"
                        />
                        <AutomationListItem
                            name="Woopra"
                            description="Track, analyze, and optimize the customer journey"
                            photo="https://pbs.twimg.com/profile_images/3416050629/2bbcd4664460852be799797a6b7ceae6_400x400.png"
                        />

                        <AutomationListItem
                            name="And many more..."
                            description="We have over 1000+ integrations to choose from!"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1145043341164155032/Vinera-3.png"
                            isFavorite={true}
                        />
                        {dontShowMarketing ?
                            <div className="automation-list-showmore-shadow"><button className="automation-list-showmore-button" onClick={() => setDontShowMarketing(!dontShowMarketing)}>Show more</button></div>
                            : null
                        }
                    </ul>
                </div>
            </div>

            <div id="process-automations" className='flex flex-col items-start '>
                <div className='text-[#f7f8f8] text-[24px] leading-[1.4] tracking-[-0.019px] mt-[72px] max-[700px]:mt-[48px]'><a id="process-automations" rel="noopener" href="/automations#process-automations">Process Automations</a></div>
                <div className='text-[#8a8f98] mt-[4px] mb-[32px] leading-[1.6] tracking-[-0.011px] font-normal text-left'>Eliminate tedious tasks with automation</div>
                <div className='w-full'>
                    <ul className='automation-list-grid auto-height' data-overflow-hidden={true}>
                        <AutomationListItem
                            name="OpenAI API"
                            description="Build AI-powered chatbots and more"
                            photo="https://ih1.redbubble.net/image.4839005887.4100/st,small,507x507-pad,600x600,f8f8f8.jpg"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Zapier"
                            description="Automate your work. Connect your apps. Elevate your productivity"
                            photo="https://squadcast.fm/wp-content/uploads/2023/01/Zapier-Icon.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Shopify Automations"
                            description="Automate your E-commerce business"
                            photo="https://www.pngitem.com/pimgs/m/519-5199502_integrate-shopify-shopify-experts-logo-hd-png-download.png"
                            isFavorite={true}
                        />
                        <AutomationListItem
                            name="Make"
                            description="Automate your business processes"
                            photo="https://f.hubspotusercontent10.net/hubfs/3778319/__hs-marketplace__/Make-App-Icon-Square-1024x1024-1-1.png"
                        />
                        <AutomationListItem
                            name="Wix Automations"
                            description="Automate your Wix Website's processes"
                            photo="https://cdn-icons-png.flaticon.com/512/5968/5968770.png"
                        />
                        <AutomationListItem
                            name="And many more..."
                            description="We have over 1000+ integrations to choose from!"
                            photo="https://cdn.discordapp.com/attachments/1129180295439065247/1145043341164155032/Vinera-3.png"
                            isFavorite={true}
                        />
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