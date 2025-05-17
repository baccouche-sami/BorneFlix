const Process = () => {
  return (
    <section id="processus" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre processus d'installation</h2>
          <p className="text-lg">
            Un parcours simplifié en plusieurs étapes pour un déploiement serein de votre infrastructure de recharge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-lg font-semibold mb-2">Étude technique</h3>
            <p>Analyse de votre copropriété et de ses besoins spécifiques pour dimensionner l'installation.</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-lg font-semibold mb-2">Proposition et vote</h3>
            <p>Présentation de la solution et accompagnement lors de l'assemblée générale de copropriété.</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-lg font-semibold mb-2">Installation</h3>
            <p>Réalisation des travaux d'infrastructure et mise en place des bornes de recharge.</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-lg font-semibold mb-2">Suivi et maintenance</h3>
            <p>Support continu, supervision et maintenance préventive de l'infrastructure.</p>
          </div>
        </div>
        
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80" 
            alt="Installation de bornes en copropriété" 
            className="w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
