import React from 'react'
import { useEffect } from 'react';
import Integrations from './Integrations';
import AutomationsHeader from './AutomationsHeader';

function Automations(props) {

    useEffect(() => {
        const primaryHeader = document.querySelector(".automations-header");
        const scrollWatcher = document.createElement("div");

        scrollWatcher.setAttribute("data-scroll-watcher", "");
        primaryHeader.before(scrollWatcher);

        //change color of nav bar when scrolling

        const navObserver = new IntersectionObserver(
            (entries) => {
                primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
            },
            { rootMargin: "50px 0px 0px 0px" }
        );

        navObserver.observe(scrollWatcher);



    }, [])

    return (
        <div>
            <Integrations darkMode={props.darkMode} />
            <AutomationsHeader darkMode={props.darkMode} />
            <div className='h-[10000px] bg-[#060606]'></div>
        </div>
    )
}

export default Automations