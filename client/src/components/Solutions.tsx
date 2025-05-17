import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos solutions pour copropriétés</h2>
          <p className="text-lg">
            Borne Flix propose différentes options pour s'adapter parfaitement aux besoins de votre copropriété et de ses résidents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1648326311535-21bdbe679366?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Borne de recharge en copropriété" 
              className="rounded-lg shadow-md w-full h-auto" 
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Infrastructure collective intelligente</h3>
            <p className="mb-4">
              Notre solution d'infrastructure collective permet d'équiper l'ensemble du parking de votre copropriété. Chaque résident peut ainsi disposer d'un point de charge individuel, connecté à un système de gestion intelligent.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Dimensionnement adapté aux besoins actuels et futurs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Gestion dynamique de la puissance disponible</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Facturation individuelle de la consommation</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Supervision à distance et maintenance préventive</span>
              </li>
            </ul>
            <a href="#devis">
              <Button className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full">
                Demander un devis
              </Button>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Solution individuelle à la demande</h3>
            <p className="mb-4">
              Pour les copropriétés souhaitant équiper progressivement leurs places de parking, nous proposons une solution évolutive qui s'adapte aux besoins de chaque résident.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Installation à la demande des copropriétaires</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Pré-équipement des parkings pour faciliter les futures installations</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Optimisation des coûts grâce à un déploiement progressif</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span>Accompagnement administratif complet (droit à la prise)</span>
              </li>
            </ul>
            <a href="#devis">
              <Button className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full">
                Demander un devis
              </Button>
            </a>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1592001494534-d8fd0cb87d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Installation progressive en copropriété" 
              className="rounded-lg shadow-md w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
