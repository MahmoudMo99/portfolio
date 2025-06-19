import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private scriptURL =
    'https://script.google.com/macros/s/AKfycbyoICxePVrThQ82seVephqPFYfYjy1PnBU4msn6AllbY4UMHoGMV_x0kGfzc9WxO6Ig/exec';

  constructor(private http: HttpClient) {}

  sendMessage(form: { name: string; email: string; message: string }) {
    return this.http.post(this.scriptURL, form);
  }
}
