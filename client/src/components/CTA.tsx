import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à équiper votre copropriété ?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Demandez dès maintenant un devis gratuit et sans engagement pour l'installation de bornes de recharge dans votre copropriété.
        </p>
        <a href="#devis">
          <Button className="bg-accent hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full">
            Je demande mon devis gratuit
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
