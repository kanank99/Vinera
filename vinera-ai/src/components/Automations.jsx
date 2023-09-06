import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Integrations from './Integrations';
import AutomationsHeader from './AutomationsHeader';
import AutomationsLists from './AutomationsLists';
import Calendly from './Calendly';
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

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) elem.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location]);


    return (
        <div className='bg-[#060606]'>
            <Integrations darkMode={props.darkMode} />
            <AutomationsHeader darkMode={props.darkMode} />
            <AutomationsLists />
            <Calendly darkMode={props.darkMode} />
            <Newsletter darkMode={props.darkMode} setShowAlert={props.setShowAlert} />
            <Footer darkMode={props.darkMode} />
        </div>
    )
}

export default Automations