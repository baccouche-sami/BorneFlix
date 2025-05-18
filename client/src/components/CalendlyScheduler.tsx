import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CalendlySchedulerProps {
  url: string;
  className?: string;
}

const CalendlyScheduler = ({ url, className = "h-[650px]" }: CalendlySchedulerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setIsLoaded(true);
    };

    // Nettoyer le script lorsque le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="rendez-vous" className="py-24 bg-gradient-to-br from-[#f8fafc] via-white to-gray-50 overflow-hidden relative">
      {/* Cercles décoratifs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#8dc63f]/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#003566]/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block bg-[#003566]/10 text-[#003566] px-6 py-2 rounded-full text-sm font-medium mb-4">
            PLANIFIEZ VOTRE RENDEZ-VOUS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">Réservez une consultation personnalisée</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Choisissez un créneau horaire qui vous convient pour discuter de votre projet avec nos experts en recharge pour véhicules électriques.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-white rounded-xl shadow-xl overflow-hidden mx-auto max-w-4xl"
        >
          {/* Bordure lumineuse animée */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#003566]/20 via-[#8dc63f]/20 to-[#003566]/20 rounded-xl"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#003566]/10 via-[#8dc63f]/20 to-[#003566]/10 rounded-xl opacity-50"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </div>

          {/* Widget Calendly */}
          <div className={`${className} relative z-10`}>
            {isLoaded ? (
              <div 
                className="calendly-inline-widget"
                data-url={url}
                style={{ minWidth: '320px', height: '100%' }}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003566]"></div>
              </div>
            )}
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-gray-600">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#003566]/10 flex items-center justify-center mr-3 text-[#003566]">
                <i className="fas fa-check-circle"></i>
              </div>
              <span>Consultation sans engagement</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#003566]/10 flex items-center justify-center mr-3 text-[#003566]">
                <i className="fas fa-user-shield"></i>
              </div>
              <span>Experts certifiés IRVE</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#003566]/10 flex items-center justify-center mr-3 text-[#003566]">
                <i className="fas fa-phone-alt"></i>
              </div>
              <span>Visioconférence ou téléphone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyScheduler;