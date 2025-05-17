import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Format de devis pour le formulaire
interface QuoteFormData {
  // Step 1: Information de base
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  // Step 2: Informations sur la copropriété
  typeLogement: string;
  adresse: string;
  codePostal: string;
  ville: string;
  nombrePlacesParking: string;
  nombreResidents: string;
  // Step 3: Informations techniques
  typeInstallation: string;
  nombreBornes: string;
  puissanceRequise: string;
  // Step 4: Informations complémentaires
  statutDemandeur: string;
  dateProjet: string;
  commentaires: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "Veuillez remplir tous les champs obligatoires" 
        });
      }
      
      // In a real application, we would store this in a database
      // or send an email notification
      
      // For now, just return success
      return res.status(200).json({ 
        success: true, 
        message: "Merci pour votre message ! Nous vous contacterons bientôt."
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Une erreur est survenue lors de l'envoi du formulaire" 
      });
    }
  });

  // API route for quote form submissions
  app.post("/api/quote", async (req, res) => {
    try {
      const formData: QuoteFormData = req.body;
      
      // Validation des champs requis
      if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
        return res.status(400).json({ 
          success: false, 
          message: "Veuillez remplir tous les champs obligatoires" 
        });
      }

      // Vérification simple de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return res.status(400).json({ 
          success: false, 
          message: "Adresse email invalide" 
        });
      }

      // Préparation du contenu de l'email
      const emailHtml = generateQuoteEmailHtml(formData);
      const emailText = generateQuoteEmailText(formData);

      // Console log pour déboguer (à enlever en production)
      console.log("Données du formulaire reçues:", formData);
      console.log("Email text généré:", emailText);

      // Dans une vraie application, on enverrait ceci à un service d'email
      // Simulation d'un envoi d'email réussi
      
      return res.status(200).json({
        success: true,
        message: "Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais."
      });
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire de devis:", error);
      return res.status(500).json({
        success: false,
        message: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer ultérieurement."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Fonction pour générer le contenu HTML de l'email
function generateQuoteEmailHtml(data: QuoteFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h1 { color: #0460D9; }
        h2 { color: #38b000; margin-top: 30px; }
        .section { margin-bottom: 30px; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; }
        .value { margin-left: 10px; }
        .footer { margin-top: 30px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Nouvelle demande de devis</h1>
        <p>Une nouvelle demande de devis a été soumise via le formulaire de votre site web.</p>
        
        <div class="section">
          <h2>Informations personnelles</h2>
          <div class="field">
            <span class="label">Nom:</span>
            <span class="value">${data.nom}</span>
          </div>
          <div class="field">
            <span class="label">Prénom:</span>
            <span class="value">${data.prenom}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          <div class="field">
            <span class="label">Téléphone:</span>
            <span class="value">${data.telephone}</span>
          </div>
        </div>
        
        <div class="section">
          <h2>Informations sur la copropriété</h2>
          <div class="field">
            <span class="label">Type de logement:</span>
            <span class="value">${data.typeLogement}</span>
          </div>
          <div class="field">
            <span class="label">Adresse:</span>
            <span class="value">${data.adresse}</span>
          </div>
          <div class="field">
            <span class="label">Code postal:</span>
            <span class="value">${data.codePostal}</span>
          </div>
          <div class="field">
            <span class="label">Ville:</span>
            <span class="value">${data.ville}</span>
          </div>
          <div class="field">
            <span class="label">Nombre de places de parking:</span>
            <span class="value">${data.nombrePlacesParking || 'Non spécifié'}</span>
          </div>
          <div class="field">
            <span class="label">Nombre de résidents:</span>
            <span class="value">${data.nombreResidents || 'Non spécifié'}</span>
          </div>
        </div>
        
        <div class="section">
          <h2>Spécifications techniques</h2>
          <div class="field">
            <span class="label">Type d'installation:</span>
            <span class="value">${data.typeInstallation}</span>
          </div>
          <div class="field">
            <span class="label">Nombre de bornes souhaité:</span>
            <span class="value">${data.nombreBornes}</span>
          </div>
          <div class="field">
            <span class="label">Puissance de charge souhaitée:</span>
            <span class="value">${data.puissanceRequise || 'Non spécifié'}</span>
          </div>
        </div>
        
        <div class="section">
          <h2>Informations complémentaires</h2>
          <div class="field">
            <span class="label">Statut du demandeur:</span>
            <span class="value">${data.statutDemandeur || 'Non spécifié'}</span>
          </div>
          <div class="field">
            <span class="label">Date du projet:</span>
            <span class="value">${data.dateProjet || 'Non spécifié'}</span>
          </div>
          <div class="field">
            <span class="label">Commentaires:</span>
            <div class="value" style="white-space: pre-line;">${data.commentaires || 'Aucun commentaire'}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Ce message a été généré automatiquement suite à une demande sur le site BorneFlix.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Fonction pour générer le contenu texte de l'email (version sans HTML)
function generateQuoteEmailText(data: QuoteFormData): string {
  return `
NOUVELLE DEMANDE DE DEVIS

Une nouvelle demande de devis a été soumise via le formulaire de votre site web.

INFORMATIONS PERSONNELLES
-------------------------
Nom: ${data.nom}
Prénom: ${data.prenom}
Email: ${data.email}
Téléphone: ${data.telephone}

INFORMATIONS SUR LA COPROPRIÉTÉ
-------------------------------
Type de logement: ${data.typeLogement}
Adresse: ${data.adresse}
Code postal: ${data.codePostal}
Ville: ${data.ville}
Nombre de places de parking: ${data.nombrePlacesParking || 'Non spécifié'}
Nombre de résidents: ${data.nombreResidents || 'Non spécifié'}

SPÉCIFICATIONS TECHNIQUES
-------------------------
Type d'installation: ${data.typeInstallation}
Nombre de bornes souhaité: ${data.nombreBornes}
Puissance de charge souhaitée: ${data.puissanceRequise || 'Non spécifié'}

INFORMATIONS COMPLÉMENTAIRES
----------------------------
Statut du demandeur: ${data.statutDemandeur || 'Non spécifié'}
Date du projet: ${data.dateProjet || 'Non spécifié'}
Commentaires: ${data.commentaires || 'Aucun commentaire'}

Ce message a été généré automatiquement suite à une demande sur le site BorneFlix.
  `;
}
