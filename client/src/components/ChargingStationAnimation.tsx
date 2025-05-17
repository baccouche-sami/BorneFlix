import React from 'react';
import { motion } from 'framer-motion';

// Une animation 2D plus simple utilisant juste framer-motion
const ChargingStationAnimation = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[450px] bg-gradient-to-b from-blue-50 to-white rounded-xl overflow-hidden">
      {/* Fond avec effet de vague */}
      <motion.div 
        className="absolute inset-0 bg-blue-100/30"
        animate={{
          background: [
            'linear-gradient(120deg, rgba(219,234,254,0.3) 0%, rgba(59,130,246,0.1) 100%)',
            'linear-gradient(120deg, rgba(59,130,246,0.1) 0%, rgba(219,234,254,0.3) 100%)',
            'linear-gradient(120deg, rgba(219,234,254,0.3) 0%, rgba(59,130,246,0.1) 100%)'
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Silhouette de parking */}
      <motion.div 
        className="absolute bottom-0 w-full h-[150px] bg-gray-200/50"
        animate={{ opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-full h-[1px] bg-gray-400/30" 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="flex justify-center space-x-20 h-full">
          <div className="h-full w-[2px] bg-white/50" />
          <div className="h-full w-[2px] bg-white/50" />
          <div className="h-full w-[2px] bg-white/50" />
        </div>
      </motion.div>
      
      {/* Corps de la borne */}
      <motion.div 
        className="absolute left-1/2 bottom-[100px] w-[80px] h-[200px] bg-[#003566] rounded-md shadow-lg"
        initial={{ x: "-50%", y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Écran de la borne */}
        <motion.div 
          className="absolute top-[30px] left-[10px] right-[10px] h-[40px] bg-black/80 rounded-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div 
            className="h-[4px] w-[30px] bg-[#8dc63f] rounded-full mt-[18px] ml-[15px]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Logo sur la borne */}
        <motion.div 
          className="absolute top-[90px] left-[15px] right-[15px] h-[15px] bg-[#8dc63f] rounded-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />
        
        {/* Prise de recharge */}
        <motion.div 
          className="absolute bottom-[40px] left-[50%] w-[30px] h-[30px] bg-gray-800 rounded-full shadow-inner"
          style={{ transform: 'translateX(-50%)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="absolute left-[50%] top-[50%] w-[20px] h-[20px] bg-gray-600 rounded-full"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ 
              boxShadow: [
                '0 0 0 0px rgba(141,198,63,0)',
                '0 0 0 4px rgba(141,198,63,0.3)',
                '0 0 0 0px rgba(141,198,63,0)'
              ] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      {/* Voiture électrique simplifiée */}
      <motion.div 
        className="absolute bottom-[80px] left-1/2 w-[180px] h-[70px] bg-[#2463EB] rounded-md shadow-lg"
        style={{ transform: 'translateX(-50%)' }}
        initial={{ x: "-250%", opacity: 0 }}
        animate={{ x: "-50%", opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 50 }}
      >
        {/* Phares */}
        <motion.div 
          className="absolute right-[10px] top-[15px] w-[15px] h-[8px] bg-yellow-200 rounded-sm"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-[10px] top-[30px] w-[15px] h-[8px] bg-yellow-200 rounded-sm"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        />
        
        {/* Vitres */}
        <div className="absolute left-[40px] top-[12px] w-[60px] h-[20px] bg-sky-200/80 rounded-sm" />
        
        {/* Roues */}
        <motion.div 
          className="absolute left-[20px] bottom-[-10px] w-[30px] h-[30px] bg-gray-800 rounded-full border-4 border-gray-400"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute right-[20px] bottom-[-10px] w-[30px] h-[30px] bg-gray-800 rounded-full border-4 border-gray-400"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Câble de recharge */}
        <motion.svg 
          width="120" 
          height="80" 
          viewBox="0 0 120 80" 
          className="absolute bottom-[15px] right-[-40px] z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.path
            d="M 10,20 Q 40,60 80,20"
            stroke="#333"
            strokeWidth="4"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          />
        </motion.svg>
      </motion.div>
      
      {/* Particules d'énergie */}
      <motion.div 
        className="absolute left-[calc(50%-35px)] bottom-[160px] w-[70px] h-[70px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#8dc63f] rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: Math.random() * 30 * (Math.random() > 0.5 ? 1 : -1),
              y: Math.random() * 30 * (Math.random() > 0.5 ? 1 : -1),
              opacity: [1, 0]
            }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
              repeatType: 'loop'
            }}
          />
        ))}
      </motion.div>
      
      {/* Indicateur de charge */}
      <motion.div 
        className="absolute left-[calc(50%+50px)] bottom-[180px] flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        <div className="text-[#003566] font-bold text-lg">Charge</div>
        <div className="h-[100px] w-[30px] bg-gray-200 rounded-full p-1 mt-2">
          <motion.div 
            className="w-full bg-[#8dc63f] rounded-full"
            initial={{ height: '10%' }}
            animate={{ height: '80%' }}
            transition={{ 
              duration: 4, 
              delay: 2.3,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ChargingStationAnimation;