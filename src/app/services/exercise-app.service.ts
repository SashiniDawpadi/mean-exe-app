import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExerciseAppService {
  baseUrl: string = 'http://localhost:5000/exercises';
  constructor(private http: HttpClient) {}

  listExercises() {
    return this.http.get(`${this.baseUrl}`);
  }

  getExerice(id: any) {
    return this.http.get(`${this.baseUrl}/` + id);
  }
}
