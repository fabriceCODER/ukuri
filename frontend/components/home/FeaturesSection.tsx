const FeaturesSection = () => {
     const features = [
         { title: "Global Coverage", description: "Access news from every corner of the world." },
         { title: "Real-time Updates", description: "Stay informed with the latest developments." },
         { title: "Expert Analysis", description: "Gain insights from industry experts." },
     ];
 
     return (
         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
             {features.map((feature, index) => (
                 <div key={index} className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                     <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                     <p className="text-gray-300">{feature.description}</p>
                 </div>
             ))}
         </div>
     );
 };
 
 export default FeaturesSection;
 