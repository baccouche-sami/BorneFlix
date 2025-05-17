import { useEffect } from "react";

const QuoteForm = () => {
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="devis" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Demandez votre devis gratuit</h2>
          <p className="text-lg">
            Remplissez le formulaire ci-dessous pour obtenir une proposition personnalisée pour votre copropriété.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="w-full h-[600px]">
            <div 
              data-tf-widget="qgY09C1G" 
              data-tf-opacity="100" 
              data-tf-iframe-props="title=Formulaire de devis Borne Flix" 
              data-tf-transitive-search-params 
              data-tf-medium="snippet" 
              className="w-full h-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
