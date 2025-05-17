import { Card, CardContent } from "@/components/ui/card";

const Introduction = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">La recharge en copropriété simplifiée</h2>
          <p className="text-lg">
            Spécialiste des infrastructures de recharge pour véhicules électriques, Borne Flix propose une solution clé en main pour équiper votre copropriété, facilitant la mobilité électrique pour tous les résidents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white p-6 rounded-lg shadow-md text-center">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-plug text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation sur mesure</h3>
              <p>Notre équipe d'experts réalise une étude technique complète pour proposer la solution adaptée à votre copropriété.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white p-6 rounded-lg shadow-md text-center">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-wallet text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financement optimisé</h3>
              <p>Profitez des aides financières et subventions disponibles pour réduire le coût d'installation de votre infrastructure.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white p-6 rounded-lg shadow-md text-center">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance garantie</h3>
              <p>Service après-vente réactif et maintenance préventive pour assurer le bon fonctionnement de vos bornes à long terme.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
