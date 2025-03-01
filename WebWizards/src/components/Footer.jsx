import React from "react";
import { FiTwitter, FiInstagram, FiFacebook, FiMail, FiLinkedin, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold mb-4">WebWizards</h3>
                <p className="text-gray-400 mb-4">
                    We provide the best tools and resources to help you learn web development and design.
                </p>
                <div className="flex space-x-4">
                    <motion.a
                    href="#"
                    className="tet-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                    >
                        <FiTwitter size={20} />
                    </motion.a>
                    <motion.a
                    href="#"
                    className="tet-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, color: "#E1306C" }}
                    >
                        <FiInstagram size={20} />
            </motion.a>
            <motion.a
                href="#"
                className="tet-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, color: "#4267B2" }}
                >
                <FiFacebook size={20} />
                </motion.a>
                <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, color: "#0077B5" }}
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            >
                <h4 className="font-bold text-lg mb-4">
                    Products
                </h4>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            Roadmap
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            Community
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            Blog
                        </a>
                    </li>
                </ul>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            >
                <h4 className="font-bold text-lg mb-4">
                    Resources
                </h4>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            API Reference
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}>
                            Support
                        </a>
                    </li>
                </ul>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            >
                <h4 className="font-bold text-lg mb-4">Contacct Us</h4>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <FiMail className="mr-2 text-primary-400" />
                        <motion.a
                        href="mailto:info@WebWizards.com"
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}
                        >
                            info@WebWizards.com
                        </motion.a>
                    </li>
                    <li className="flex items-center">
                        <FiPhone className="mr-2 text-primary-400" />
                        <motion.a
                        href="tel:+38345678902"
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x : 5}}
                        >
                          +383 45 *** ***
                        </motion.a>
                    </li>
                    <li className="flex items-center">
                        <FiMapPin className="mr-2 text-primary-400 mt-1" />
                    
                      <span className="text-gray-400">
                            123 WebWizards Street, Vushtrri, Kosovë
                         </span>
                         </li>
                        </ul>    
            </motion.div>
        </div>
        <motion.div 
          className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
            <p className="text-gray-500 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} WebWizards. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
            <motion.a 
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ y: -3}}
                >
                Privacy Policy
                </motion.a>
                <motion.a 
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                >
                Terms of Service
                </motion.a>
                <motion.a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                >
                Cookie Policy
                </motion.a>
            </div>
                </motion.div>
            </div>
        </footer>

    );

};

export default Footer;