import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { AdminInterf } from '../interface/admin-interf';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url: string = "http://localhost:3000/projets";
  private http = inject(HttpClient);
  
  isAdmin = signal<boolean>(false);

  getall() {
    return this.http.get<AdminInterf[]>(this.url);
  }

  
  login(login: string, mdp: string) {
    return this.http.get<AdminInterf[]>(`${this.url}?login=${login}&password=${mdp}`);
  }
  
  logout() {
    this.isAdmin.set(false);
  }
}