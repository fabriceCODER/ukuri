'use client';

import { motion } from 'framer-motion';
import { Newspaper, Download, Mail, Globe, ArrowRight, Calendar, FileText, Image } from 'lucide-react';

export default function PressPage() {
     const pressReleases = [
          {
               date: 'February 15, 2024',
               title: 'UkuriKose Raises $10M Series A Funding',
               excerpt: 'Leading content platform secures funding to accelerate growth and expand global presence.',
               category: 'Company News'
          },
          {
               date: 'February 1, 2024',
               title: 'New AI-Powered Content Creation Tools',
               excerpt: 'UkuriKose introduces innovative AI features to help creators produce better content.',
               category: 'Product Updates'
          },
          {
               date: 'January 15, 2024',
               title: 'Partnership with Global Publishers',
               excerpt: 'UkuriKose announces strategic partnerships with leading publishing houses.',
               category: 'Partnerships'
          }
     ];

     const mediaKit = [
          {
               icon: Image,
               title: 'Brand Assets',
               description: 'Download our logo, brand colors, and visual guidelines',
               link: '/press/media-kit/brand-assets'
          },
          {
               icon: FileText,
               title: 'Fact Sheet',
               description: 'Key information and statistics about UkuriKose',
               link: '/press/media-kit/fact-sheet'
          },
          {
               icon: Globe,
               title: 'Press Kit',
               description: 'Complete press kit with company information and media resources',
               link: '/press/media-kit/press-kit'
          }
     ];

     return (
          <div className="min-h-screen bg-gray-50">
               {/* Hero Section */}
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-24 sm:py-32"
               >
                    <div className="absolute inset-0 overflow-hidden">
                         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center">
                              <motion.div
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.2 }}
                                   className="flex justify-center mb-6"
                              >
                                   <Newspaper className="h-16 w-16 text-indigo-200" />
                              </motion.div>
                              <motion.h1
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.3 }}
                                   className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                              >
                                   Press Center
                              </motion.h1>
                              <motion.p
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.4 }}
                                   className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                              >
                                   Latest news, press releases, and media resources
                              </motion.p>
                         </div>
                    </div>
               </motion.div>

               {/* Press Releases */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Press Releases</h2>
                         <p className="text-xl text-gray-600">Stay updated with our latest news and announcements</p>
                    </div>
                    <div className="space-y-6">
                         {pressReleases.map((release, index) => (
                              <motion.div
                                   key={release.title}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.1 * index }}
                                   className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                              >
                                   <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                             <div className="flex items-center text-sm text-gray-500 mb-2">
                                                  <Calendar className="h-4 w-4 mr-2" />
                                                  {release.date}
                                             </div>
                                             <h3 className="text-xl font-semibold text-gray-900">{release.title}</h3>
                                             <p className="text-indigo-600 mt-1">{release.category}</p>
                                        </div>
                                        <a
                                             href={`/press/releases/${release.title.toLowerCase().replace(/\s+/g, '-')}`}
                                             className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mt-4 md:mt-0"
                                        >
                                             Read More
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </a>
                                   </div>
                                   <p className="text-gray-600">{release.excerpt}</p>
                              </motion.div>
                         ))}
                    </div>
               </div>

               {/* Media Kit */}
               <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Kit</h2>
                              <p className="text-xl text-gray-600">Download resources for media coverage</p>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {mediaKit.map((item, index) => (
                                   <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
                                   >
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-4">
                                             <item.icon className="h-8 w-8 text-indigo-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <a
                                             href={item.link}
                                             className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                                        >
                                             Download
                                             <Download className="ml-2 h-5 w-5" />
                                        </a>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </div>

               {/* Contact Section */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="bg-indigo-600 rounded-xl p-8 text-center"
                    >
                         <h2 className="text-3xl font-bold text-white mb-4">Press Contact</h2>
                         <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                              For press inquiries, please contact our PR team
                         </p>
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              <a
                                   href="mailto:press@ukurikose.com"
                                   className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
                              >
                                   <Mail className="mr-2 h-5 w-5" />
                                   press@ukurikose.com
                              </a>
                              <a
                                   href="/press/contact"
                                   className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200"
                              >
                                   Contact Form
                              </a>
                         </div>
                    </motion.div>
               </div>
          </div>
     );
} 