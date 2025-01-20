import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common'; // Importamos isPlatformBrowser

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private apiUrl = 'http://localhost:3000/login';
  private user: any = null;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  // Método para iniciar sesión
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Establecer los datos del usuario y guardarlos en localStorage
  setUser(user: any) {
    this.user = user;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user', JSON.stringify(user)); // Guardar los datos del usuario solo si estamos en el navegador
    }
  }

  // Obtener los datos del usuario, ya sea desde memoria o localStorage
  getUser(): any {
    if (!this.user) {
      if (isPlatformBrowser(this.platformId)) {
        const userData = localStorage.getItem('user');
        this.user = userData ? JSON.parse(userData) : null; // Restaurar desde localStorage si no está en memoria, solo si estamos en el navegador
      }
    }
    return this.user;
  }

  // Método para eliminar los datos del usuario (logout)
  clearUser() {
    this.user = null;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user'); // Limpiar los datos de localStorage solo si estamos en el navegador
    }
  }

  // Método adicional para obtener la configuración (si lo usas)
  getConfig(): Observable<any> {
    return this.http.get(`${this.apiUrl}/config`);
  }
}
