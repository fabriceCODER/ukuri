'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Heart, Globe, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';

export default function CareersPage() {
     const benefits = [
          {
               icon: Heart,
               title: 'Health & Wellness',
               description: 'Comprehensive health insurance and wellness programs'
          },
          {
               icon: Globe,
               title: 'Remote Work',
               description: 'Work from anywhere in the world'
          },
          {
               icon: Users,
               title: 'Team Culture',
               description: 'Collaborative and inclusive environment'
          },
          {
               icon: DollarSign,
               title: 'Competitive Pay',
               description: 'Attractive salary and benefits package'
          }
     ];

     const positions = [
          {
               title: 'Senior Frontend Developer',
               department: 'Engineering',
               location: 'Remote',
               type: 'Full-time',
               description: 'Join our team to build the next generation of web applications.',
               requirements: [
                    '5+ years of experience with React and Next.js',
                    'Strong TypeScript skills',
                    'Experience with modern CSS frameworks',
                    'Excellent problem-solving abilities'
               ]
          },
          {
               title: 'Content Strategist',
               department: 'Marketing',
               location: 'Remote',
               type: 'Full-time',
               description: 'Help shape our content strategy and drive user engagement.',
               requirements: [
                    '3+ years of content strategy experience',
                    'Strong analytical skills',
                    'Experience with SEO and content optimization',
                    'Excellent writing and editing abilities'
               ]
          },
          {
               title: 'Product Designer',
               department: 'Design',
               location: 'Remote',
               type: 'Full-time',
               description: 'Create beautiful and intuitive user experiences.',
               requirements: [
                    '4+ years of product design experience',
                    'Strong portfolio of UI/UX work',
                    'Experience with Figma and other design tools',
                    'User research and testing experience'
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
                                   <Briefcase className="h-16 w-16 text-indigo-200" />
                              </motion.div>
                              <motion.h1
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.3 }}
                                   className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
                              >
                                   Join Our Team
                              </motion.h1>
                              <motion.p
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.4 }}
                                   className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto"
                              >
                                   Build the future of content creation with us
                              </motion.p>
                         </div>
                    </div>
               </motion.div>

               {/* Benefits Section */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
                         <p className="text-xl text-gray-600">We offer competitive benefits and a great work environment</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {benefits.map((benefit, index) => (
                              <motion.div
                                   key={benefit.title}
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.1 * index }}
                                   className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-center"
                              >
                                   <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-100 mb-4">
                                        <benefit.icon className="h-8 w-8 text-indigo-600" />
                                   </div>
                                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                   <p className="text-gray-600">{benefit.description}</p>
                              </motion.div>
                         ))}
                    </div>
               </div>

               {/* Open Positions */}
               <div className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
                              <p className="text-xl text-gray-600">Join our growing team</p>
                         </div>
                         <div className="space-y-6">
                              {positions.map((position, index) => (
                                   <motion.div
                                        key={position.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
                                   >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                             <div>
                                                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                                                  <p className="text-indigo-600">{position.department}</p>
                                             </div>
                                             <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                                  <div className="flex items-center text-gray-600">
                                                       <MapPin className="h-5 w-5 mr-2" />
                                                       {position.location}
                                                  </div>
                                                  <div className="flex items-center text-gray-600">
                                                       <Clock className="h-5 w-5 mr-2" />
                                                       {position.type}
                                                  </div>
                                             </div>
                                        </div>
                                        <p className="text-gray-600 mb-4">{position.description}</p>
                                        <div className="mb-4">
                                             <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                                             <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                  {position.requirements.map((req, reqIndex) => (
                                                       <li key={reqIndex}>{req}</li>
                                                  ))}
                                             </ul>
                                        </div>
                                        <a
                                             href={`/careers/apply?position=${position.title}`}
                                             className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                                        >
                                             Apply Now
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </a>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </div>

               {/* CTA Section */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="bg-indigo-600 rounded-xl p-8 text-center"
                    >
                         <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
                         <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                              We&apos;re always looking for talented individuals to join our team. Don&apos;t see a position that matches your skills? Send us your resume anyway!
                         </p>
                         <a
                              href="/careers/apply"
                              className="inline-flex items-center px-6 py-3 rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
                         >
                              Submit Your Resume
                              <ArrowRight className="ml-2 h-5 w-5" />
                         </a>
                    </motion.div>
               </div>
          </div>
     );
} 