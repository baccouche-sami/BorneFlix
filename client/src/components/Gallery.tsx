const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos réalisations</h2>
          <p className="text-lg">
            Découvrez quelques exemples d'installations de bornes de recharge en copropriété réalisées par Borne Flix.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1558409057-bbe677503a27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Installation en parking souterrain" 
            className="rounded-lg shadow-md w-full h-auto object-cover" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Résidence moderne avec bornes de recharge" 
            className="rounded-lg shadow-md w-full h-auto object-cover" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1589758443946-84c44daeb64f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Voiture en charge sur une borne Borne Flix" 
            className="rounded-lg shadow-md w-full h-auto object-cover" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Complexe résidentiel équipé" 
            className="rounded-lg shadow-md w-full h-auto object-cover" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1593941707882-a5bfcf2dd8b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Bornes multiples en parking partagé" 
            className="rounded-lg shadow-md w-full h-auto object-cover" 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
            alt="Solution écologique avec panneaux solaires" 
            className="rounded-lg shadow-md w-full h-auto object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
