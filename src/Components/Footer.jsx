import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 px-5 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <Link className="text-3xl font-bold flex items-center hover:scale-105 transition-transform duration-300" to="/">
            <i className="fa-solid fa-seedling mr-2"></i> FlavorFind
          </Link>
          <p className="text-sm">
            Created with passion by the June 2024 Batch students. Special thanks to all our contributors.
          </p>
          <p className="text-xs">MIT Licensed | Version 1.0.0</p>
        </div>
        
        {/* Quick Links */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <Link to="/" className="hover:text-orange-300 transition-colors duration-200">Home</Link>
          <br />
          <Link to="/recipes" className="hover:text-orange-300 transition-colors duration-200">All Recipes</Link>
          <br />
          <Link to="/about" className="hover:text-orange-300 transition-colors duration-200">About Us</Link>
          <br />
          <Link to="/contact" className="hover:text-orange-300 transition-colors duration-200">Contact</Link>
        </div>
        
        {/* Resources */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Resources</h2>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors duration-200">React Docs</a>
          <br />
          <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors duration-200">React Bootstrap</a>
          <br />
          <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors duration-200">React Router</a>
        </div>
        
        {/* Newsletter and Socials */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Stay Updated</h2>
          <div className="flex items-center space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-full text-black w-full outline-none placeholder-gray-500" 
            />
            <button className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors duration-200">
              <i className="fa-solid fa-arrow-right text-white"></i>
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-orange-300 transition-colors duration-200"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-orange-300 transition-colors duration-200"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-orange-300 transition-colors duration-200"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-white hover:text-orange-300 transition-colors duration-200"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="text-white hover:text-orange-300 transition-colors duration-200"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-white text-sm opacity-80">
        &copy; 2024 FlavorFind | Built with <i className="fa-solid fa-heart text-red-500"></i> by June 2024 Batch.
      </p>
    </footer>
  );
}

export default Footer;









