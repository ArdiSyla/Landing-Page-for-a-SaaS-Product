import React from "react";
import { motion } from "framer-motion";
import { FiActivity, FiLayers, FiUsers, FiShield, FiBarChart2, FiClock } from "react-icons/fi";

const FeatureCard = ({icon, title, description, index}) => {
    return (
        <motion.div
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: index * 0.1}}
        viewport={{once: true, margin: "-100px"}}
        whileHover={{y: -10}}
        >
            <div className="text-primary-500 mb-4 inline-block p-3 bg-primary-50 rounded-lg">
                {icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>  
        </motion.div>
    );
};

const Features = () => {
    const features = [
        {
            icon: <FiActivity size={28} />,
            title: "Interactive Lessons",
            description: "Our lessons are interactive and engaging to keep you focused."
        },
        {
            icon: <FiLayers size={28} />,
            title: "Projects",
            description: "Build real-world projects to apply what you've learned."
        },
        {
            icon: <FiUsers size={28} />,
            title: "Community",
            description: "Join our community to connect with other learners."
        },
        {
            icon: <FiShield size={28} />,
            title: "Safe Environment",
            description: "We provide a safe and secure environment for all learners."
        },
        {
            icon: <FiBarChart2 size={28} />,
            title: "Track Progress",
            description: "Track your progress and see how much you've learned."
        },
        {
            icon: <FiClock size={28} />,
            title: "Learn Anytime",
            description: "Learn at your own pace, anytime, anywhere."
        },
    ];

    return (
      <section id="features" className="section-padding bg-gray-50">
        <div className="container custom">
            <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            viewport={{once: true, margin: "-100px"}}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We provide the best tools and resources to help you learn web development and design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                    />
                ))}
            </div>
        </div>
      </section>
    );
};

export default Features;