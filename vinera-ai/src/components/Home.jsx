import React from 'react'
import Main from './Main';
import Whyus from './Whyus';
import Integrations from './Integrations';
import OurTeam from './OurTeam';
import Faq from './Faq';
import Calendly from './Calendly';
import Footer from './Footer';
import SavingsCalc from './SavingsCalc';
import Pricing from './Pricing';
import Steps from './Steps';
import Newsletter from './Newsletter';

function Home(props) {
    return (
        <div>
            <Main darkMode={props.darkMode} />
            <Steps darkMode={props.darkMode} />
            <Whyus darkMode={props.darkMode} />
            <Integrations darkMode={props.darkMode} />
            <OurTeam darkMode={props.darkMode} />
            <Pricing darkMode={props.darkMode} />
            <SavingsCalc darkMode={props.darkMode} />
            <Calendly darkMode={props.darkMode} />
            <Faq darkMode={props.darkMode} />
            <Newsletter darkMode={props.darkMode} setShowAlert={props.setShowAlert} />
            <Footer darkMode={props.darkMode} />
        </div>
    )
}

export default Home