import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; // Importe le type de réponse
import { environment } from '../../../environments/environment';
import { ContactMessage } from '../../models/ContactModel';

@Injectable({ providedIn: 'root' })
export class ContactMe {
  
  /**
   * Spécifie explicitement que la méthode retourne une Promise contenant un EmailJSResponseStatus
   */
  envoyerMessage(donnees: ContactMessage): Promise<EmailJSResponseStatus>  {
    const templateParams = {
      from_name: donnees.name,
      from_email: donnees.email,
      subject: donnees.subject,
      message: donnees.message
    };

    return emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams,
      environment.emailjs.publicKey
    );
  }
}