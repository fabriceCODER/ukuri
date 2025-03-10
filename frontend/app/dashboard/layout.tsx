'use client';

import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

export default function DashboardLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     return (
          <div className="min-h-screen bg-gray-50">
               {/* Mobile Sidebar Overlay */}
               {isMobileMenuOpen && (
                    <div
                         className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 md:hidden"
                         onClick={() => setIsMobileMenuOpen(false)}
                    />
               )}

               {/* Mobile Sidebar */}
               <div
                    className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                         } transition-transform duration-300 ease-in-out z-30 md:hidden`}
               >
                    <Sidebar />
               </div>

               {/* Desktop Sidebar */}
               <div className="hidden md:block md:fixed md:inset-y-0 md:flex md:w-64">
                    <Sidebar />
               </div>

               {/* Main Content */}
               <div className="md:pl-64 flex flex-col min-h-screen">
                    <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
                    <main className="flex-1 p-6">{children}</main>
               </div>
          </div>
     );
} 