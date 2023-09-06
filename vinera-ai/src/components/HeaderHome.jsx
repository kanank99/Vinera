import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PopupButton } from "react-calendly";


function HeaderHome(props) {

    // const { scrollYProgress } = useScroll(
    //     {
    //         target: props.ref,
    //         offset: ["800px", "1200px"],
    //     });

    const [animate, setAnimate] = useState(false);

    // store the width of the window in a state variable
    const [width, setWidth] = useState(window.innerWidth);

    // retrieve the width of the window when it is resized
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 800 && !animate && width >= 600) {
                setAnimate(true);
            } else if (window.scrollY < 800 && animate) {
                setAnimate(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animate, width]);

    return (
        <motion.div ref={props.ref} className='hidden fixed top-[12px] left-0 right-0 bottom-auto mx-auto items-center justify-center border border-[#ffffff14] bg-[#ffffff14] backdrop-blur-lg rounded-[32px] w-[540px] z-[9999] box-border text-[#f7f7f7] text-[16px] font-display'
            initial={{ display: 'none', opacity: 0, scale: 0.3, translateY: -500 }}
            animate={animate ? { display: 'flex', opacity: 1, scale: 1, translateY: 0 } : { opacity: 0, scale: 0.5, translateY: -500 }}
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}

        >
            <a href='#steps' className='p-[14px] text-[14px] hover:text-white/50 transition-colors duration-200 tracking-[0.2px] font-medium'>
                Process
            </a>
            <Link to='/automations' className='p-[14px] text-[14px] hover:text-white/50 transition-colors duration-200 tracking-[0.2px] font-medium'>
                Automations
            </Link>
            <a href='#pricing' className='p-[14px] text-[14px] hover:text-white/50 transition-colors duration-200 tracking-[0.2px] font-medium'>
                Memberships
            </a>
            <Link to='/contact' className='p-[14px] text-[14px] hover:text-white/50 transition-colors duration-200 tracking-[0.2px] font-medium'>
                Contact
            </Link>
            <div className='bg-[#574eff] border border-white/0 hover:border-white/25 transition-colors duration-200 rounded-[32px] py-[6px] px-[16px] flex items-center justify-center font-normal leading-[24px]'>
                <div className='relative z-10'>
                    <PopupButton
                        url="https://calendly.com/vineraautomations/discoverycall"
                        rootElement={document.getElementById("root")}
                        text="Demo"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default HeaderHome