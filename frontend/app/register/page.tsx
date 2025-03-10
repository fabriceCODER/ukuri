'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/utils/AuthContext';
import { AlertCircle, Loader2, Check } from 'lucide-react';

export default function RegisterPage() {
     const router = useRouter();
     const { register } = useAuth();
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
     });
     const [error, setError] = useState('');
     const [isLoading, setIsLoading] = useState(false);

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
     };

     const validateForm = () => {
          if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
               setError('All fields are required');
               return false;
          }
          if (formData.password !== formData.confirmPassword) {
               setError('Passwords do not match');
               return false;
          }
          if (formData.password.length < 8) {
               setError('Password must be at least 8 characters long');
               return false;
          }
          return true;
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setError('');

          if (!validateForm()) return;

          setIsLoading(true);
          try {
               await register(formData.name, formData.email, formData.password);
               router.push('/dashboard');
          } catch (err) {
               setError(err instanceof Error ? err.message : 'Registration failed');
          } finally {
               setIsLoading(false);
          }
     };

     return (
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="sm:mx-auto sm:w-full sm:max-w-md"
               >
                    <Link href="/" className="flex justify-center mb-6">
                         <img
                              className="h-12 w-auto"
                              src="/logo.png"
                              alt="UkuriKose"
                         />
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                         Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                         Already have an account?{' '}
                         <Link
                              href="/login"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                         >
                              Sign in
                         </Link>
                    </p>
               </motion.div>

               <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <motion.div
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: 0.2 }}
                         className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                    >
                         {error && (
                              <div className="mb-4 bg-red-50 border border-red-200 rounded-md p-4">
                                   <div className="flex">
                                        <AlertCircle className="h-5 w-5 text-red-400" />
                                        <div className="ml-3">
                                             <p className="text-sm text-red-700">{error}</p>
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
                                   <div className="mt-1">
                                        <input
                                             id="name"
                                             name="name"
                                             type="text"
                                             autoComplete="name"
                                             required
                                             value={formData.name}
                                             onChange={handleChange}
                                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                   <div className="mt-1">
                                        <input
                                             id="email"
                                             name="email"
                                             type="email"
                                             autoComplete="email"
                                             required
                                             value={formData.email}
                                             onChange={handleChange}
                                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                   <div className="mt-1">
                                        <input
                                             id="password"
                                             name="password"
                                             type="password"
                                             autoComplete="new-password"
                                             required
                                             value={formData.password}
                                             onChange={handleChange}
                                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                   <div className="mt-1">
                                        <input
                                             id="confirmPassword"
                                             name="confirmPassword"
                                             type="password"
                                             autoComplete="new-password"
                                             required
                                             value={formData.confirmPassword}
                                             onChange={handleChange}
                                             className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                   </div>
                              </div>

                              <div>
                                   <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                   >
                                        {isLoading ? (
                                             <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                             'Create account'
                                        )}
                                   </button>
                              </div>
                         </form>

                         <div className="mt-6">
                              <div className="relative">
                                   <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                   </div>
                                   <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">
                                             Or continue with
                                        </span>
                                   </div>
                              </div>

                              <div className="mt-6 grid grid-cols-2 gap-3">
                                   <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                   >
                                        <img
                                             className="h-5 w-5"
                                             src="/google.svg"
                                             alt="Google"
                                        />
                                        <span className="ml-2">Google</span>
                                   </button>
                                   <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                   >
                                        <img
                                             className="h-5 w-5"
                                             src="/github.svg"
                                             alt="GitHub"
                                        />
                                        <span className="ml-2">GitHub</span>
                                   </button>
                              </div>
                         </div>
                    </motion.div>
               </div>
          </div>
     );
} 