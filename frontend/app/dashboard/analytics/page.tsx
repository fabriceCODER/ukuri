"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import StatsWidget from "@/components/dashboard/StatsWidget";
import { BarChart, Eye, ThumbsUp, Users } from "lucide-react";

type Stats = {
     totalArticles: number;
     totalViews: number;
     totalLikes: number;
     totalFollowers: number;
   };
   
   export default function AnalyticsPage() {
     const [stats, setStats] = useState<Stats | null>(null); // ✅ Correct type
   
     useEffect(() => {
       const fetchStats = async () => {
         try {
           const response = await api.articles.getStats();
           setStats(response.data as Stats); // ✅ Type assertion
         } catch (err) {
           console.error("Failed to fetch stats", err);
         }
       };
       fetchStats();
     }, []);
   
     return (
       <div className="p-8 space-y-6">
         <h1 className="text-2xl font-bold">Analytics Overview</h1>
         {stats && (
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <StatsWidget title="Articles" value={stats.totalArticles} icon={<BarChart />} color="bg-indigo-100" />
             <StatsWidget title="Views" value={stats.totalViews} icon={<Eye />} color="bg-green-100" />
             <StatsWidget title="Likes" value={stats.totalLikes} icon={<ThumbsUp />} color="bg-yellow-100" />
             <StatsWidget title="Followers" value={stats.totalFollowers} icon={<Users />} color="bg-blue-100" />
           </div>
         )}
       </div>
     );
   }
   