'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
     const currentYear = new Date().getFullYear();

     const footerLinks = {
          company: [
               { label: 'About Us', href: '/about' },
               { label: 'Contact', href: '/contact' },
               { label: 'Careers', href: '/careers' },
               { label: 'Press', href: '/press' },
          ],
          support: [
               { label: 'Help Center', href: '/help' },
               { label: 'Terms of Service', href: '/terms' },
               { label: 'Privacy Policy', href: '/privacy' },
               { label: 'Cookie Policy', href: '/cookie-policy' },
          ],
          social: [
               { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
               { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
               { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
               { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
          ],
     };

     return (
          <footer className="bg-gray-900 text-gray-300">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                         {/* Brand */}
                         <div>
                              <h2 className="text-2xl font-bold text-white mb-4">UkuriKose</h2>
                              <p className="text-gray-400">
                                   Your trusted source for news and articles. Stay informed with the latest updates.
                              </p>
                         </div>

                         {/* Company Links */}
                         <div>
                              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                              <ul className="space-y-2">
                                   {footerLinks.company.map((link) => (
                                        <li key={link.href}>
                                             <Link
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-white transition"
                                             >
                                                  {link.label}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Support Links */}
                         <div>
                              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                              <ul className="space-y-2">
                                   {footerLinks.support.map((link) => (
                                        <li key={link.href}>
                                             <Link
                                                  href={link.href}
                                                  className="text-gray-400 hover:text-white transition"
                                             >
                                                  {link.label}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Social Links */}
                         <div>
                              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                              <div className="flex space-x-4">
                                   {footerLinks.social.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                             <a
                                                  key={social.href}
                                                  href={social.href}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-gray-400 hover:text-white transition"
                                                  aria-label={social.label}
                                             >
                                                  <Icon className="w-6 h-6" />
                                             </a>
                                        );
                                   })}
                              </div>
                         </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 mt-12 pt-8">
                         <div className="flex flex-col md:flex-row justify-between items-center">
                              <p className="text-gray-400">
                                   © {currentYear} UkuriKose. All rights reserved.
                              </p>
                              <div className="mt-4 md:mt-0">
                                   <Link
                                        href="/sitemap"
                                        className="text-gray-400 hover:text-white transition mr-4"
                                   >
                                        Sitemap
                                   </Link>
                                   <Link
                                        href="/accessibility"
                                        className="text-gray-400 hover:text-white transition"
                                   >
                                        Accessibility
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
} 