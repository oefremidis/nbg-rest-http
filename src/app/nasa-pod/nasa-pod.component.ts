import { Component, inject } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-nasa-pod',
  standalone: true,
  imports: [JsonPipe, NgIf],
  templateUrl: './nasa-pod.component.html',
  styleUrl: './nasa-pod.component.css'
})
export class NasaPodComponent {

  data: any;
  errorMessage: any;
  loading: boolean = false;

  service = inject(NasaService);


  makeRequest() {
    this.loading = true;
    
    this.service.get().subscribe({
      next: response => {
        this.data = response,
        this.loading = false
      },
      error: error => this.errorMessage = error
    });
  }


}
