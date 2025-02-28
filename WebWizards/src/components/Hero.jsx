import React from "react";
import { motion } from "framer-motion";
import learn from '../assets/learn.png';


const Hero = () => {
return(
    <section className="bg-gradient-to-r from-primary-700 to-primary-500 text-white section-padding">
        <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center">
                <motion.div
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8}}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Learn with WebWizards
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-primary-50">
                        We provide the best tools and resources to help you learn web development
                        and design.
                    </p>
                    <motion.div
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.4, duration: 0.6}}
                    >
                        <motion.button
                        className="btn-primary"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                        className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 px-6 rounded-lg transition-all duration-300"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                    <p className="mt-6 text-primary-100 text-sm">
                        No credit card required. Free 7 days trial. Cancel anytime.
                    </p>
                </motion.div>
                <motion.div
                className="md:w-1/2 md:pl-10"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2, duration: 0.8}}
                >
                    <div className="bg-white p-2 rounded-xl shadow-2xl">
                        <img
                        src={learn}
                        alt="Learn with WebWizards"
                        className="rounded-lg w-full" />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)
}



export default Hero;