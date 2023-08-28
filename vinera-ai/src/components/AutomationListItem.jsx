import React from 'react'

function AutomationListItem(props) {

    console.log(props.name)

    return (
        <li className='list-none p-0 mt-[16px] md:mt-0'>
            <div className='hover:bg-[#222326] hover:border-[#313035] automation-list-item'>
                <div className='automation-list-item-icon-grid-area' data-area="icon">
                    <div class="relative flex h-[32px] w-[32px]">
                        <img className='rounded-lg shrink' src={props.photo} alt="GitHub icon" width="256" height="256" />
                        {props.isFavorite ?
                            <div class="automation-list-item-icon-div">

                                <svg className='h-[10px] w-[10px]' width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M11.16 4.54a.673.673 0 0 0-.633-.438H7.788a.226.226 0 0 1-.212-.15l-.983-2.767A.67.67 0 0 0 5.96.75a.678.678 0 0 0-.633.435l-.002.008-.98 2.76a.223.223 0 0 1-.212.149h-2.74a.678.678 0 0 0-.635.44.666.666 0 0 0 .202.744l2.332 1.921a.223.223 0 0 1 .07.243l-.98 2.918a.666.666 0 0 0 .243.753.678.678 0 0 0 .796-.001l2.405-1.751a.226.226 0 0 1 .266 0l2.405 1.75a.679.679 0 0 0 1.042-.335.666.666 0 0 0-.002-.416l-.98-2.92a.222.222 0 0 1 .07-.243l2.336-1.923a.67.67 0 0 0 .195-.743Z" fill="url(#287bb32ab7725)"></path>
                                    <defs>
                                        <linearGradient id="287bb32ab7725" x1="5.96" y1=".75" x2="5.96" y2="11.25" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#fff"></stop>
                                            <stop offset="1" stop-color="#E4E4E4"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            : null}
                    </div>
                </div>
                <span className='automation-list-item-name' data-area="name">{props.name}</span>
                <span className='automation-list-item-description' data-area="description">{props.description}</span>
            </div>
        </li >

    )
}

export default AutomationListItem