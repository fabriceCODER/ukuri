'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Lock, AlertCircle } from 'lucide-react';

export default function RegisterPage() {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false);
     const { register } = useAuth();
     const router = useRouter();
     const searchParams = useSearchParams();

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setError('');

          if (password !== confirmPassword) {
               setError('Passwords do not match');
               return;
          }

          setLoading(true);

          try {
               await register(name, email, password);
               const from = searchParams.get('from') || '/dashboard';
               router.push(from);
          } catch (err) {
               setError(err instanceof Error ? err.message : 'Registration failed');
          } finally {
               setLoading(false);
          }
     };

     return (
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="sm:mx-auto sm:w-full sm:max-w-md"
               >
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                         Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                         Or{' '}
                         <Link
                              href="/login"
                              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                         >
                              sign in to your account
                         </Link>
                    </p>
               </motion.div>

               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
               >
                    <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 sm:rounded-xl sm:px-10 border border-gray-100">
                         {error && (
                              <div className="mb-6 rounded-lg bg-red-50 p-4">
                                   <div className="flex">
                                        <div className="flex-shrink-0">
                                             <AlertCircle className="h-5 w-5 text-red-400" />
                                        </div>
                                        <div className="ml-3">
                                             <h3 className="text-sm font-medium text-red-800">
                                                  {error}
                                             </h3>
                                        </div>
                                   </div>
                              </div>
                         )}

                         <form className="space-y-6" onSubmit={handleSubmit}>
                              <div>
                                   <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Full name
                                   </label>
                                   <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                             <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                             id="name"
                                             name="name"
                                             type="text"
                                             autoComplete="name"
                                             required
                                             value={name}
                                             onChange={(e) => setName(e.target.value)}
                                             className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition duration-150 ease-in-out"
                                             placeholder="John Doe"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Email address
                                   </label>
                                   <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                             <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                             id="email"
                                             name="email"
                                             type="email"
                                             autoComplete="email"
                                             required
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition duration-150 ease-in-out"
                                             placeholder="you@example.com"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Password
                                   </label>
                                   <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                             <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                             id="password"
                                             name="password"
                                             type="password"
                                             autoComplete="new-password"
                                             required
                                             value={password}
                                             onChange={(e) => setPassword(e.target.value)}
                                             className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition duration-150 ease-in-out"
                                             placeholder="••••••••"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <label
                                        htmlFor="confirmPassword"
                                        className="block text-sm font-medium text-gray-700"
                                   >
                                        Confirm password
                                   </label>
                                   <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                             <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                             id="confirmPassword"
                                             name="confirmPassword"
                                             type="password"
                                             autoComplete="new-password"
                                             required
                                             value={confirmPassword}
                                             onChange={(e) => setConfirmPassword(e.target.value)}
                                             className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition duration-150 ease-in-out"
                                             placeholder="••••••••"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                                   >
                                        {loading ? 'Creating account...' : 'Create account'}
                                   </button>
                              </div>
                         </form>
                    </div>
               </motion.div>
          </div>
     );
} 