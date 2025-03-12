'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Lock, AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';

const Register = () => {
     const router = useRouter();
     const { register } = useAuth();
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     const [touched, setTouched] = useState({
          name: false,
          email: false,
          password: false,
          confirmPassword: false
     });

     const validateEmail = (email: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
     };

     const validatePassword = (password: string) => {
          return password.length >= 8;
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setError(null);

          // Validate all fields
          if (!name || !email || !password || !confirmPassword) {
               setError("Please fill in all fields");
               return;
          }

          if (name.length < 2) {
               setError("Name must be at least 2 characters long");
               return;
          }

          if (!validateEmail(email)) {
               setError("Please enter a valid email address");
               return;
          }

          if (!validatePassword(password)) {
               setError("Password must be at least 8 characters long");
               return;
          }

          if (password !== confirmPassword) {
               setError("Passwords do not match");
               return;
          }

          setIsLoading(true);

          try {
               await register(name, email, password);
               router.push('/login?registered=true');
          } catch (err) {
               setError(err instanceof Error ? err.message : "Registration failed");
          } finally {
               setIsLoading(false);
          }
     };

     const handleBlur = (field: 'name' | 'email' | 'password' | 'confirmPassword') => {
          setTouched(prev => ({ ...prev, [field]: true }));
     };

     return (
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="sm:mx-auto sm:w-full sm:max-w-md"
               >
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                         Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                         Already have an account?{" "}
                         <Link
                              href="/login"
                              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
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
                         className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 sm:rounded-xl sm:px-10 border border-gray-100"
                    >
                         {error && (
                              <motion.div
                                   initial={{ opacity: 0, y: -10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   className="mb-6 rounded-lg bg-red-50 p-4"
                              >
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
                              </motion.div>
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
                                             onBlur={() => handleBlur('name')}
                                             className={`appearance-none block w-full pl-10 pr-3 py-2 border ${touched.name && name.length < 2
                                                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                                  : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                                  } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm transition duration-150 ease-in-out`}
                                             placeholder="John Doe"
                                        />
                                   </div>
                                   {touched.name && name.length < 2 && name && (
                                        <p className="mt-1 text-sm text-red-600">Name must be at least 2 characters long</p>
                                   )}
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
                                             onBlur={() => handleBlur('email')}
                                             className={`appearance-none block w-full pl-10 pr-3 py-2 border ${touched.email && !validateEmail(email) && email
                                                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                                  : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                                  } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm transition duration-150 ease-in-out`}
                                             placeholder="you@example.com"
                                        />
                                   </div>
                                   {touched.email && !validateEmail(email) && email && (
                                        <p className="mt-1 text-sm text-red-600">Please enter a valid email address</p>
                                   )}
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
                                             type={showPassword ? "text" : "password"}
                                             autoComplete="new-password"
                                             required
                                             value={password}
                                             onChange={(e) => setPassword(e.target.value)}
                                             onBlur={() => handleBlur('password')}
                                             className={`appearance-none block w-full pl-10 pr-10 py-2 border ${touched.password && !validatePassword(password) && password
                                                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                                  : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                                  } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm transition duration-150 ease-in-out`}
                                             placeholder="••••••••"
                                        />
                                        <button
                                             type="button"
                                             onClick={() => setShowPassword(!showPassword)}
                                             className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                             {showPassword ? (
                                                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                                             ) : (
                                                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                                             )}
                                        </button>
                                   </div>
                                   {touched.password && !validatePassword(password) && password && (
                                        <p className="mt-1 text-sm text-red-600">Password must be at least 8 characters long</p>
                                   )}
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
                                             type={showConfirmPassword ? "text" : "password"}
                                             autoComplete="new-password"
                                             required
                                             value={confirmPassword}
                                             onChange={(e) => setConfirmPassword(e.target.value)}
                                             onBlur={() => handleBlur('confirmPassword')}
                                             className={`appearance-none block w-full pl-10 pr-10 py-2 border ${touched.confirmPassword && password !== confirmPassword
                                                  ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                                  : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                                  } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm transition duration-150 ease-in-out`}
                                             placeholder="••••••••"
                                        />
                                        <button
                                             type="button"
                                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                             className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                             {showConfirmPassword ? (
                                                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                                             ) : (
                                                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                                             )}
                                        </button>
                                   </div>
                                   {touched.confirmPassword && password !== confirmPassword && confirmPassword && (
                                        <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                                   )}
                              </div>

                              <div>
                                   <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                                   >
                                        {isLoading ? (
                                             <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                             "Create account"
                                        )}
                                   </button>
                              </div>
                         </form>
                    </motion.div>
               </div>
          </div>
     );
};

export default Register; 