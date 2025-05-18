import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Type pour les messages du chat
interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

// Type pour les suggestions rapides
interface QuickSuggestion {
  id: string;
  text: string;
  query: string;
}

// Base de connaissances du chatbot pour les FAQ
const faqData = {
  // Questions générales
  "installation": {
    question: "Comment se déroule l'installation d'une borne de recharge en copropriété ?",
    answer: "L'installation se déroule en plusieurs étapes : 1️⃣ Étude technique gratuite de votre copropriété, 2️⃣ Proposition personnalisée, 3️⃣ Validation en assemblée générale, 4️⃣ Installation de l'infrastructure, 5️⃣ Pose des bornes individuelles. Notre équipe vous accompagne à chaque étape pour une transition sans stress ! 🔌✨",
    followup: ["Combien de temps prend l'installation ?", "Quelles sont les aides financières ?", "Dois-je contacter le syndic ?"]
  },
  "délai": {
    question: "Quel est le délai pour installer une borne en copropriété ?",
    answer: "Le délai moyen est de 2 à 3 mois, incluant l'étude technique (1-2 semaines), le vote en assemblée générale (dépend du calendrier de la copropriété), et l'installation (1-3 semaines selon la complexité). Nous pouvons accélérer certaines phases si nécessaire pour les projets urgents ! ⏱️💨",
    followup: ["Comment se passe l'étude technique ?", "Peut-on installer sans attendre l'assemblée générale ?"]
  },
  "prix": {
    question: "Combien coûte l'installation d'une borne de recharge ?",
    answer: "Le coût varie selon la configuration de votre copropriété, mais bonne nouvelle : jusqu'à 50% est pris en charge par les aides ADVENIR ! Pour une installation standard, comptez entre 1000€ et 2000€ par borne après déduction des aides. Nous vous proposons aussi des solutions de financement mensuel à partir de 19,90€/mois. 💰✅",
    followup: ["Quelles sont les aides disponibles ?", "Proposez-vous des financements ?"]
  },
  "aides": {
    question: "Quelles sont les aides financières disponibles ?",
    answer: "Vous pouvez bénéficier de plusieurs aides : 1️⃣ Programme ADVENIR (jusqu'à 50% du coût), 2️⃣ Crédit d'impôt pour les particuliers (jusqu'à 300€), 3️⃣ Aides locales variables selon les régions et municipalités. Notre équipe s'occupe de toutes les démarches administratives pour que vous obteniez le maximum d'aides possible ! 📝💶",
    followup: ["Comment obtenir ces aides ?", "Ces aides sont-elles cumulables ?"]
  },
  
  // Questions techniques
  "puissance": {
    question: "Quelle puissance de borne me faut-il ?",
    answer: "Tout dépend de votre véhicule et de vos besoins ! Pour un usage quotidien en copropriété, une borne de 7.4 kW est généralement idéale (recharge complète en 4-8h). Si vous avez besoin de recharges plus rapides, nous proposons des bornes jusqu'à 22 kW. Notre système de gestion intelligente optimise la distribution de puissance pour éviter toute surcharge du réseau ! ⚡🔋",
    followup: ["Différence entre 7.4 kW et 22 kW ?", "Faut-il modifier le tableau électrique ?"]
  },
  "type": {
    question: "Quels types de bornes proposez-vous ?",
    answer: "Nous proposons une gamme complète adaptée à tous les besoins : 1️⃣ Bornes murales (wallbox) compactes et économiques, 2️⃣ Bornes sur pied pour les parkings extérieurs, 3️⃣ Bornes intelligentes connectées pilotables à distance. Toutes nos bornes sont compatibles avec tous les modèles de véhicules électriques du marché européen ! 🚗🔌",
    followup: ["Les bornes sont-elles compatibles avec ma voiture ?", "Peut-on recharger plusieurs véhicules ?"]
  },
  "maintenance": {
    question: "Comment fonctionne la maintenance des bornes ?",
    answer: "Nos contrats incluent une maintenance complète : 1️⃣ Supervision à distance 24/7, 2️⃣ Intervention sous 48h en cas de panne, 3️⃣ Mise à jour logicielle automatique. La durée de vie moyenne d'une borne est de 10 ans, et nos garanties couvrent pièces et main d'œuvre pendant 2 à 5 ans selon les modèles. Vous pouvez dormir tranquille ! 🔧🛡️",
    followup: ["Que faire en cas de panne ?", "Combien coûte la maintenance ?"]
  },
  
  // Questions process
  "syndic": {
    question: "Comment procéder avec mon syndic de copropriété ?",
    answer: "Pas d'inquiétude, nous nous occupons de tout ! Contactez-nous d'abord et nous : 1️⃣ Préparons un dossier technique complet, 2️⃣ Communiquons directement avec votre syndic, 3️⃣ Présentons le projet en assemblée générale si nécessaire. Notre expertise en copropriété nous permet de simplifier toutes les démarches administratives ! 📋✅",
    followup: ["Le syndic peut-il refuser l'installation ?", "Faut-il un vote en assemblée générale ?"]
  },
  "droit": {
    question: "Ai-je le droit d'installer une borne dans ma copropriété ?",
    answer: "Absolument ! Depuis la loi d'orientation des mobilités (LOM), vous bénéficiez d'un « droit à la prise » : votre copropriété ne peut pas s'opposer à l'installation d'une borne à vos frais. Si vous rencontrez une résistance, nous pouvons intervenir avec notre service juridique spécialisé pour faire valoir vos droits. La transition énergétique est protégée par la loi ! ⚖️🔌",
    followup: ["Comment fonctionne le droit à la prise ?", "Que faire si le syndic refuse ?"]
  },
  
  // Fallback
  "fallback": {
    answer: "Je n'ai pas toutes les informations sur ce sujet spécifique, mais je serais ravi d'en discuter plus en détail. Pourriez-vous me donner plus de précisions sur votre question ? Ou préférez-vous être mis en relation avec l'un de nos experts ? 🤔",
    followup: ["Parler à un expert", "Demander un devis", "Voir la FAQ complète"]
  }
};

// Suggestions rapides pour démarrer la conversation
const initialSuggestions: QuickSuggestion[] = [
  { id: "s1", text: "Comment installer une borne ?", query: "installation" },
  { id: "s2", text: "Combien ça coûte ?", query: "prix" },
  { id: "s3", text: "Aides financières", query: "aides" },
  { id: "s4", text: "Démarches avec le syndic", query: "syndic" }
];

// Fonctions d'utilitaires
const generateId = () => Math.random().toString(36).substring(2, 9);

const getBotResponse = (query: string): { answer: string, followup?: string[] } => {
  // Convertir la requête en minuscules pour une recherche insensible à la casse
  const normalizedQuery = query.toLowerCase();
  
  // Rechercher des mots-clés dans la requête
  for (const [key, data] of Object.entries(faqData)) {
    if (normalizedQuery.includes(key) || (data as any).question?.toLowerCase().includes(normalizedQuery)) {
      return data as { answer: string, followup?: string[] };
    }
  }
  
  // Réponse par défaut si aucune correspondance n'est trouvée
  return faqData.fallback;
};

// Composant du chatbot
const ChatbotFAQ: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<QuickSuggestion[]>(initialSuggestions);
  const [typingIndicator, setTypingIndicator] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Effet pour faire défiler automatiquement vers le bas
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Ajouter un message de bienvenue au chargement du chatbot
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: generateId(),
            sender: 'bot',
            text: "Bonjour ! 👋 Je suis Aicha, votre assistante virtuelle BorneFlix. Comment puis-je vous aider avec votre projet de recharge pour véhicule électrique en copropriété ?",
            timestamp: new Date()
          }
        ]);
      }, 600);
    }
  }, [isOpen, messages.length]);
  
  // Fonction pour envoyer un message
  const handleSendMessage = (text: string, isQuickReply = false) => {
    if (!text.trim() && !isQuickReply) return;
    
    // Ajouter le message de l'utilisateur
    const userMessage: ChatMessage = {
      id: generateId(),
      sender: 'user',
      text: text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simuler la saisie du bot
    setTypingIndicator(true);
    
    // Traiter la réponse du bot
    setTimeout(() => {
      const response = getBotResponse(text);
      
      // Ajouter le message du bot
      const botMessage: ChatMessage = {
        id: generateId(),
        sender: 'bot',
        text: response.answer,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setTypingIndicator(false);
      
      // Mettre à jour les suggestions de suivi
      if (response.followup) {
        setSuggestions(
          response.followup.map((text, index) => ({
            id: `f${index}`,
            text,
            query: text.toLowerCase()
          }))
        );
      } else {
        setSuggestions(initialSuggestions);
      }
    }, 1000 + Math.random() * 1000); // Délai aléatoire pour simuler la saisie
  };
  
  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };
  
  // Ouvrir ou fermer le chatbot
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  // Générer un composant amélioré pour un message individuel
  const renderMessage = (message: ChatMessage) => {
    const isBotMessage = message.sender === 'bot';
    
    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
        className={`flex ${isBotMessage ? 'justify-start' : 'justify-end'} mb-4 items-end`}
      >
        {/* Avatar pour les messages du bot */}
        {isBotMessage && (
          <div className="w-8 h-8 rounded-full bg-[#003566] flex-shrink-0 mr-2 flex items-center justify-center">
            <span className="text-white text-xs font-bold">EB</span>
          </div>
        )}
        
        <motion.div 
          className={`max-w-[80%] rounded-lg p-4 shadow-sm ${
            isBotMessage 
              ? 'bg-white text-gray-800 border-l-4 border-l-[#8dc63f] rounded-bl-none' 
              : 'bg-gradient-to-r from-[#003566] to-[#00264d] text-white rounded-br-none'
          }`}
          whileHover={{ scale: 1.01 }}
        >
          <div className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">{message.text}</div>
          <div 
            className={`text-xs mt-2 text-right flex items-center justify-end ${
              isBotMessage ? 'text-gray-400' : 'text-white/70'
            }`}
          >
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            {isBotMessage ? (
              <i className="fas fa-check-circle ml-1 text-[#8dc63f]"></i>
            ) : (
              <i className="fas fa-check ml-1"></i>
            )}
          </div>
        </motion.div>
        
        {/* Avatar pour les messages de l'utilisateur */}
        {!isBotMessage && (
          <div className="w-8 h-8 rounded-full bg-[#8dc63f] flex-shrink-0 ml-2 flex items-center justify-center">
            <i className="fas fa-user text-white text-xs"></i>
          </div>
        )}
      </motion.div>
    );
  };
  
  return (
    <>
      {/* Bouton flottant pour ouvrir le chatbot avec animation pulse pour attirer l'attention */}
      <motion.div
        className="fixed bottom-8 right-8 sm:bottom-6 sm:right-6 z-40"
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <motion.button
          className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-[#8dc63f] hover:bg-[#75a630]'
          }`}
          onClick={toggleChat}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(141, 198, 63, 0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-white text-xl`}></i>
          
          {/* Badge qui indique un nouveau message */}
          {!isOpen && messages.length === 0 && (
            <motion.span 
              className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              1
            </motion.span>
          )}
        </motion.button>
      </motion.div>
      
      {/* Interface du chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[90vw] max-w-md h-[500px] z-40 rounded-lg shadow-2xl overflow-hidden bg-gray-50 border border-gray-200"
          >
            {/* Entête du chatbot amélioré */}
            <div className="bg-gradient-to-r from-[#003566] to-[#002548] text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/90 mr-3 flex items-center justify-center shadow-md overflow-hidden">
                  <img src="/images/logo-small.svg" alt="Logo BorneFlix" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Elia, votre assistante</h3>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-green-200">En ligne et prête à vous aider</span>
                  </div>
                </div>
              </div>
              <motion.button 
                onClick={toggleChat} 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>
            </div>
            
            {/* Corps du chatbot */}
            <div className="h-[calc(100%-130px)] overflow-y-auto p-4 bg-gray-100">
              {messages.map(renderMessage)}
              
              {typingIndicator && (
                <div className="flex justify-start mb-3">
                  <div className="bg-white text-gray-800 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gray-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gray-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gray-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Suggestions rapides améliorées */}
            {suggestions.length > 0 && (
              <div className="bg-gradient-to-r from-white to-gray-50 border-t border-gray-200 p-3 overflow-x-auto">
                <div className="flex space-x-3 pb-1">
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={suggestion.id}
                      onClick={() => handleSendMessage(suggestion.text, true)}
                      className="px-4 py-2 bg-white hover:bg-[#f0f9e8] rounded-lg text-sm border border-gray-200 shadow-sm transition-all duration-200 flex-shrink-0 text-[#003566]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 400, 
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: '#8dc63f',
                        boxShadow: '0 4px 12px rgba(141, 198, 63, 0.15)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <i className="fas fa-lightbulb text-[#8dc63f] mr-2"></i>
                        <span>{suggestion.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Zone de saisie améliorée avec animations et meilleure interface */}
            <form onSubmit={handleSubmit} className="bg-white border-t border-gray-200 p-4 flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Posez votre question sur les bornes de recharge..."
                  className="w-full px-4 py-3 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8dc63f] border border-gray-200 pr-10 transition-all duration-300 shadow-sm hover:shadow"
                  autoFocus={isOpen}
                />
                {inputValue && (
                  <button
                    type="button"
                    onClick={() => setInputValue('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <i className="fas fa-times-circle"></i>
                  </button>
                )}
              </div>
              
              <motion.button
                type="submit"
                disabled={!inputValue.trim()}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                  inputValue.trim() 
                    ? 'bg-[#8dc63f] hover:bg-[#75a630] text-white cursor-pointer' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={inputValue.trim() ? { scale: 1.05, rotate: 5 } : {}}
                whileTap={inputValue.trim() ? { scale: 0.95 } : {}}
              >
                <i className="fas fa-paper-plane"></i>
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotFAQ;