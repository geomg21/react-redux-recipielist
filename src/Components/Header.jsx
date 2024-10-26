import React from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 fixed w-full p-4 shadow-md z-10">
      
      {/* Logo and Brand Name */}
      <Link className="flex items-center text-white text-3xl font-bold" to="/">
        <i className="fa-solid fa-seedling mr-2"></i> 
        FlavorFind
      </Link>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6 ml-10 text-white list-none">
        <li>
          <Link to="/" className="hover:text-orange-300 transition-colors duration-200">Home</Link>
        </li>
        <li>
          <Link to="/recipes" className="hover:text-orange-300 transition-colors duration-200">All Recipes</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-300 transition-colors duration-200">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-300 transition-colors duration-200">Contact</Link>
        </li>
      </ul>
      
      {/* Search Bar */}
      <ul className="flex-1 text-right list-none">
        {insideHome && (
          <li className="inline-block px-5">
            <input 
              onChange={e => dispatch(searchProduct(e.target.value.toLowerCase()))} 
              className="rounded-full px-4 py-2 outline-none text-black placeholder-gray-500" 
              style={{ width: '350px' }} 
              type="text" 
              placeholder="Search for Recipes..." 
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;




