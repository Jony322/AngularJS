import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Jonathan Medina Ceron';

  colores = [];

  addColor($event, color){
    if($event.which === 13){
      this.colores.push(color.value);
      color.value = "";
    }
  }

  mostrarColores(){

  }
}
