import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = '';
  public address = '';
  public isButtonClicked = false;

  onSubmitDetails() {
    this.isButtonClicked = true;
    console.log(this.name);
    console.log(this.address);
  }
  
  title = 'github-finder';
}
