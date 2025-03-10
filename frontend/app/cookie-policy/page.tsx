'use client';

import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Info, CheckCircle, AlertCircle } from 'lucide-react';

export default function CookiePolicyPage() {
     const cookieTypes = [
          {
               icon: Shield,
               title: 'Essential Cookies',
               description: 'Required for the website to function properly',
               examples: [
                    'Authentication cookies',
                    'Security cookies',
                    'Session management',
                    'Load balancing'
               ]
          },
          {
               icon: Settings,
               title: 'Functional Cookies',
               description: 'Enable enhanced functionality and personalization',
               examples: [
                    'Language preferences',
                    'Theme settings',
                    'User preferences',
                    'Customized content'
               ]
          },
          {
               icon: Info,
               title: 'Analytics Cookies',
               description: 'Help us understand how visitors interact with our website',
               examples: [
                    'Page views',
                    'Time spent on site',
                    'User behavior',
                    'Traffic sources'
               ]
          },
          {
               icon: Cookie,
               title: 'Marketing Cookies',
               description: 'Used to deliver personalized advertisements',
               examples: [
                    'Ad targeting',
                    'Social media integration',
                    'Retargeting',
                    'Conversion tracking'
               ]
          }
     ];

     const cookieDetails = [
          {
               title: 'How We Use Cookies',
               content: [
                    'To provide and maintain our service',
                    'To notify you about changes to our service',
                    'To provide customer support',
                    'To gather analysis or valuable information',
                    'To monitor the usage of our service',
                    'To detect, prevent and address technical issues'
               ]
          },
          {
               title: 'Cookie Duration',
               content: [
                    'Session cookies: These cookies are temporary and expire once you close your browser',
                    'Persistent cookies: These cookies remain on your device for a set period or until you delete them',
                    'Third-party cookies: These cookies are set by external services we use'
               ]
          },
          {
               title: 'Your Cookie Choices',
               content: [
                    'You can control and/or delete cookies as you wish',
                    'You can delete all cookies that are already on your computer',
                    'You can set most browsers to prevent them from being placed',
                    'You can opt-out of third-party cookies through our cookie consent banner'
               ]
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
                                   <Cookie className="h-16 w-16 text-indigo-200" />
                              </motion.div>
                              <motion.h1
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.3 }}
                                   className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                              >
                                   Cookie Policy
                              </motion.h1>
                              <motion.p
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.4 }}
                                   className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                              >
                                   Understanding how we use cookies to improve your experience
                              </motion.p>
                         </div>
                    </div>
               </motion.div>

               {/* Cookie Types */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                         <p className="text-xl text-gray-600">Learn about the different types of cookies and their purposes</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {cookieTypes.map((type, index) => (
                              <motion.div
                                   key={type.title}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.1 * index }}
                                   className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                              >
                                   <div className="flex items-center mb-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mr-4">
                                             <type.icon className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <div>
                                             <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                                             <p className="text-gray-600 mt-1">{type.description}</p>
                                        </div>
                                   </div>
                                   <ul className="space-y-2 ml-4">
                                        {type.examples.map((example, exampleIndex) => (
                                             <li key={exampleIndex} className="flex items-center text-gray-600">
                                                  <span className="flex-shrink-0 h-2 w-2 rounded-full bg-indigo-500 mr-3" />
                                                  {example}
                                             </li>
                                        ))}
                                   </ul>
                              </motion.div>
                         ))}
                    </div>
               </div>

               {/* Cookie Details */}
               <div className="bg-white py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="space-y-8">
                              {cookieDetails.map((detail, index) => (
                                   <motion.div
                                        key={detail.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="bg-gray-50 rounded-xl p-6"
                                   >
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{detail.title}</h3>
                                        <ul className="space-y-3">
                                             {detail.content.map((item, itemIndex) => (
                                                  <li key={itemIndex} className="flex items-start">
                                                       <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                                                       <span className="text-gray-600">{item}</span>
                                                  </li>
                                             ))}
                                        </ul>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </div>

               {/* Cookie Management */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="bg-indigo-600 rounded-xl p-8 text-center"
                    >
                         <div className="flex justify-center mb-6">
                              <AlertCircle className="h-12 w-12 text-indigo-200" />
                         </div>
                         <h2 className="text-3xl font-bold text-white mb-4">Manage Your Cookie Preferences</h2>
                         <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                              You can control your cookie preferences at any time through our cookie settings
                         </p>
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              <button
                                   className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
                              >
                                   Cookie Settings
                              </button>
                              <button
                                   className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-indigo-700 hover:bg-indigo-800 transition-colors duration-200"
                              >
                                   Accept All Cookies
                              </button>
                         </div>
                    </motion.div>
               </div>

               {/* Last Updated */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-sm text-gray-500">
                         <p>Last updated: {new Date().toLocaleDateString()}</p>
                         <p className="mt-2">This cookie policy is effective as of February 15, 2024</p>
                    </div>
               </div>
          </div>
     );
} 