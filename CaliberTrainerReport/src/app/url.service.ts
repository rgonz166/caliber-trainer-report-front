import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetTrainerService } from './get-trainer.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient, private trainerServ: GetTrainerService) { }

  getUrl(): string {
    return 'http://localhost:8080/excaliber/';
  }

  // ie: ~/2/AssessmentByCategory/
  getUrlWithId() {
    return this.getUrl() + sessionStorage.getItem('selectedId') + '/';
  }
}
