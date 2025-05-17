const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Borne<span className="text-secondary">Flix</span>
            </h3>
            <p className="mb-4">
              Solutions de recharge pour véhicules électriques en copropriété. Installation, maintenance et services personnalisés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">Infrastructure collective</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Solution individuelle</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pré-équipement</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Supervision</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Témoignages</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 w-5 text-center"></i>
                <span>123 Avenue de l'Électricité, 75000 Paris</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 w-5 text-center"></i>
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 w-5 text-center"></i>
                <span>contact@borneflix.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Borne Flix. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-secondary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-secondary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-secondary transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
