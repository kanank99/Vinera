import React from 'react'
import { useEffect } from 'react';
import Integrations from './Integrations';
import AutomationsHeader from './AutomationsHeader';
import AutomationsLists from './AutomationsLists';
import Newsletter from './Newsletter';
import Footer from './Footer';

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


        window.scroll({
            top: 0,
            behavior: 'instant'
        })

    }, [])

    return (
        <div className='bg-[#060606]'>
            <Integrations darkMode={props.darkMode} />
            <AutomationsHeader darkMode={props.darkMode} />
            <AutomationsLists />
            <Newsletter darkMode={props.darkMode} setShowAlert={props.setShowAlert} />
            <Footer darkMode={props.darkMode} />
        </div>
    )
}

export default Automations