import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment.development';


export enum EmailType {
  CREATE_ACCOUNT_VERIFICATION,
  CHANGE_FORGOT_PASSWORD_VERIFICATION,
  INFORM_USER
}

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor() { }

  async sendOTP(otp: string, to: string, type: EmailType) {
    const params = {
      otp,
      to
    };

    if(type == EmailType.CHANGE_FORGOT_PASSWORD_VERIFICATION) return this.Core(environment.EmailJsChangePasswordVerificationTemplate, params)
    return this.Core(environment.EmailJsAccountCreateVerificationTemplate, params)
  }

  async sendInformEmail(to: string, body: string, subject: string) {
    const params = {
      body,
      to,
      subject
    };

    return this.Core(environment.EmailJsAccountCreateVerificationTemplate, params)
  }

  async Core(template:string, params:any) {
    try {
      const response: EmailJSResponseStatus = await emailjs.send(environment.EmailJsService, template, params, {
        publicKey: environment.EmailJsPublicKey,
      });
      console.log('SUCCESS!', response.status, response.text);
      return true;
    } catch (err) {
      console.error('FAILED...', err);
      return false;
    }
  }
  

}
