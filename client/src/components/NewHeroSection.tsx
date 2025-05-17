import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NewHeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-20 pb-10 lg:pt-28 lg:pb-20">
      {/* Background color circles */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-yellow-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-[#8dc63f]/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Left content column */}
          <div className="col-span-12 lg:col-span-6 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 bg-[#003566]/5 border border-[#003566]/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#8dc63f]"></span>
                <span className="text-sm font-medium text-[#003566]">Solutions pour copropriétés</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#003566]">
                La recharge en <span className="text-[#8dc63f]">copropriété</span> n'aura jamais été aussi simple
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                <span className="font-semibold text-[#003566]">BorneFlix</span> est la solution de financement 
                des infrastructures de recharge de véhicules électriques en habitat collectif. Une solution 
                <span className="text-[#8dc63f] font-medium"> clé en main </span> 
                à moindre coût et 
                <span className="text-[#8dc63f] font-medium"> sans reste à charge </span>
                pour les copropriétés.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#devis">
                  <Button size="lg" className="w-full sm:w-auto bg-[#8dc63f] hover:bg-[#7ab42f] text-white font-medium py-6 px-8 rounded-full shadow-lg shadow-[#8dc63f]/30 transition-all duration-300 hover:translate-y-[-2px]">
                    Contactez-nous
                  </Button>
                </a>
                <a href="#solutions">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-[#003566] hover:bg-[#003566]/5 text-[#003566] font-medium py-6 px-8 rounded-full transition-all duration-300">
                    En savoir plus
                  </Button>
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="hidden md:flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                  <div className="text-[#8dc63f]"><i className="fas fa-certificate"></i></div>
                  <span className="text-sm font-medium text-gray-700">IRVE certifié</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                  <div className="text-[#8dc63f]"><i className="fas fa-euro-sign"></i></div>
                  <span className="text-sm font-medium text-gray-700">Aides financières</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                  <div className="text-[#8dc63f]"><i className="fas fa-tools"></i></div>
                  <span className="text-sm font-medium text-gray-700">Maintenance incluse</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right image column */}
          <div className="col-span-12 lg:col-span-6 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              <div className="relative">
                {/* Main circular image */}
                <div className="relative w-full max-w-[550px] mx-auto">
                  <div className="rounded-full overflow-hidden border-[15px] border-white shadow-2xl aspect-square">
                    <img 
                      src="/images/hero/recharge-img01.jpeg" 
                      alt="Personne chargeant un véhicule électrique" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4 z-20"
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      y: [0, -5, 0, 5, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <div className="bg-[#8dc63f] rounded-lg px-4 py-3 text-white text-sm font-bold shadow-lg">
                      <i className="fas fa-percentage mr-2"></i>
                      Jusqu'à 50% d'aides
                    </div>
                  </motion.div>
                  
                  {/* Cable animation */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 w-1 h-24 bg-blue-500"
                    style={{ 
                      transformOrigin: "top center",
                      transform: "translateX(-50%)" 
                    }}
                    animate={{
                      height: [40, 80, 40],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                </div>
                
                {/* Background circles */}
                <div className="absolute top-1/4 -left-12 w-36 h-36 rounded-full bg-yellow-300/40 blur-md -z-10"></div>
                <div className="absolute bottom-1/4 -right-8 w-28 h-28 rounded-full bg-[#8dc63f]/30 blur-md -z-10"></div>
              </div>
              
              {/* Mobile badges */}
              <div className="flex md:hidden flex-wrap gap-3 items-center justify-center mt-8">
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                  <div className="text-[#8dc63f] text-sm"><i className="fas fa-certificate"></i></div>
                  <span className="text-xs font-medium text-gray-700">IRVE certifié</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                  <div className="text-[#8dc63f] text-sm"><i className="fas fa-euro-sign"></i></div>
                  <span className="text-xs font-medium text-gray-700">Aides financières</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                  <div className="text-[#8dc63f] text-sm"><i className="fas fa-tools"></i></div>
                  <span className="text-xs font-medium text-gray-700">Maintenance incluse</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-20 text-gray-50"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
      
      {/* Stats section */}
      <div className="relative bg-gray-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#003566]/5 text-[#003566] mb-4">
                <i className="fas fa-plug text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#003566] mb-2">+2500</h3>
              <p className="text-gray-600">Bornes installées en copropriété</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8dc63f]/10 text-[#8dc63f] mb-4">
                <i className="fas fa-building text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#003566] mb-2">+150</h3>
              <p className="text-gray-600">Copropriétés équipées</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <i className="fas fa-euro-sign text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#003566] mb-2">-50%</h3>
              <p className="text-gray-600">Sur le coût d'installation grâce aux aides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;