import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formData = {
    name: '',
    age: null,
    depar:'',
    ucid:null
  };
  fetchedData: any[] = [];

  constructor(private dataService: DataService) {}

  postData() {
    this.dataService.postData(this.formData).subscribe(
      response => {
        console.log('Data posted successfully:', response);
      },
      error => {
        console.error('Error posting data:', error);
      }
    );
  }

  fetchData() {
    this.dataService.fetchData().subscribe(
      response => {
        console.log('Data fetched successfully:', response);
        this.fetchedData = response;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
