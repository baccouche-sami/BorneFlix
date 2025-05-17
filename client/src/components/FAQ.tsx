import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Premier élément ouvert par défaut
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Petit effet d'animation qui ouvre un élément différent toutes les 5 secondes (uniquement si aucun n'est déjà ouvert manuellement)
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      // Ne pas changer si l'utilisateur a cliqué manuellement
      if (activeIndex !== null && document.activeElement?.tagName === 'BUTTON') {
        return;
      }
      
      setActiveIndex(prevIndex => {
        const nextIndex = prevIndex === null ? 0 : (prevIndex + 1) % faqItems.length;
        return nextIndex;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView]);
  
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
  
  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };
  
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  
  // Variantes d'animation pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Cercles décoratifs avec animation */}
      <motion.div 
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#8dc63f]/10 to-blue-300/5 blur-3xl -translate-y-1/2 translate-x-1/3"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#003566]/10 to-purple-300/5 blur-3xl translate-y-1/2 -translate-x-1/3"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Éléments décoratifs */}
      <div className="absolute right-10 top-1/4 w-32 h-32 opacity-5">
        <motion.svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <path fill="#003566" d="M42.8,-65.2C54.9,-60.1,63.7,-47.2,70.1,-33.2C76.4,-19.2,80.4,-4.1,77.8,9.8C75.3,23.8,66.3,36.5,55.4,46.9C44.5,57.3,31.6,65.3,17.7,69.4C3.7,73.5,-11.3,73.5,-23.6,67.7C-35.9,61.9,-45.5,50.2,-53.3,38C-61.1,25.8,-67.2,13,-69.2,-1.2C-71.1,-15.5,-69,-31,-60.9,-41.8C-52.8,-52.5,-38.7,-58.6,-25.5,-62.8C-12.3,-67,-0.1,-69.5,12,-70.2C24.2,-71,41.2,-70.1,42.8,-65.2Z" transform="translate(100 100)" />
        </motion.svg>
      </div>
      <div className="absolute left-10 bottom-1/4 w-40 h-40 opacity-5">
        <motion.svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <path fill="#8dc63f" d="M46.3,-78.5C59.9,-71.9,71,-58.9,79.5,-44.1C88,-29.4,93.9,-13,92.3,2.3C90.7,17.6,81.5,31.8,71.3,44.7C61.1,57.6,49.9,69.1,36.5,75.8C23.1,82.6,7.6,84.5,-7.5,82.3C-22.6,80.2,-37.1,73.8,-49,64.3C-60.9,54.9,-70.2,42.3,-77.2,27.8C-84.2,13.3,-89,,-3.2,-87,-19C-85,-34.7,-76.1,-49.7,-64,-62.1C-51.9,-74.5,-36.6,-84.4,-21.2,-86C-5.9,-87.6,9.5,-80.9,26.2,-76.6C42.8,-72.3,60.7,-70.2,66.8,-62.4C73,-54.7,67.6,-41.2,66.3,-29.9C65,-18.5,67.8,-9.3,62.2,-2.7C56.6,3.9,42.6,7.7,41.5,17.1C40.4,26.5,52.2,41.4,50.5,47.9C48.7,54.4,33.5,52.5,22.6,49.8C11.8,47,5.4,43.5,-5.9,50.8C-17.1,58.1,-34.2,76.2,-44.5,76.1C-54.8,75.9,-58.3,57.5,-63.9,43.1C-69.5,28.7,-77.2,18.3,-80.4,6.3C-83.6,-5.7,-82.4,-19.4,-76.7,-30.7C-71,-42,-61,-50.8,-50.3,-59C-39.7,-67.2,-28.4,-74.7,-16,-77.7C-3.6,-80.6,9.9,-79,22.9,-74.3C35.9,-69.6,48.5,-61.8,55.5,-52.3C62.5,-42.8,64,-31.6,67.5,-20.6C71,-9.6,76.4,1.2,72.7,9C69,16.9,56.2,21.8,45.4,23.1C34.6,24.4,25.8,22.1,17.9,25.8C10,29.6,3,39.4,-7.6,46.6C-18.2,53.8,-32.5,58.4,-43.4,55.1C-54.3,51.9,-61.8,40.9,-65.2,29.2C-68.6,17.5,-67.9,5.3,-66.7,-6.7C-65.6,-18.7,-64,-30.5,-56.9,-37.5C-49.8,-44.5,-37.2,-46.7,-29,-57.3C-20.7,-67.9,-16.8,-86.9,-9.2,-94C-1.6,-101.1,9.6,-96.4,18.7,-89.3C27.9,-82.3,35,-72.9,46.3,-78.5Z" transform="translate(100 100)" />
        </motion.svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            className="inline-block bg-[#003566]/10 text-[#003566] px-6 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 53, 102, 0.15)" }}
            transition={{ duration: 0.2 }}
          >
            QUESTIONS FRÉQUENTES
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">
            <span className="relative">
              Tout ce que vous 
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#8dc63f]"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span> devez savoir
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous avons répondu aux questions les plus courantes sur l'installation 
            de bornes de recharge en copropriété.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`relative border-b border-gray-100 last:border-none transition-all duration-300
                  ${activeIndex === index ? 'bg-gradient-to-r from-[#003566]/5 to-[#8dc63f]/5' : 'hover:bg-gray-50'}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Indicateur de hover */}
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#8dc63f]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoverIndex === index || activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                
                <button
                  className="w-full px-8 py-6 text-left flex items-start justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-center">
                    <motion.div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-5
                        ${activeIndex === index ? 'bg-[#003566] text-white' : 'bg-[#003566]/5 text-[#003566]'}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500,
                        backgroundColor: { duration: 0.3 },
                        color: { duration: 0.3 }
                      }}
                    >
                      <i className={`${item.icon} text-lg`}></i>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-[#003566]">{item.question}</h3>
                  </div>
                  <motion.div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-[#003566]`}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: { 
                          height: { duration: 0.4 },
                          opacity: { duration: 0.4, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { 
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[5.5rem] pr-8 pb-8 pt-2 text-gray-600 leading-relaxed">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {item.answer}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="inline-block bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <p className="text-lg text-gray-600 mb-6">Vous ne trouvez pas la réponse à votre question ?</p>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center bg-[#003566] text-white hover:bg-[#004580] py-3 px-8 rounded-lg shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 53, 102, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Contactez-nous
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              >
                <i className="fas fa-arrow-right"></i>
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
