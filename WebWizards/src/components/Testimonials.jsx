import React from "react";
import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const TestimonialCard = ({quote, author, role, company, image, index}) => {
    return (
        <motion.div
        className="bg-white p-8 rounded-xl shadow-lg"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: index * 0.2}}
        viewport={{once: true, margin: "-100px"}}
        whileHover={{y: -10}}
        >
            <div className="flex text-yellow-400 mb-4">
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
            </div>
            <p className="text-gray-700 mb-6 italic">{quote}</p>
            <div className="flex items-center">
                <img
                src={image}
                alt={author}
                className="w-12 h-12 rounded-full mr-4 objext-cover" 
                />
                <div>
                    <h4 className="font-bold">{author}</h4>
                    <p className="text-gray-600">{role}, {company}</p>
                </div>
                </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            quote: "I've learned so much from WebWizards. The lessons are easy to follow and the instructors are very helpful.",
            author: "Donat Syla",
            role: "Web Developer",
            company: "Innovatech",
            image: "https://scontent.fprn13-1.fna.fbcdn.net/v/t1.6435-9/89347208_3341561045874074_8839837414441615360_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bvEY82G0kWwQ7kNvgEb2QTZ&_nc_oc=AdjQpz-KdjOS13H1-gwS2WtK_rnlhlauYFRRH9dKioRIBpsWLYZOKF6OE-TjvRvPIZE&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AXCP36fQQKfQbyw7cG9PqeW&oh=00_AYDRUsAFmM6jfuW3WXycjhhQGq2hPEHlR4zdcnnFEVXifg&oe=67E9C316"
        },
        {
            quote: "WebWizards has been a game-changer for my career. The hands-on projects and real-world examples are incredibly valuable.",
            author: "Leotrim Islami",
            role: "Frontend Developer",
            company: "Tech Solutions",
            image: "https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/400761965_6850441131737470_4201442328184050208_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Da_JYM6mBGYQ7kNvgHtARPy&_nc_oc=Adj3vuv8OirCL2KBlpd0ZnGzz9G9UbqCHpyeFMSY1JGjVP5MGTcwrgy0QuDEjg6jC5A&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=A8UuMbRhUx1wSpB4f6kkh7U&oh=00_AYBarCE3k2jLankilsyCDaHxVpck18fCBt0l5r0b2Sfqsg&oe=67C84601"
        },
        {
            quote: "The community at WebWizards is amazing. I've met so many talented developers and learned a ton from their experiences.",
            author: "Berat Duraku",
            role: "Full Stack Developer",
            company: "CodeCraft",
            image: "https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/458520745_8290831671004355_7714967862831081683_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=U_kyS7_rlTEQ7kNvgHc6pat&_nc_oc=Adi9wjb05YZHBAkGK5GRqGeeEp205N0jJLinjpaPeAQyvt5cxnOEl6jNVS-lmI2g_8U&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AlPJ5ptIiMIkYHtroMTHl6b&oh=00_AYCV7idzBTFgvvFTspp-yq2dVTRGByvTqCF7Fqe0Eo1oSg&oe=67C84D98"
          },
    ];

    return (
        <section id="testimonials" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                className="text-center mb-16"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
                viewport={{once: true, margin: "-100px"}}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What our learners say</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Read what our learners have to say about their experience with WebWizards.
                        </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                        key={index}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        role={testimonial.role}
                        company={testimonial.company}
                        image={testimonial.image}
                        index={index}
                        />
                    ))}
                </div>

                <motion.div
                className="text-center mt-16"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7, delay: 0.3}}
                viewport={{once: true, margin: "-100px"}}
                >
                    <p className="text-2xl font-bold text-gray-700 mb-8">
                        Trusted by innovative companies around the world
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                        <motion.div
                        className="h-8"
                        whileHover={{scale: 1.1}}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img
                            src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg"
                            alt="Netflix"
                            className="h-full"
                            />
                        </motion.div>
                        <motion.div
                        className="h-8"
                        whileHover={{scale: 1.1}}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img
                            src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg"
                            alt="Airbnb"
                            className="h-full"
                            />
                        </motion.div>
                        <motion.div
                        className="h-8"
                        whileHover={{scale: 1.1}}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img
                            src="https://www.vectorlogo.zone/logos/slack/slack-ar21.svg"
                            alt="Slack"
                            className="h-full"
                            />
                        </motion.div>
                        <motion.div
                        className="h-8"
                        whileHover={{scale: 1.1}}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img
                            src="https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg"
                            alt="Spotify"
                            className="h-full"
                            />
                            </motion.div>
                            <motion.div
                            className="h-8"
                            whileHover={{scale: 1.1}}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img
                                src="https://cdn.worldvectorlogo.com/logos/uber-15.svg"
                                alt="Uber"
                                className="h-full"
                                />
                                </motion.div>
                    </div>
                </motion.div>
                </div>
                </section>
    );

};



export default Testimonials;