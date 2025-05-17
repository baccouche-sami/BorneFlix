import { Button } from "@/components/ui/button";
import circularImage from "@/assets/circular-image.svg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-bl-[200px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-x-1/2 translate-y-1/2 z-0"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full z-0"></div>
      
      {/* Pink notification banner at top */}
      <div className="w-full bg-pink-100 text-pink-800 py-2 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm font-medium">
            <span className="mr-1">✨</span> Profitez des aides financières ADVENIR pour l'installation de bornes en copropriété <span className="ml-1">✨</span>
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              La recharge en <span className="text-secondary">copropriété</span> n'a jamais été aussi simple
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Borne Flix vous accompagne dans l'installation de bornes de recharge pour les copropriétés, de l'étude technique jusqu'à la maintenance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#devis">
                <Button size="lg" className="bg-secondary hover:bg-green-600 text-white font-medium py-6 px-8 rounded-full shadow-lg shadow-secondary/30 transition-all duration-300 hover:translate-y-[-2px]">
                  Demander un devis gratuit
                </Button>
              </a>
              <a href="#solutions">
                <Button variant="outline" size="lg" className="border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-6 px-8 rounded-full transition-all duration-300">
                  Découvrir nos solutions
                </Button>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[450px] h-[450px] overflow-hidden">
                <img 
                  src={circularImage} 
                  alt="Borne de recharge pour véhicule électrique" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <div className="bg-accent text-white font-bold text-xl p-6 rounded-lg shadow-lg">
                  IRVE certifié
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
