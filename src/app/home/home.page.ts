import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage:Storage) {
    this.storage.create();
  }

  variavel_lista = [];
  texto: String = "";
  aux;
  
async adiciona() {
  if (!(this.texto == "")) {
    this.variavel_lista.push(this.texto);
    this.variavel_lista.forEach(item => {
      if(parseInt(item[0]) > this.aux) {
        this.aux = parseInt(item[0]);
      }
    })
    this.aux = this.aux + 1;
    await this.storage.set(this.aux.toString(), this.texto);
    this.atualizaLita();
    this.texto = "";
  }
  
  /*
  if (this.texto == "") {

  } else{
  this.variavel_lista.push(this.texto);
  this.texto = "";
  }*/
}

atualizaLita() {
  this.variavel_lista = []
  this.storage.forEach((value, key, index) => {
    this.variavel_lista.push([key, value])
  }) 
}

remove(indice) { 
  this.variavel_lista.splice(indice, 1)
}

  //*ngFor = "let item of minhaLista" no item
  //[(ngModel)]="texto" no input

}