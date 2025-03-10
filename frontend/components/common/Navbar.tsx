'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, User, LogOut } from 'lucide-react';

export default function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const { user, logout } = useAuth();
     const pathname = usePathname();

     const navigation = [
          { name: 'Home', href: '/' },
          { name: 'Articles', href: '/articles' },
          { name: 'About', href: '/about' },
          { name: 'Contact', href: '/contact' },
     ];

     const isActive = (path: string) => pathname === path;

     return (
          <nav className="bg-white shadow">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                         <div className="flex">
                              <div className="flex-shrink-0 flex items-center">
                                   <Link href="/" className="text-2xl font-bold text-indigo-600">
                                        UkuriKose
                                   </Link>
                              </div>
                              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                   {navigation.map((item) => (
                                        <Link
                                             key={item.name}
                                             href={item.href}
                                             className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive(item.href)
                                                       ? 'border-indigo-500 text-gray-900'
                                                       : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                                  }`}
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                              </div>
                         </div>

                         <div className="hidden sm:ml-6 sm:flex sm:items-center">
                              {user ? (
                                   <div className="ml-3 relative">
                                        <div className="flex items-center space-x-4">
                                             <Link
                                                  href="/dashboard"
                                                  className="text-gray-500 hover:text-gray-700"
                                             >
                                                  <User className="h-6 w-6" />
                                             </Link>
                                             <button
                                                  onClick={() => logout()}
                                                  className="text-gray-500 hover:text-gray-700"
                                             >
                                                  <LogOut className="h-6 w-6" />
                                             </button>
                                        </div>
                                   </div>
                              ) : (
                                   <div className="flex items-center space-x-4">
                                        <Link
                                             href="/login"
                                             className="text-gray-500 hover:text-gray-700"
                                        >
                                             Sign in
                                        </Link>
                                        <Link
                                             href="/register"
                                             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                             Sign up
                                        </Link>
                                   </div>
                              )}
                         </div>

                         <div className="-mr-2 flex items-center sm:hidden">
                              <button
                                   onClick={() => setIsMenuOpen(!isMenuOpen)}
                                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                              >
                                   <span className="sr-only">Open main menu</span>
                                   {isMenuOpen ? (
                                        <X className="block h-6 w-6" />
                                   ) : (
                                        <Menu className="block h-6 w-6" />
                                   )}
                              </button>
                         </div>
                    </div>
               </div>

               {/* Mobile menu */}
               {isMenuOpen && (
                    <div className="sm:hidden">
                         <div className="pt-2 pb-3 space-y-1">
                              {navigation.map((item) => (
                                   <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive(item.href)
                                                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                                             }`}
                                        onClick={() => setIsMenuOpen(false)}
                                   >
                                        {item.name}
                                   </Link>
                              ))}
                         </div>
                         <div className="pt-4 pb-3 border-t border-gray-200">
                              {user ? (
                                   <div className="space-y-1">
                                        <Link
                                             href="/dashboard"
                                             className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                             onClick={() => setIsMenuOpen(false)}
                                        >
                                             Dashboard
                                        </Link>
                                        <button
                                             onClick={() => {
                                                  logout();
                                                  setIsMenuOpen(false);
                                             }}
                                             className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                        >
                                             Sign out
                                        </button>
                                   </div>
                              ) : (
                                   <div className="space-y-1">
                                        <Link
                                             href="/login"
                                             className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                             onClick={() => setIsMenuOpen(false)}
                                        >
                                             Sign in
                                        </Link>
                                        <Link
                                             href="/register"
                                             className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                             onClick={() => setIsMenuOpen(false)}
                                        >
                                             Sign up
                                        </Link>
                                   </div>
                              )}
                         </div>
                    </div>
               )}
          </nav>
     );
} 