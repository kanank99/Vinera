import React from 'react'
import { useRef } from 'react'
import HeaderHome from './HeaderHome';
import Main from './Main';
import Whyus from './Whyus';
// import Integrations from './Integrations';
import OurTeam from './OurTeam';
import Faq from './Faq';
import Calendly from './Calendly';
import Footer from './Footer';
import SavingsCalc from './SavingsCalc';
import Pricing from './Pricing';
import Steps from './Steps';
import Newsletter from './Newsletter';
import Benefits from './Benefits';
import AutomationsAnimation from './AutomationsAnimation';
import { motion } from 'framer-motion';

function Home(props) {

    const ref = useRef(null)

    return (
        <motion.div className=''>
            <HeaderHome darkMode={props.darkMode} ref={ref} />
            <Main darkMode={props.darkMode} />
            <Steps darkMode={props.darkMode} />
            <Benefits darkMode={props.darkMode} />
            <Whyus darkMode={props.darkMode} />
            {/* <Integrations darkMode={props.darkMode} /> */}
            <AutomationsAnimation darkMode={props.darkMode} />
            <OurTeam darkMode={props.darkMode} />
            <Pricing darkMode={props.darkMode} />
            <SavingsCalc darkMode={props.darkMode} />
            <Calendly darkMode={props.darkMode} />
            <Faq darkMode={props.darkMode} />
            <Newsletter darkMode={props.darkMode} setShowAlert={props.setShowAlert} />
            <Footer darkMode={props.darkMode} />
        </motion.div>
    )
}

export default Home