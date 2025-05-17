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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rgpd) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter les conditions d'utilisation et la politique de confidentialité.",
        variant: "destructive"
      });
      return;
    }

    // Here we would send the data to the server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Demande envoyée",
      description: "Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.",
    });
    
    // Reset form and go back to step 1
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
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-8">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                step === currentStep
                  ? "bg-primary text-white"
                  : step < currentStep
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
            {step < totalSteps && (
              <div
                className={`w-12 h-1 ${
                  step < currentStep ? "bg-secondary" : "bg-gray-200"
                }`}
              />
            )}
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
    <section id="devis" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Demandez votre devis gratuit</h2>
          <p className="text-lg">
            Remplissez le formulaire ci-dessous pour obtenir une proposition personnalisée pour votre copropriété.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <CardContent className="p-8">
              {renderStepIndicator()}
              
              <h3 className="text-xl font-semibold mb-6 text-center">{renderStepTitle()}</h3>
              
              <form onSubmit={handleSubmit}>
                {/* Step 1: Informations personnelles */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom <span className="text-red-500">*</span></Label>
                        <Input
                          id="nom"
                          name="nom"
                          placeholder="Votre nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom <span className="text-red-500">*</span></Label>
                        <Input
                          id="prenom"
                          name="prenom"
                          placeholder="Votre prénom"
                          value={formData.prenom}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votreemail@exemple.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone <span className="text-red-500">*</span></Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        placeholder="01 23 45 67 89"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Informations sur la copropriété */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="typeLogement">Type de logement <span className="text-red-500">*</span></Label>
                      <Select 
                        value={formData.typeLogement} 
                        onValueChange={(value) => handleSelectChange("typeLogement", value)}
                      >
                        <SelectTrigger>
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

                    <div className="space-y-2">
                      <Label htmlFor="adresse">Adresse de la copropriété <span className="text-red-500">*</span></Label>
                      <Input
                        id="adresse"
                        name="adresse"
                        placeholder="Numéro et nom de rue"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="codePostal">Code postal <span className="text-red-500">*</span></Label>
                        <Input
                          id="codePostal"
                          name="codePostal"
                          placeholder="75000"
                          value={formData.codePostal}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ville">Ville <span className="text-red-500">*</span></Label>
                        <Input
                          id="ville"
                          name="ville"
                          placeholder="Paris"
                          value={formData.ville}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombrePlacesParking">Nombre de places de parking</Label>
                        <Input
                          id="nombrePlacesParking"
                          name="nombrePlacesParking"
                          type="number"
                          placeholder="Ex: 50"
                          value={formData.nombrePlacesParking}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nombreResidents">Nombre de résidents</Label>
                        <Input
                          id="nombreResidents"
                          name="nombreResidents"
                          type="number"
                          placeholder="Ex: 100"
                          value={formData.nombreResidents}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Spécifications techniques */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Type d'installation souhaité <span className="text-red-500">*</span></Label>
                      <RadioGroup 
                        value={formData.typeInstallation}
                        onValueChange={(value) => handleRadioChange("typeInstallation", value)}
                        className="grid grid-cols-1 gap-4"
                      >
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="infrastructure-collective" id="infrastructure-collective" className="mt-1" />
                          <div>
                            <Label htmlFor="infrastructure-collective" className="font-medium cursor-pointer">Infrastructure collective</Label>
                            <p className="text-gray-600 text-sm">Installation d'une infrastructure commune pour l'ensemble de la copropriété avec gestion intelligente de l'énergie</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="solution-individuelle" id="solution-individuelle" className="mt-1" />
                          <div>
                            <Label htmlFor="solution-individuelle" className="font-medium cursor-pointer">Solution individuelle</Label>
                            <p className="text-gray-600 text-sm">Installation progressive selon les demandes des résidents, avec pré-équipement pour faciliter les futures installations</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="pre-equipement" id="pre-equipement" className="mt-1" />
                          <div>
                            <Label htmlFor="pre-equipement" className="font-medium cursor-pointer">Pré-équipement uniquement</Label>
                            <p className="text-gray-600 text-sm">Mise en place des infrastructures nécessaires pour faciliter l'installation future de bornes de recharge</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombreBornes">Nombre de bornes souhaité <span className="text-red-500">*</span></Label>
                        <Select 
                          value={formData.nombreBornes} 
                          onValueChange={(value) => handleSelectChange("nombreBornes", value)}
                        >
                          <SelectTrigger>
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
                      <div className="space-y-2">
                        <Label htmlFor="puissanceRequise">Puissance de charge souhaitée</Label>
                        <Select 
                          value={formData.puissanceRequise} 
                          onValueChange={(value) => handleSelectChange("puissanceRequise", value)}
                        >
                          <SelectTrigger>
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
                  </div>
                )}

                {/* Step 4: Informations complémentaires */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="statutDemandeur">Vous êtes</Label>
                      <Select 
                        value={formData.statutDemandeur} 
                        onValueChange={(value) => handleSelectChange("statutDemandeur", value)}
                      >
                        <SelectTrigger>
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

                    <div className="space-y-2">
                      <Label htmlFor="dateProjet">Quand souhaitez-vous réaliser ce projet ?</Label>
                      <Select 
                        value={formData.dateProjet} 
                        onValueChange={(value) => handleSelectChange("dateProjet", value)}
                      >
                        <SelectTrigger>
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

                    <div className="space-y-2">
                      <Label htmlFor="commentaires">Commentaires ou précisions supplémentaires</Label>
                      <Textarea
                        id="commentaires"
                        name="commentaires"
                        placeholder="Partagez avec nous toute information complémentaire utile à votre projet..."
                        value={formData.commentaires}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                      <Checkbox
                        id="rgpd"
                        checked={formData.rgpd}
                        onCheckedChange={(checked) => handleCheckboxChange("rgpd", checked as boolean)}
                      />
                      <div>
                        <Label htmlFor="rgpd" className="font-medium cursor-pointer">
                          J'accepte que mes données personnelles soient traitées par Borne Flix <span className="text-red-500">*</span>
                        </Label>
                        <p className="text-gray-600 text-sm mt-1">
                          En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées pour me recontacter dans le cadre de ma demande de devis.
                          Consultez notre <a href="#" className="text-primary hover:underline">politique de confidentialité</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="px-6"
                    >
                      <i className="fas fa-arrow-left mr-2"></i> Précédent
                    </Button>
                  )}
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      className="bg-primary hover:bg-blue-700 ml-auto px-6"
                      onClick={nextStep}
                    >
                      Suivant <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-secondary hover:bg-green-600 ml-auto px-6"
                    >
                      Demander mon devis gratuit <i className="fas fa-check ml-2"></i>
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
