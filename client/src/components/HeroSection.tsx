import { Button } from "@/components/ui/button";
// Utilisation des images existantes dans le dossier public
const chargerStationImage = "/images/ev-charging-1.jpg";
const parkingChargerImage = "/images/apartment-parking.jpg";
const evChargingImage = "/images/ev-charging-2.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Blue notification banner at top */}
      <div className="w-full bg-blue-50 text-blue-800 py-2 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm font-medium">
            <span className="mr-1">✨</span> Profitez des aides financières ADVENIR jusqu'à 50% pour l'installation de bornes en copropriété <span className="ml-1">✨</span>
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4 pt-20 pb-24 md:pt-24 md:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content column */}
            <div className="lg:col-span-6">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6">
                Solutions de recharge pour copropriétés
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#003566]">
                Vous êtes <span className="text-primary">syndic</span> ou <span className="text-primary">copropriétaire</span>?
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                Équipez sereinement le parking de votre immeuble en bornes de recharge
              </h2>
              
              <p className="text-lg mb-8 text-gray-600">
                BorneFlix vous accompagne dans l'installation de bornes de recharge pour véhicules électriques adaptées aux besoins de votre copropriété, avec des solutions de financement dédiées.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <a href="#devis">
                  <Button size="lg" className="bg-secondary hover:bg-green-600 text-white font-medium py-6 px-8 rounded-full shadow-lg shadow-secondary/30 transition-all duration-300 hover:translate-y-[-2px]">
                    Demander un devis gratuit
                  </Button>
                </a>
                <a href="#solutions">
                  <Button variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-6 px-8 rounded-full transition-all duration-300">
                    Nos solutions
                  </Button>
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-secondary mr-2"><i className="fas fa-certificate"></i></div>
                  <span className="text-sm font-medium">IRVE certifié</span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-secondary mr-2"><i className="fas fa-euro-sign"></i></div>
                  <span className="text-sm font-medium">Aides financières</span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-secondary mr-2"><i className="fas fa-tools"></i></div>
                  <span className="text-sm font-medium">Maintenance incluse</span>
                </div>
              </div>
            </div>
            
            {/* Right image column */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative">
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src={chargerStationImage} 
                    alt="Borne de recharge pour véhicule électrique en copropriété" 
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
                
                {/* Floating small images */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={parkingChargerImage}
                    alt="Installation en parking souterrain" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={evChargingImage}
                    alt="Véhicule en charge" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Certification badge */}
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <div className="bg-accent text-white font-bold text-base p-4 rounded-lg shadow-lg">
                    <i className="fas fa-check-circle mr-2"></i> ADVENIR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom info boxes */}
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 text-secondary text-xl">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Solution durable</h3>
              </div>
              <p className="text-gray-600">
                Réduisez l'empreinte carbone de votre copropriété tout en valorisant votre patrimoine immobilier.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 text-primary text-xl">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Installation sur-mesure</h3>
              </div>
              <p className="text-gray-600">
                Solutions adaptées aux spécificités de votre copropriété, qu'elle soit neuve ou ancienne.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 text-purple-500 text-xl">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Expertise certifiée</h3>
              </div>
              <p className="text-gray-600">
                Nos électriciens sont qualifiés IRVE et assurent une installation conforme et sécurisée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
