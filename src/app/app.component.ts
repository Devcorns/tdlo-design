import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latest';



  displayCounter(count) {
    console.log(count);
}

displayNegCounter(val){
  console.log(val)
}
}
