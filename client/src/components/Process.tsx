import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const steps = [
    {
      number: 1,
      title: "Étude technique gratuite",
      description: "Analyse approfondie de votre copropriété et de ses besoins spécifiques pour dimensionner l'installation parfaitement.",
      icon: "fas fa-search"
    },
    {
      number: 2,
      title: "Proposition et vote",
      description: "Présentation claire de la solution et accompagnement personnalisé lors de l'assemblée générale de copropriété.",
      icon: "fas fa-clipboard-check"
    },
    {
      number: 3,
      title: "Installation professionnelle",
      description: "Réalisation des travaux d'infrastructure et mise en place des bornes de recharge par nos experts certifiés IRVE.",
      icon: "fas fa-tools"
    },
    {
      number: 4,
      title: "Suivi et maintenance",
      description: "Support continu, supervision à distance et maintenance préventive pour garantir une disponibilité maximale.",
      icon: "fas fa-cogs"
    }
  ];
  
  return (
    <section ref={sectionRef} id="processus" className="py-24 relative overflow-hidden">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#003566]/10 text-[#003566] px-6 py-2 rounded-full text-sm font-medium mb-4">
            MÉTHODOLOGIE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">Notre processus d'installation</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Un parcours simplifié en plusieurs étapes pour un déploiement serein et efficace de votre infrastructure de recharge en copropriété.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {/* Ligne de connexion entre les étapes */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gray-200 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative z-10 bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-16 h-16 rounded-full bg-[#003566] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-[#003566] animate-ping opacity-20"></div>
                <i className={`${step.icon} text-lg`}></i>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#8dc63f] text-white flex items-center justify-center text-sm font-bold shadow-lg">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[#003566]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#003566]/70 to-transparent z-10"></div>
          
          <img 
            src="/images/gallery/pexels-kindelmedia-9800030.jpg" 
            alt="Installation de bornes en copropriété" 
            className="w-full h-[400px] object-cover" 
          />
          
          <div className="absolute left-0 top-0 bottom-0 p-8 md:p-12 max-w-md flex flex-col justify-center z-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Un accompagnement de A à Z</h3>
            <p className="text-white/90 mb-6">
              BorneFlix vous accompagne à chaque étape, de l'étude technique jusqu'à la maintenance, pour garantir une installation réussie et durable.
            </p>
            <a 
              href="#devis" 
              className="inline-flex self-start items-center bg-[#8dc63f] hover:bg-[#7ab42f] text-white py-3 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Demander un devis
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
