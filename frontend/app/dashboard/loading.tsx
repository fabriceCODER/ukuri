export default function DashboardLoading() {
     return (
          <div className="animate-pulse">
               {/* Welcome Section */}
               <div className="mb-6">
                    <div className="h-8 w-64 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-96 bg-gray-200 rounded"></div>
               </div>

               {/* Stats Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {[...Array(4)].map((_, i) => (
                         <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                              <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                              <div className="h-8 w-32 bg-gray-200 rounded"></div>
                         </div>
                    ))}
               </div>

               {/* Table Section */}
               <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>
                    <div className="space-y-4">
                         {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-12 bg-gray-200 rounded"></div>
                         ))}
                    </div>
               </div>
          </div>
     );
} 