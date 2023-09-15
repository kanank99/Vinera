import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Steps() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["0 1", "1.60 1"],
        });
    const toFullHeight = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const fullRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const toGradient = useTransform(scrollYProgress, [0, 1], ["#574eff", "#393291"]);

    const toBackgroundBlue = useTransform(scrollYProgress, [0.20, 0.25], ["#ffffff13", "#574eff"]);
    const toBoxShadow = useTransform(scrollYProgress, [0.20, 0.30], ["-1px 1px 100px 20px", "-1px 1px 300px 25px #3b82f6"]);

    const toBackgroundBlue2 = useTransform(scrollYProgress, [0.50, 0.55], ["#ffffff13", "#574eff"]);
    const toBoxShadow2 = useTransform(scrollYProgress, [0.50, 0.60], ["-1px 1px 100px 20px", "-1px 1px 300px 25px #3b82f6"]);

    const toBackgroundBlue3 = useTransform(scrollYProgress, [0.77, 0.82], ["#ffffff13", "#574eff"]);
    const toBoxShadow3 = useTransform(scrollYProgress, [0.77, 0.88], ["-1px 1px 100px 20px", "-1px 1px 300px 25px #3b82f6"]);


    const toBackgroundFull0 = useTransform(scrollYProgress, [0, 0.05], ["#070919", "#0e1629"]);
    const toBackgroundFull1 = useTransform(scrollYProgress, [0.20, 0.25], ["#070919", "#0e1629"]);
    const toBackgroundFull2 = useTransform(scrollYProgress, [0.50, 0.55], ["#070919", "#0e1629"]);
    const toBackgroundFull3 = useTransform(scrollYProgress, [0.77, 0.82], ["#070919", "#0e1629"]);


    const toTranslateUpStep1 = useTransform(scrollYProgress, [0.5, 0.6], ["0", "-300px"]);
    const toTranslateRightStep1 = useTransform(scrollYProgress, [0.5, 0.6], ["0", "200px"]);
    const toOpacityZeroStep1 = useTransform(scrollYProgress, [0, 0.5, 0.56], ["1", "0.9", '0']);
    const toRotateRightStep1 = useTransform(scrollYProgress, [0.5, 0.56], ["0", "25deg"]);

    const toTranslateUpStep2 = useTransform(scrollYProgress, [0.66, 0.77], ["0", "-300px"]);
    const toTranslateRightStep2 = useTransform(scrollYProgress, [0.66, 0.77], ["0", "-200px"]);
    const toOpacityZeroStep2 = useTransform(scrollYProgress, [0, 0.66, 0.7], ["1", "0.9", '0']);
    const toRotateRightStep2 = useTransform(scrollYProgress, [0.66, 0.7], ["0", "-25deg"]);

    const toTranslateUpStep3 = useTransform(scrollYProgress, [0.80, 0.90], ["0", "-300px"]);
    const toTranslateRightStep3 = useTransform(scrollYProgress, [0.80, 0.90], ["0", "200px"]);
    const toOpacityZeroStep3 = useTransform(scrollYProgress, [0, 0.80, 0.84], ["1", "0.9", '0']);
    const toRotateRightStep3 = useTransform(scrollYProgress, [0.80, 0.84], ["0", "25deg"]);

    const toTranslateUpStep4 = useTransform(scrollYProgress, [0.97, 1], ["0", "-300px"]);
    const toTranslateRightStep4 = useTransform(scrollYProgress, [0.97, 1], ["0", "-200px"]);
    const toOpacityZeroStep4 = useTransform(scrollYProgress, [0, 0.96, 1.04], ["1", "0.9", '0']);
    const toRotateRightStep4 = useTransform(scrollYProgress, [0.96, 1.04], ["0", "-25deg"]);


    return (
        <div id='steps' className='bg-[#000212] font-display hidden min-[1220px]:block grid-bg pt-[50px]'>
            <div className='mx-auto min-[1220px]:mx-0'>
                <motion.div className='flex flex-col items-center justify-center pb-40 pt-4'
                    initial={{ opacity: 0, y: 25, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1
                    }}>
                    <h1 class="px-4 font-md text-[1.5rem] tracking-[0.1em] uppercase mb-[24px] font-md text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-green-800 dark:from-[#455eb5] dark:to-purple-600">YOUR ROADMAP TO SUCCESS</h1>
                    <h2 class="text-6xl text-[#f7f7f7] font-bold">Our <span class="">Process</span></h2>
                </motion.div>
                <motion.div
                    className="h-[1000px] w-[8px] bg-[#ffffff13] ml-6 min-[1220px]:m-auto relative rounded-full"
                    ref={ref}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.1
                    }}
                >
                    <motion.div
                        className="top-0 left-0 w-full h-1 rounded-full absolute"
                        style={{
                            background: toGradient,
                            height: toFullHeight,
                        }}

                    >

                        <motion.div
                            className="-bottom-1 -right-[0.9rem] w-[35px] h-[35px] rounded-full glow-button-steps absolute z-30"
                            style={{
                                rotate: fullRotate,
                            }}
                        />
                        {/* Step 1 */}
                        <motion.div class="absolute overflow-hidden left-[38px] min-[1220px]:left-[7.2rem] top-[-4.5rem] min-[1220px]:-top-10 w-[340px] min-[1220px]:w-[450px] flex flex-col gap-y-3 min-[1220px]:gap-y-5 p-4 min-[1220px]:p-8 bg-white border shadow-sm rounded-xl dark:bg-slate-[#0e1629] dark:border-gray-800 z-30"
                            style={{
                                y: toTranslateUpStep1,
                                x: toTranslateRightStep1,
                                opacity: toOpacityZeroStep1,
                                rotate: toRotateRightStep1,
                                backgroundColor: toBackgroundFull0,
                            }}
                        >
                            <div class="inline-flex justify-center items-center">
                                <span class="w-2 h-2 inline-block bg-[#5e6ad2] rounded-full mr-2"></span>
                                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                    Step 1: Discover
                                </h3>
                            </div>

                            <div class="text-center">
                                <p class="mt-1 text-gray-600 dark:text-gray-400">
                                    Our goal isn't to push any AI solution onto our clients. Instead, we carefully explore which type of AI chatbot and automations will best fit the unique needs and challenges of each client.
                                </p>
                            </div>
                        </motion.div>
                        {/* Step 2 */}
                        <motion.div class="absolute overflow-hidden left-[2.15rem] min-[1220px]:-left-[35rem] top-[11rem] min-[1220px]:top-[13rem] w-[340px] min-[1220px]:w-[450px] flex flex-col gap-y-3 min-[1220px]:gap-y-5 p-4 min-[1220px]:p-8 bg-white border shadow-sm rounded-xl dark:bg-[#ffffff08] dark:border-gray-800"
                            style={{
                                y: toTranslateUpStep2,
                                x: toTranslateRightStep2,
                                opacity: toOpacityZeroStep2,
                                rotate: toRotateRightStep2,
                                backgroundColor: toBackgroundFull1,
                            }}
                        >
                            <div class="inline-flex justify-center items-center">
                                <span class="w-2 h-2 inline-block bg-[#5e6ad2] rounded-full mr-2"></span>
                                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                    Step 2: Development
                                </h3>
                            </div>

                            <div class="text-center">
                                <p class="mt-1 text-gray-600 dark:text-gray-400">
                                    Drawing from our experiences in building enterprise products and addressing common pain points across various projects, we're equipped to establish precise automation solutions.
                                </p>
                            </div>
                        </motion.div>
                        {/* Step 3 */}
                        <motion.div class="absolute overflow-hidden left-[38px] min-[1220px]:left-[7.2rem] top-[28rem] min-[1220px]:top-[26rem] w-[340px] min-[1220px]:w-[450px] flex flex-col gap-y-3 min-[1220px]:gap-y-5 p-4 min-[1220px]:p-8 bg-white border shadow-sm rounded-xl dark:bg-[#ffffff08] dark:border-gray-800 z-30"
                            style={{
                                y: toTranslateUpStep3,
                                x: toTranslateRightStep3,
                                opacity: toOpacityZeroStep3,
                                rotate: toRotateRightStep3,
                                backgroundColor: toBackgroundFull2,
                            }}
                        >
                            <div class="inline-flex justify-center items-center">
                                <span class="w-2 h-2 inline-block bg-[#5e6ad2] rounded-full mr-2"></span>
                                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                    Step 3: Testing
                                </h3>
                            </div>

                            <div class="text-center">
                                <p class="mt-1 text-gray-600 dark:text-gray-400">
                                    Vinera's automations are designed to be simple, eliminating the complexity of your tasks. From evaluating enterprise databases to automating everyday tasks, we make operations seamless.
                                </p>
                            </div>
                        </motion.div>
                        {/* Step 4 */}
                        <motion.div class="absolute overflow-hidden left-[2.15rem] min-[1220px]:-left-[35rem] top-[45rem] w-[340px] min-[1220px]:w-[450px] flex flex-col gap-y-3 min-[1220px]:gap-y-5 p-4 min-[1220px]:p-8 bg-white border shadow-sm rounded-xl dark:bg-[#ffffff08] dark:border-gray-800"
                            style={{
                                y: toTranslateUpStep4,
                                x: toTranslateRightStep4,
                                opacity: toOpacityZeroStep4,
                                rotate: toRotateRightStep4,
                                backgroundColor: toBackgroundFull3,
                            }}
                        >
                            <div class="inline-flex justify-center items-center">
                                <span class="w-2 h-2 inline-block bg-[#5e6ad2] rounded-full mr-2"></span>
                                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                    Step 4: Implementation
                                </h3>
                            </div>

                            <div class="text-center">
                                <p class="mt-1 text-gray-600 dark:text-gray-400">
                                    AI and automation are ever-evolving. That's why we're always seeking the right balance between functionality, ensuring that as your needs evolve, our solutions do too, creating efficient fulfillments every time
                                </p>
                            </div>
                        </motion.div>



                    </motion.div>
                    <motion.div className="bottom-[222px] -right-[0.9rem] w-[35px] h-[35px] bg-red-500 absolute z-30 rounded-full"
                        style={{
                            backgroundColor: toBackgroundBlue3,
                            boxShadow: toBoxShadow3,
                        }}
                    />
                    <motion.div className="bottom-[500px] -right-[0.9rem] w-[35px] h-[35px] bg-red-500 absolute z-30 rounded-full"
                        style={{
                            backgroundColor: toBackgroundBlue2,
                            boxShadow: toBoxShadow2,
                        }} />
                    <motion.div className="bottom-[777px] -right-[0.9rem] w-[35px] h-[35px] bg-red-500 absolute z-30 rounded-full"
                        style={{
                            backgroundColor: toBackgroundBlue,
                            boxShadow: toBoxShadow,
                        }} />

                </motion.div>
                <a href="#pricing" class=" mb-16 inline-block w-[15rem] mt-[3.7rem] py-3 text-sm font-semibold text-white transition duration-200 bg-[#574eff] rounded-full hover:bg-[#3537a0] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                    <span>View Plans</span>
                </a>
            </div>
        </div>
    )
}

export default Steps