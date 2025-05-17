import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1593941707882-a5bfcf2dd8b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solutions de recharge pour véhicules électriques en copropriété
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Borne Flix vous accompagne dans l'installation de bornes de recharge pour les copropriétés, de l'étude technique jusqu'à la maintenance.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#devis">
              <Button size="lg" className="bg-secondary hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full">
                Demander un devis gratuit
              </Button>
            </a>
            <a href="#solutions">
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-medium py-3 px-8 rounded-full">
                Découvrir nos solutions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
