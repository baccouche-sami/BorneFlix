import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            DEMANDE DE DEVIS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Devenez acteur de la transition énergétique</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
            Demandez dès maintenant un devis gratuit et sans engagement pour l'installation de bornes de recharge dans votre copropriété.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#devis">
              <Button className="bg-secondary hover:bg-green-600 text-white font-medium py-6 px-10 rounded-full shadow-lg shadow-secondary/10 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px] text-lg">
                Je demande mon devis gratuit
              </Button>
            </a>
            <a href="#contact" className="text-white hover:text-secondary transition-colors flex items-center">
              <i className="fas fa-phone-alt mr-2"></i>
              <span>Nous contacter</span>
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">5069</div>
              <div className="text-white/80">Bornes installées</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">362535</div>
              <div className="text-white/80">kWh délivrés</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">2035</div>
              <div className="text-white/80">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
