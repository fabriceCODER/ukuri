'use client';

import Link from 'next/link';
import { useAuth } from '@/utils/AuthContext';
import { motion } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
     const { user, logout } = useAuth();
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const menuItems = [
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
     ];

     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

     return (
          <header className="bg-white shadow-sm">
               <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                         {/* Logo and brand */}
                         <div className="flex items-center">
                              <Link href="/" className="flex items-center">
                                   <span className="text-2xl font-bold text-indigo-600">UkuriKose</span>
                              </Link>
                         </div>

                         {/* Desktop Navigation */}
                         <div className="hidden md:flex items-center space-x-4">
                              {menuItems.map((item) => (
                                   <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                                   >
                                        {item.label}
                                   </Link>
                              ))}

                              {user ? (
                                   <div className="flex items-center space-x-4 ml-4">
                                        <Link
                                             href="/dashboard"
                                             className="flex items-center text-gray-600 hover:text-indigo-600"
                                        >
                                             <User className="w-5 h-5 mr-1" />
                                             <span>{user.name}</span>
                                        </Link>
                                        <button
                                             onClick={logout}
                                             className="flex items-center text-gray-600 hover:text-red-600"
                                        >
                                             <LogOut className="w-5 h-5 mr-1" />
                                             <span>Logout</span>
                                        </button>
                                   </div>
                              ) : (
                                   <div className="flex items-center space-x-4 ml-4">
                                        <Link
                                             href="/login"
                                             className="text-indigo-600 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                             Sign In
                                        </Link>
                                        <Link
                                             href="/signup"
                                             className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
                                        >
                                             Sign Up
                                        </Link>
                                   </div>
                              )}
                         </div>

                         {/* Mobile menu button */}
                         <div className="md:hidden flex items-center">
                              <button
                                   onClick={toggleMenu}
                                   className="text-gray-600 hover:text-indigo-600"
                              >
                                   {isMenuOpen ? (
                                        <X className="h-6 w-6" />
                                   ) : (
                                        <Menu className="h-6 w-6" />
                                   )}
                              </button>
                         </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="md:hidden"
                         >
                              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                   {menuItems.map((item) => (
                                        <Link
                                             key={item.href}
                                             href={item.href}
                                             className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                                             onClick={toggleMenu}
                                        >
                                             {item.label}
                                        </Link>
                                   ))}

                                   {user ? (
                                        <>
                                             <Link
                                                  href="/dashboard"
                                                  className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                                                  onClick={toggleMenu}
                                             >
                                                  Dashboard
                                             </Link>
                                             <button
                                                  onClick={() => {
                                                       logout();
                                                       toggleMenu();
                                                  }}
                                                  className="text-red-600 hover:text-red-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                                             >
                                                  Logout
                                             </button>
                                        </>
                                   ) : (
                                        <>
                                             <Link
                                                  href="/login"
                                                  className="text-indigo-600 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
                                                  onClick={toggleMenu}
                                             >
                                                  Sign In
                                             </Link>
                                             <Link
                                                  href="/signup"
                                                  className="bg-indigo-600 text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
                                                  onClick={toggleMenu}
                                             >
                                                  Sign Up
                                             </Link>
                                        </>
                                   )}
                              </div>
                         </motion.div>
                    )}
               </nav>
          </header>
     );
} 