import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here we would normally send the data to the server
    // For now, we'll just reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-lg">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white p-6 rounded-lg shadow-md">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4">Nos coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary mt-1 mr-3 w-5 text-center"></i>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p>123 Avenue de l'Électricité<br />75000 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-phone-alt text-primary mt-1 mr-3 w-5 text-center"></i>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p>01 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-envelope text-primary mt-1 mr-3 w-5 text-center"></i>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>contact@borneflix.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-clock text-primary mt-1 mr-3 w-5 text-center"></i>
                  <div>
                    <p className="font-medium">Horaires</p>
                    <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white p-6 rounded-lg shadow-md">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md">
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
