import nodemailer from 'nodemailer';

// Configuration du transporteur pour o2switch
const transporter = nodemailer.createTransport({
  host: 'mail.gh-solutions.fr', // Pour o2switch, utiliser le serveur SMTP de OVH
  port: 465, // Port SSL
  secure: true, // SSL/TLS
  auth: {
    user: process.env.EMAIL_USER || 'borne-de-recharge@gh-solutions.fr',
    pass: process.env.EMAIL_PASSWORD || 'Azerty123@Zarzis'
  }
});

interface EmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content?: Buffer | string;
    path?: string;
    contentType?: string;
  }>;
}

/**
 * Envoie un email avec les options spécifiées
 * @param options Options d'email (destinataire, sujet, contenu...)
 * @returns Promise résolu avec le résultat de l'envoi
 */
export async function sendEmail(options: EmailOptions): Promise<any> {
  try {
    // Configuration par défaut de l'expéditeur si non fourni
    const from = options.from || `BorneFlix <${process.env.EMAIL_USER || 'contact@borneflix.fr'}>`;
    
    // Envoi de l'email
    const info = await transporter.sendMail({
      from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      replyTo: options.replyTo || from,
      attachments: options.attachments
    });
    
    console.log('Email envoyé avec succès:', info.messageId);
    return info;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
}

/**
 * Vérifie que la configuration d'email est valide en essayant d'envoyer un email de test
 * @returns Promise<boolean> indiquant si la vérification est réussie
 */
export async function verifyEmailConfig(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('La configuration d\'email est valide et prête à envoyer des messages');
    return true;
  } catch (error) {
    console.error('Erreur de configuration email:', error);
    return false;
  }
}

export default {
  sendEmail,
  verifyEmailConfig
};