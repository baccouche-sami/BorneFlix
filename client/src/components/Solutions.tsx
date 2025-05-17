import { Button } from "@/components/ui/button";
import evchargingImage from "@/assets/evcharging.svg";

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[100px] z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-tl-[200px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            NOS OFFRES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">La recharge en habitat collectif</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Borne Flix propose différentes options pour s'adapter parfaitement aux besoins de votre copropriété et de ses résidents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="relative">
            <div className="bg-primary/10 w-full h-full absolute -left-6 -top-6 rounded-xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={evchargingImage} 
                alt="Infrastructure de recharge en copropriété" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -right-8 -bottom-8 bg-white p-4 rounded-lg shadow-xl z-20">
              <div className="flex items-center justify-center bg-secondary/20 w-24 h-24 rounded-md">
                <i className="fas fa-plug text-secondary text-3xl"></i>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Infrastructure collective intelligente</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Notre solution d'infrastructure collective permet d'équiper l'ensemble du parking de votre copropriété. Chaque résident peut ainsi disposer d'un point de charge individuel, connecté à un système de gestion intelligent.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Dimensionnement adapté aux besoins actuels et futurs</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Gestion dynamique de la puissance disponible</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Facturation individuelle de la consommation</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Supervision à distance et maintenance préventive</span>
              </li>
            </ul>
            <div className="mt-2">
              <a href="#devis">
                <Button className="bg-secondary hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px]">
                  Demander un devis
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Solution individuelle à la demande</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pour les copropriétés souhaitant équiper progressivement leurs places de parking, nous proposons une solution évolutive qui s'adapte aux besoins de chaque résident.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Installation à la demande des copropriétaires</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Pré-équipement des parkings pour faciliter les futures installations</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Optimisation des coûts grâce à un déploiement progressif</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="text-gray-700">Accompagnement administratif complet (droit à la prise)</span>
              </li>
            </ul>
            <div className="mt-2">
              <a href="#devis">
                <Button className="bg-secondary hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px]">
                  Demander un devis
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="bg-secondary/10 w-full h-full absolute -right-6 -top-6 rounded-xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-8 bg-white">
              <img 
                src={evchargingImage} 
                alt="Installation progressive en copropriété" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="absolute -left-8 -bottom-8 bg-white p-4 rounded-lg shadow-xl z-20">
              <div className="flex items-center justify-center bg-accent/20 w-24 h-24 rounded-md">
                <i className="fas fa-bolt text-accent text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-24">
          <div className="inline-flex items-center p-1 rounded-full bg-white shadow-md mb-8">
            <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium">
              <i className="fas fa-play mr-2"></i> Voir notre vidéo explicative
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-2xl shadow-xl">
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-play text-primary text-2xl ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Solutions;
