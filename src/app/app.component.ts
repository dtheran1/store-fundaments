import { Component } from '@angular/core';
import { Prodcut } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10
  title = 'store-fundaments';
  name = 'Daniel'
  age =30

  img = 'https://source.unsplash.com/random'

  btnDisable = true

  box = {
    width:100,
    height: 100,
    background: 'red'
  }

  person= {
    name: 'Daniel',
    age: 99,
    avatar: 'https://source.unsplash.com/random'
  }

  newEmoji = ''
  emojis = [ '😂' , '🐦', '🐳','🌮', '💚']

  products: Prodcut[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]



  addEmoji() {
    this.emojis.push(this.newEmoji)
    this.newEmoji = ''
  }

  deleteEmoji(index : number) {
    this.emojis.splice(index, 1)
  }

  toogleBtn() {
    this.btnDisable = !this.btnDisable
  }

  incrementAge() {
    if(this.person.age < 100) this.person.age += 1
  }

  onScroll(event: Event) {
    const e = event.target as HTMLElement;

    console.log(e.scrollTop);

  }

  changeName(event: Event) {
    const e = event.target as HTMLInputElement
    this.person.name = e.value
  }
}
