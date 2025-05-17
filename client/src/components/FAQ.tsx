import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "Comment se déroule le processus d'installation en copropriété ?",
      answer: "Le processus commence par une étude technique gratuite, suivie d'une proposition adaptée à votre copropriété. Après approbation en assemblée générale, nous procédons à l'installation de l'infrastructure puis des bornes individuelles selon les besoins des résidents.",
      icon: "fas fa-wrench"
    },
    {
      question: "Quelles sont les aides financières disponibles ?",
      answer: "Plusieurs dispositifs d'aide existent, notamment le programme ADVENIR qui peut couvrir jusqu'à 50% des coûts d'installation pour l'infrastructure collective. Les particuliers peuvent également bénéficier de crédits d'impôt et d'aides locales. Nous vous accompagnons dans toutes ces démarches.",
      icon: "fas fa-euro-sign"
    },
    {
      question: "Comment fonctionne la facturation de l'électricité ?",
      answer: "Notre système permet une facturation individuelle précise pour chaque utilisateur. Chaque borne est équipée d'un compteur qui mesure la consommation réelle, et les résidents sont facturés en fonction de leur utilisation effective.",
      icon: "fas fa-file-invoice"
    },
    {
      question: "Que se passe-t-il en cas de panne ?",
      answer: "Nous proposons un service de maintenance avec différentes formules selon vos besoins. Notre équipe technique intervient rapidement en cas de dysfonctionnement. De plus, notre système de supervision à distance permet souvent de résoudre les problèmes sans déplacement.",
      icon: "fas fa-tools"
    },
    {
      question: "Quelles sont les puissances de charge disponibles ?",
      answer: "Nous proposons différentes puissances de charge, généralement de 3,7 kW à 22 kW, adaptées aux besoins des utilisateurs et aux contraintes techniques du bâtiment. Notre système de gestion dynamique de puissance optimise la répartition de l'énergie disponible entre les différentes bornes.",
      icon: "fas fa-bolt"
    }
  ];
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8dc63f]/5 -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#003566]/5 translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#003566]/10 text-[#003566] px-6 py-2 rounded-full text-sm font-medium mb-4">
            QUESTIONS FRÉQUENTES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">Tout ce que vous devez savoir</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous avons répondu aux questions les plus courantes sur l'installation de bornes de recharge en copropriété.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`border-b border-gray-100 last:border-none transition-colors duration-300 ${activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-start justify-between focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${activeIndex === index ? 'bg-[#003566] text-white' : 'bg-[#003566]/10 text-[#003566]'} transition-colors duration-300`}>
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#003566]">{item.question}</h3>
                </div>
                <div className={`text-[#003566] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2 pl-[4.5rem] text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">Vous ne trouvez pas la réponse à votre question ?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-[#003566] text-white hover:bg-[#004580] py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            Contactez-nous
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
