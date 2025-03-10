'use client';

import { motion } from 'framer-motion';
import { HelpCircle, BookOpen, MessageCircle, Search, FileText, Mail, Phone, MessageSquare } from 'lucide-react';

export default function HelpCenterPage() {
     const categories = [
          {
               icon: BookOpen,
               title: 'Getting Started',
               description: 'Learn the basics of using UkuriKose',
               items: [
                    'Creating an account',
                    'Navigating the platform',
                    'Understanding features',
                    'Basic tutorials'
               ]
          },
          {
               icon: FileText,
               title: 'Content Creation',
               description: 'Learn how to create and manage content',
               items: [
                    'Writing articles',
                    'Adding images',
                    'Formatting content',
                    'Publishing guidelines'
               ]
          },
          {
               icon: MessageCircle,
               title: 'Community',
               description: 'Engaging with the UkuriKose community',
               items: [
                    'Commenting',
                    'Following users',
                    'Sharing content',
                    'Community guidelines'
               ]
          }
     ];

     const faqs = [
          {
               question: 'How do I create an account?',
               answer: 'Click the "Sign Up" button in the top right corner, fill in your details, and verify your email address.'
          },
          {
               question: 'How do I publish my first article?',
               answer: 'Click "Write" in the navigation bar, create your content, and click "Publish" when ready.'
          },
          {
               question: 'How do I change my profile settings?',
               answer: 'Go to your profile page, click the settings icon, and update your information.'
          },
          {
               question: 'How do I report inappropriate content?',
               answer: 'Click the three dots menu on any content and select "Report" to flag it for review.'
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
                                   <HelpCircle className="h-16 w-16 text-indigo-200" />
                              </motion.div>
                              <motion.h1
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.3 }}
                                   className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                              >
                                   Help Center
                              </motion.h1>
                              <motion.p
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.4 }}
                                   className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                              >
                                   Find answers to your questions and learn how to use UkuriKose effectively
                              </motion.p>
                         </div>
                    </div>
               </motion.div>

               {/* Search Section */}
               <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="bg-white rounded-xl shadow-xl p-6"
                    >
                         <div className="flex items-center space-x-4">
                              <Search className="h-6 w-6 text-gray-400" />
                              <input
                                   type="text"
                                   placeholder="Search for help..."
                                   className="flex-1 border-0 focus:ring-0 text-lg"
                              />
                         </div>
                    </motion.div>
               </div>

               {/* Categories */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {categories.map((category, index) => (
                              <motion.div
                                   key={category.title}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.1 * index }}
                                   className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                              >
                                   <div className="flex items-center mb-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mr-4">
                                             <category.icon className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                                   </div>
                                   <p className="text-gray-600 mb-4">{category.description}</p>
                                   <ul className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                             <li key={itemIndex} className="flex items-center text-gray-600">
                                                  <span className="flex-shrink-0 h-2 w-2 rounded-full bg-indigo-500 mr-3" />
                                                  {item}
                                             </li>
                                        ))}
                                   </ul>
                              </motion.div>
                         ))}
                    </div>
               </div>

               {/* FAQs */}
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                         {faqs.map((faq, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.1 * index }}
                                   className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                              >
                                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                   <p className="text-gray-600">{faq.answer}</p>
                              </motion.div>
                         ))}
                    </div>
               </div>

               {/* Contact Support */}
               <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
                              <p className="text-xl text-gray-600">Our support team is here to assist you</p>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   className="bg-indigo-50 rounded-xl p-6 text-center"
                              >
                                   <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                                   <p className="text-gray-600 mb-4">support@ukurikose.com</p>
                                   <a href="mailto:support@ukurikose.com" className="text-indigo-600 hover:text-indigo-700">
                                        Send Email →
                                   </a>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.1 }}
                                   className="bg-indigo-50 rounded-xl p-6 text-center"
                              >
                                   <Phone className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                                   <p className="text-gray-600 mb-4">+1 (555) 123-4567</p>
                                   <a href="tel:+15551234567" className="text-indigo-600 hover:text-indigo-700">
                                        Call Now →
                                   </a>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.2 }}
                                   className="bg-indigo-50 rounded-xl p-6 text-center"
                              >
                                   <MessageSquare className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
                                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                                   <p className="text-gray-600 mb-4">Available 24/7</p>
                                   <a href="/contact" className="text-indigo-600 hover:text-indigo-700">
                                        Start Chat →
                                   </a>
                              </motion.div>
                         </div>
                    </div>
               </div>
          </div>
     );
} 