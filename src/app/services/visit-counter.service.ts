import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisitCounterService {
  private binUrl = 'https://api.jsonbin.io/v3/b/68a5e6daae596e708fcf2517';
  private secretKey =
    '$2a$10$H.MNgqqwTZK0AZpk1n/EiOceZF6TOF4Dqn1BJ0ZCyQbDXIXnfLU0O';
  constructor(private http: HttpClient) {}

  updateVisit(): Observable<number> {
    const headers = new HttpHeaders({ 'X-Master-Key': this.secretKey });
    return new Observable((observer) => {
      this.http.get<any>(this.binUrl, { headers }).subscribe((res) => {
        const current = res.record.visits || 0;
        const updated = current + 1;
        this.http
          .put<any>(this.binUrl, { visits: updated }, { headers })
          .subscribe(() => {
            observer.next(updated);
            observer.complete();
          });
      });
    });
  }
}
