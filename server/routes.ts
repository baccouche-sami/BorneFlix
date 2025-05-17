import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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

  const httpServer = createServer(app);
  return httpServer;
}
