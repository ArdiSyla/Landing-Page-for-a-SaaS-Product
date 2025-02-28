import React, {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import { motion } from "framer-motion";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <motion.nav 
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl font-bold text-primary-600">WebWizards</span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#features" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#pricing" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Testimonials
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact
              </motion.a>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.button>
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary-600 focus:outline-none"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              className="md:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors px-4">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors px-4">Pricing</a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors px-4">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors px-4">Contact</a>
                <div className="flex flex-col space-y-2 px-4">
                  <button className="btn-secondary w-full">Log in</button>
                  <button className="btn-primary w-full">Sign up</button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    );
  };
  
  export default Navbar;





