import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const PricingCard = ({title, price, features, isPopular, buttonText, index}) => {
    return (
        <motion.div
        className={`bg-white rounded-xl shadow-lg overflow-hidden ${isPopular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: index * 0.2}}
        viewport={{once: true, margin: "-100px"}}
        whileHover={{y: -10}}
        >
            {isPopular && (
                <div className="bg-primary-500 text-white text-center py-2 font-semibold">
                    Most Popular
                </div>
            )}
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key = {index} className="flex items-center">
                            {feature.included ? (
                                <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                            ) : (
                                <FiX className="text-red-500 mr-2 flex-shrink-0" />
                            )}
                            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                                {feature.text}
                            </span>
                        </li>
                    ))}
                </ul>
                <motion.button
                className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                    isPopular
                    ?
                    'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                >
                    {buttonText}
                </motion.button>
            </div>
        </motion.div>
    );
};

const Pricing = () => {
    const plans = [
        {
            title: "Basic",
            price: 9,
            features: [
                {text: "Unlimited Access", included: true},
                {text: "Offline Viewing", included: false},
                {text: "No Ads", included: true},
                {text: "Mobile & Tablet Support", included: true},
                {text: "Exclusive Content", included: false},
                {text: "Unlimited Downloads", included: false},
                {text: "Cancel Anytime", included: true},
            ],
            buttonText: "Get Started"
        },
        {
            title: "Pro",
            price: 19,
            features: [
                {text: "Unlimited Access", included: true},
                {text: "Offline Viewing", included: true},
                {text: "No Ads", included: true},
                {text: "Mobile & Tablet Support", included: true},
                {text: "Exclusive Content", included: false},
                {text: "Unlimited Downloads", included: false},
                {text: "Cancel Anytime", included: true},
            ],
            buttonText: "Get Started"
        },
        {
            title: "Premium",
            price: 29,
            features: [
                {text: "Unlimited Access", included: true},
                {text: "Offline Viewing", included: true},
                {text: "No Ads", included: true},
                {text: "Mobile & Tablet Support", included: true},
                {text: "Exclusive Content", included: true},
                {text: "Unlimited Downloads", included: true},
                {text: "Cancel Anytime", included: true},
            ],
            buttonText: "Get Started"
        },
    ];

    return (
        <section id="pricing" className="section-padding">
            <div className="container custom">
                <motion.div
                className="text-center mb-16"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
                viewport={{once: true, margin: "-100px"}}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose a plan that works for you. All plans include a 7-day free trial.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        features={plan.features}
                        isPopular={plan.isPopular}
                        buttonText={plan.buttonText}
                        index={index}
                        />
                    ))}
                </div>

                <motion.div
                className="mt-20"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.7, delay: 0.3}}
                viewport={{once: true, margin: "-100px"}}
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Compare Plans
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 text-left font-bold">Features</th>
                                    <th className="p-4 text-center font-bold">Basic</th>
                                    <th className="p-4 text-center font-bold">Pro</th>
                                    <th className="p-4 text-center font-bold">Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Unlimited Access</td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                </tr>
                                <tr  className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Offline Viewing</td>
                                    <td className="p-4 text-center">
                                        <FiX className="mx-auto text-red-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                </tr>
                                <tr  className="border-b border-gray-200">
                                    <td className="p-4 font-medium">No Ads</td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                </tr>
                                <tr  className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Mobile & Tablet Support</td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                </tr>
                                <tr  className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Exclusive Content</td>
                                    <td className="p-4 text-center">
                                        <FiX className="mx-auto text-red-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiX className="mx-auto text-red-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                </tr>
                                <tr  className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Unlimited Downloads</td>
                                    <td className="p-4 text-center">
                                        <FiX className="mx-auto text-red-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiX className="mx-auto text-red-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                </tr>
                                <tr  className="border-b border-gray-200">
                                    <td className="p-4 font-medium">Cancel Anytime</td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                    <td className="p-4 text-center">
                                        <FiCheck className="mx-auto text-green-500" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;