import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const QuoteForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Information de base
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    // Step 2: Informations sur la copropriété
    typeLogement: "",
    adresse: "",
    codePostal: "",
    ville: "",
    nombrePlacesParking: "",
    nombreResidents: "",
    // Step 3: Informations techniques
    typeInstallation: "infrastructure-collective", // Default value
    nombreBornes: "",
    puissanceRequise: "",
    // Step 4: Informations complémentaires
    statutDemandeur: "",
    dateProjet: "",
    commentaires: "",
    rgpd: false
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const nextStep = () => {
    // Validation for each step
    if (currentStep === 1) {
      if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
        toast({
          title: "Champs obligatoires",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive"
        });
        return;
      }
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Email invalide",
          description: "Veuillez entrer une adresse email valide.",
          variant: "destructive"
        });
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.typeLogement || !formData.adresse || !formData.codePostal || !formData.ville) {
        toast({
          title: "Champs obligatoires",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive"
        });
        return;
      }
    } else if (currentStep === 3) {
      if (!formData.typeInstallation || !formData.nombreBornes) {
        toast({
          title: "Champs obligatoires",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive"
        });
        return;
      }
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rgpd) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter les conditions d'utilisation et la politique de confidentialité.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Envoi des données au serveur
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Afficher le message de succès
        toast({
          title: "Demande envoyée",
          description: data.message || "Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.",
        });
        
        // Réinitialiser le formulaire et revenir à l'étape 1
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          typeLogement: "",
          adresse: "",
          codePostal: "",
          ville: "",
          nombrePlacesParking: "",
          nombreResidents: "",
          typeInstallation: "infrastructure-collective",
          nombreBornes: "",
          puissanceRequise: "",
          statutDemandeur: "",
          dateProjet: "",
          commentaires: "",
          rgpd: false
        });
        setCurrentStep(1);
        
        // Faire défiler vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Afficher le message d'erreur
        toast({
          title: "Erreur",
          description: data.message || "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer ultérieurement.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast({
        title: "Erreur de connexion",
        description: "Impossible de contacter le serveur. Veuillez vérifier votre connexion et réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to get step icons
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <i className="fas fa-user"></i>;
      case 2:
        return <i className="fas fa-building"></i>;
      case 3:
        return <i className="fas fa-plug"></i>;
      case 4:
        return <i className="fas fa-clipboard-list"></i>;
      default:
        return step;
    }
  };

  // Function to get step descriptions
  const getStepDescription = (step: number) => {
    switch (step) {
      case 1:
        return "Vos coordonnées";
      case 2:
        return "Votre copropriété";
      case 3:
        return "Technique";
      case 4:
        return "Finalisation";
      default:
        return "";
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-10">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex flex-col items-center mx-4">
            <div className="relative">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-medium shadow-md transition-all duration-300 ${
                  step === currentStep
                    ? "bg-[#003566] text-white scale-110 shadow-lg"
                    : step < currentStep
                    ? "bg-[#8dc63f] text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {getStepIcon(step)}
                
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold border border-gray-100">
                  {step}
                </div>
              </div>
              
              {/* Progress connector */}
              {step < totalSteps && (
                <div className="absolute top-1/2 left-full w-10 h-1 -translate-y-1/2">
                  <div
                    className={`h-full rounded-full ${
                      step < currentStep ? "bg-[#8dc63f]" : "bg-gray-200"
                    }`}
                  />
                </div>
              )}
            </div>
            
            {/* Step label */}
            <span 
              className={`text-sm font-medium mt-3 ${
                step === currentStep ? "text-[#003566]" : "text-gray-500"
              }`}
            >
              {getStepDescription(step)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const renderStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Vos informations personnelles";
      case 2:
        return "Informations sur la copropriété";
      case 3:
        return "Spécifications techniques";
      case 4:
        return "Informations complémentaires";
      default:
        return "";
    }
  };

  return (
    <section id="devis" className="py-24 bg-gradient-to-r from-[#f8fafc] to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#8dc63f]/10 text-[#8dc63f] px-6 py-2 rounded-full text-sm font-medium mb-4">
            DEMANDE DE DEVIS GRATUIT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">Demandez votre devis personnalisé</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Remplissez le formulaire ci-dessous pour obtenir une proposition adaptée 
            aux besoins spécifiques de votre copropriété.
            <br />Notre équipe d'experts vous contactera dans les 24h.
          </p>
          
          {/* Form benefits badges - improved design */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white rounded-full px-6 py-3 shadow-md flex items-center text-sm font-medium text-gray-800 hover:shadow-lg transition-shadow duration-300">
              <div className="w-8 h-8 bg-[#8dc63f]/15 rounded-full flex items-center justify-center mr-3 text-[#8dc63f]">
                <i className="fas fa-check"></i>
              </div>
              Sans engagement
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md flex items-center text-sm font-medium text-gray-800 hover:shadow-lg transition-shadow duration-300">
              <div className="w-8 h-8 bg-[#8dc63f]/15 rounded-full flex items-center justify-center mr-3 text-[#8dc63f]">
                <i className="fas fa-clock"></i>
              </div>
              Réponse sous 24h
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-md flex items-center text-sm font-medium text-gray-800 hover:shadow-lg transition-shadow duration-300">
              <div className="w-8 h-8 bg-[#8dc63f]/15 rounded-full flex items-center justify-center mr-3 text-[#8dc63f]">
                <i className="fas fa-user-check"></i>
              </div>
              100% personnalisé
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-xl shadow-xl overflow-hidden border-0">
            <div className="bg-gradient-to-r from-[#003566] to-[#1a4d85] text-white p-8 text-center">
              <p className="text-sm uppercase tracking-wider font-medium mb-2">Étape {currentStep} sur {totalSteps}</p>
              <h3 className="text-2xl font-bold">{renderStepTitle()}</h3>
            </div>
            
            <CardContent className="p-8 md:p-10">
              {renderStepIndicator()}
              
              <form onSubmit={handleSubmit} className="mt-8">
                {/* Step 1: Informations personnelles */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="nom" className="text-gray-700 font-medium">
                          Nom <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <i className="fas fa-user"></i>
                          </div>
                          <Input
                            id="nom"
                            name="nom"
                            placeholder="Votre nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                            className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="prenom" className="text-gray-700 font-medium">
                          Prénom <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <i className="fas fa-user"></i>
                          </div>
                          <Input
                            id="prenom"
                            name="prenom"
                            placeholder="Votre prénom"
                            value={formData.prenom}
                            onChange={handleInputChange}
                            className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votreemail@exemple.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="telephone" className="text-gray-700 font-medium">
                        Téléphone <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          placeholder="01 23 45 67 89"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start">
                      <div className="text-blue-500 mr-3 mt-1">
                        <i className="fas fa-info-circle text-xl"></i>
                      </div>
                      <div>
                        <p className="text-blue-800 text-sm">Vos données personnelles sont protégées. Nous ne les partagerons jamais avec des tiers sans votre consentement.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Informations sur la copropriété */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="typeLogement" className="text-gray-700 font-medium">
                        Type de logement <span className="text-red-500">*</span>
                      </Label>
                      <Select 
                        value={formData.typeLogement} 
                        onValueChange={(value) => handleSelectChange("typeLogement", value)}
                      >
                        <SelectTrigger className="py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all">
                          <SelectValue placeholder="Sélectionnez un type de logement" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="copropriete">Copropriété</SelectItem>
                          <SelectItem value="immeuble">Immeuble</SelectItem>
                          <SelectItem value="residence">Résidence</SelectItem>
                          <SelectItem value="lotissement">Lotissement</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="adresse" className="text-gray-700 font-medium">
                        Adresse de la copropriété <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <Input
                          id="adresse"
                          name="adresse"
                          placeholder="Numéro et nom de rue"
                          value={formData.adresse}
                          onChange={handleInputChange}
                          className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="codePostal" className="text-gray-700 font-medium">
                          Code postal <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <i className="fas fa-map"></i>
                          </div>
                          <Input
                            id="codePostal"
                            name="codePostal"
                            placeholder="75000"
                            value={formData.codePostal}
                            onChange={handleInputChange}
                            className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="ville" className="text-gray-700 font-medium">
                          Ville <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <i className="fas fa-city"></i>
                          </div>
                          <Input
                            id="ville"
                            name="ville"
                            placeholder="Paris"
                            value={formData.ville}
                            onChange={handleInputChange}
                            className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="nombrePlacesParking" className="text-gray-700 font-medium">
                          Nombre de places de parking
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <i className="fas fa-parking"></i>
                          </div>
                          <Input
                            id="nombrePlacesParking"
                            name="nombrePlacesParking"
                            type="number"
                            placeholder="Ex: 50"
                            value={formData.nombrePlacesParking}
                            onChange={handleInputChange}
                            className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="nombreResidents" className="text-gray-700 font-medium">
                          Nombre de résidents
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <i className="fas fa-users"></i>
                          </div>
                          <Input
                            id="nombreResidents"
                            name="nombreResidents"
                            type="number"
                            placeholder="Ex: 100"
                            value={formData.nombreResidents}
                            onChange={handleInputChange}
                            className="pl-10 py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start">
                      <div className="text-green-500 mr-3 mt-1">
                        <i className="fas fa-lightbulb text-xl"></i>
                      </div>
                      <div>
                        <p className="text-green-800 text-sm">Plus vous fournissez de détails sur votre copropriété, plus notre proposition sera précise et adaptée à vos besoins.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Spécifications techniques */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <Label className="text-gray-700 font-medium">
                        Type d'installation souhaité <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup 
                        value={formData.typeInstallation}
                        onValueChange={(value) => handleRadioChange("typeInstallation", value)}
                        className="grid grid-cols-1 gap-4"
                      >
                        <div className="flex items-start space-x-3 p-5 border border-gray-200 hover:border-primary rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-200">
                          <RadioGroupItem value="infrastructure-collective" id="infrastructure-collective" className="mt-1" />
                          <div>
                            <Label htmlFor="infrastructure-collective" className="font-bold text-lg cursor-pointer">Infrastructure collective</Label>
                            <p className="text-gray-600 mt-1">Installation d'une infrastructure commune pour l'ensemble de la copropriété avec gestion intelligente de l'énergie</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Recommandé</span>
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Économique</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 p-5 border border-gray-200 hover:border-primary rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-200">
                          <RadioGroupItem value="solution-individuelle" id="solution-individuelle" className="mt-1" />
                          <div>
                            <Label htmlFor="solution-individuelle" className="font-bold text-lg cursor-pointer">Solution individuelle</Label>
                            <p className="text-gray-600 mt-1">Installation progressive selon les demandes des résidents, avec pré-équipement pour faciliter les futures installations</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Progressif</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 p-5 border border-gray-200 hover:border-primary rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-200">
                          <RadioGroupItem value="pre-equipement" id="pre-equipement" className="mt-1" />
                          <div>
                            <Label htmlFor="pre-equipement" className="font-bold text-lg cursor-pointer">Pré-équipement uniquement</Label>
                            <p className="text-gray-600 mt-1">Mise en place des infrastructures nécessaires pour faciliter l'installation future de bornes de recharge</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Anticipation</span>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="nombreBornes" className="text-gray-700 font-medium">
                          Nombre de bornes souhaité <span className="text-red-500">*</span>
                        </Label>
                        <Select 
                          value={formData.nombreBornes} 
                          onValueChange={(value) => handleSelectChange("nombreBornes", value)}
                        >
                          <SelectTrigger className="py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all">
                            <SelectValue placeholder="Sélectionnez une quantité" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1 à 5 bornes</SelectItem>
                            <SelectItem value="6-10">6 à 10 bornes</SelectItem>
                            <SelectItem value="11-20">11 à 20 bornes</SelectItem>
                            <SelectItem value="21-50">21 à 50 bornes</SelectItem>
                            <SelectItem value="50+">Plus de 50 bornes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="puissanceRequise" className="text-gray-700 font-medium">
                          Puissance de charge souhaitée
                        </Label>
                        <Select 
                          value={formData.puissanceRequise} 
                          onValueChange={(value) => handleSelectChange("puissanceRequise", value)}
                        >
                          <SelectTrigger className="py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all">
                            <SelectValue placeholder="Sélectionnez une puissance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3.7">3.7 kW (charge lente)</SelectItem>
                            <SelectItem value="7.4">7.4 kW (charge accélérée)</SelectItem>
                            <SelectItem value="11">11 kW (charge rapide)</SelectItem>
                            <SelectItem value="22">22 kW (charge très rapide)</SelectItem>
                            <SelectItem value="ne-sais-pas">Je ne sais pas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex items-start">
                      <div className="text-indigo-500 mr-3 mt-1">
                        <i className="fas fa-bolt text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-indigo-800 font-medium">Besoin d'aide pour choisir?</h4>
                        <p className="text-indigo-700 text-sm mt-1">Nos experts sont là pour vous conseiller la meilleure solution technique adaptée à votre copropriété. Vous pouvez également sélectionner "Je ne sais pas" et nous vous guiderons.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Informations complémentaires */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="statutDemandeur" className="text-gray-700 font-medium">
                        Vous êtes
                      </Label>
                      <Select 
                        value={formData.statutDemandeur} 
                        onValueChange={(value) => handleSelectChange("statutDemandeur", value)}
                      >
                        <SelectTrigger className="py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all">
                          <SelectValue placeholder="Sélectionnez votre statut" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coproprietaire">Copropriétaire</SelectItem>
                          <SelectItem value="conseil-syndical">Membre du conseil syndical</SelectItem>
                          <SelectItem value="syndic">Syndic</SelectItem>
                          <SelectItem value="gestionnaire">Gestionnaire d'immeuble</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="dateProjet" className="text-gray-700 font-medium">
                        Quand souhaitez-vous réaliser ce projet ?
                      </Label>
                      <Select 
                        value={formData.dateProjet} 
                        onValueChange={(value) => handleSelectChange("dateProjet", value)}
                      >
                        <SelectTrigger className="py-6 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all">
                          <SelectValue placeholder="Sélectionnez une période" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maintenant">Dès que possible</SelectItem>
                          <SelectItem value="3mois">Dans les 3 prochains mois</SelectItem>
                          <SelectItem value="6mois">Dans les 6 prochains mois</SelectItem>
                          <SelectItem value="1an">D'ici un an</SelectItem>
                          <SelectItem value="simple-renseignement">Simple renseignement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="commentaires" className="text-gray-700 font-medium">
                        Commentaires ou précisions supplémentaires
                      </Label>
                      <Textarea
                        id="commentaires"
                        name="commentaires"
                        placeholder="Partagez avec nous toute information complémentaire utile à votre projet..."
                        value={formData.commentaires}
                        onChange={handleInputChange}
                        rows={4}
                        className="py-3 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    <div className="p-5 border border-gray-200 rounded-xl">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="rgpd"
                          checked={formData.rgpd}
                          onCheckedChange={(checked) => handleCheckboxChange("rgpd", checked as boolean)}
                          className="mt-1 h-5 w-5 border-gray-300 text-primary"
                        />
                        <div>
                          <Label htmlFor="rgpd" className="text-gray-800 font-medium cursor-pointer">
                            J'accepte que mes données personnelles soient traitées par Borne Flix <span className="text-red-500">*</span>
                          </Label>
                          <p className="text-gray-600 text-sm mt-2">
                            En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour me recontacter dans le cadre de ma demande de devis.
                            Consultez notre <a href="#" className="text-primary hover:underline font-medium">politique de confidentialité</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 flex items-start">
                      <div className="text-yellow-500 mr-3 mt-1">
                        <i className="fas fa-shield-alt text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-yellow-800 font-medium">Protection de vos données</h4>
                        <p className="text-yellow-700 text-sm mt-1">Toutes vos informations sont sécurisées et traitées conformément au RGPD. Nous ne communiquerons jamais vos coordonnées à des tiers sans votre consentement explicite.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-8">
                  <div className="text-gray-500 text-sm">
                    {currentStep > 1 ? `Étape ${currentStep-1} complétée` : "Commencez votre demande"}
                  </div>
                  
                  <div className="flex space-x-4">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="px-8 py-6 border-gray-300 hover:bg-gray-50 transition-colors"
                      >
                        <i className="fas fa-arrow-left mr-2"></i> Précédent
                      </Button>
                    )}
                    
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        className="bg-primary hover:bg-blue-600 text-white font-medium px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                        onClick={nextStep}
                      >
                        Continuer <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-secondary hover:bg-green-600 text-white font-medium px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-circle-notch fa-spin mr-2"></i>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Demander mon devis gratuit <i className="fas fa-check-circle ml-2"></i>
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Testimonial below form */}
          <div className="mt-10 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start">
              <div className="text-yellow-400 mr-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div>
                <p className="text-gray-700 italic">"Processus de devis très efficace et rapide. L'équipe de Borne Flix a été très professionnelle de bout en bout. Installation réalisée dans les délais annoncés."</p>
                <p className="mt-2 font-medium text-gray-900">Michel Dubois, Président de conseil syndical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
