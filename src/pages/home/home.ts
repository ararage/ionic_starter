import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeerPage } from '../beer/beer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  seleccion(tipo){
    let data = {}
    switch(tipo){
      case 1:
        data = {
          name:'Error de diciembre',
          state:'CDMX',
          about:'Somos un homenaje a los maravillosos políticos mexicanos; cervezas impresionantes que '+
                'aportan más que los que vivieron y viven en Los Pinos....',
          facebook:'https://www.facebook.com/pg/Errordediciembre',
          phone:'56565656',
          image:"assets/imgs/error-diciembre.jpg"
        }
      break;
      case 2:
        data = {
          name:'Primus/Tempus',
          state:'Querétaro',
          about:'Para el hombre El Tiempo es un divino tesoro, tiempo para estar con la familia,'+ 
                'tiempo para compartir con los amigos, tiempo para disfrutar la vida, tiempo para nacer,'+
                'tiempo para crecer, tiempo para vivir. Para nosotros el tiempo es el ingrediente principal'+
                'de nuestra cerveza, tiempo en cultivar los ingredientes, tiempo en prepararnos, tiempo en '+
                'desarrollar este proyecto, tiempo en el que Malta, Lúpulo, Agua y Levadura interactúan para '+
                'darnos sabores, aromas y experiencias nunca antes encontradas en las cervezas industriales. '+
                'Ya lo dijo la canción y nosotros lo repetimos... El tiempo en una botella... es por eso que '+
                'Tomar Tempus es disfrutar el sabor del tiempo y es el tesoro que compartimos con ustedes.',
          facebook:'https://www.facebook.com/CervezaTempusMX/',
          phone:'56565656',
          image:"assets/imgs/tempus.jpg"
        } 
      break;
      case 3:
        data = {
          name:'Primus/Jabalí',
          state:'Querétaro',
          about:'La cerveza, así como el animal, es salvaje. La imagen es de apariencia rebelde y con personalidad '+ 
                'fuerte e indomable. Sus características resultan una patada a los sentidos, ya sea el alcohol, el '+
                ' cuerpo robusto, el amargor o el sabor.',
          facebook:'https://www.facebook.com/CervezaJabaliMX/',
          phone:'56565656',
          image:"assets/imgs/jabali.png"
        } 
      break;
      case 4:
        data = {
          name:'Osadia-Saga',
          state:'Puebla',
          about:'SAGA es una cerveza Blonde Ale, con notas cítricas y herbales que le otorga la cáscara de naranja '+
                ' y la semilla de cilantro. Ideal para refrescarse y para acompañar comidas picantes o mariscos '+ 
                'presentes en nuestra gastronomía.\n'+
                'OSADÍA es una cerveza Dubbel, con 6 maltas de especialidad, que le proporcionan notas ahumadas, '+
                'maderas y café. Diseñada con el mismo fin de la gastronomía barroca poblana, muchos sabores que se '+ 
                'potencializan al maridarla con nuestros guisos típicos, con carnes, quesos madurados y asados.',
          facebook:'https://www.facebook.com/Cervezasagayosadia/',
          phone:'56565656',
          image:"assets/imgs/osadia-saga.jpg"
        } 
      break;
      case 5:
        data = {
          name:'Ocho Reales',
          state:'Ocho Reales',
          about:'  Llamado también Peso de ocho o Dólar Español fue una moneda de plata con valor de ocho reales acuñada por la Monarquía católica después de la reforma monetaria de 1497 que estableció el real español.'
          +'Gracias al amplio uso que tuvo a finales del siglo XVIII en Europa, toda América y el extremo Oriente, se convirtió en la primera divisa de uso mundial. Fue la primera moneda de curso legal en los Estados Unidos hasta que la ley de 1857 desautorizó su curso.'
          +'Muchas de las monedas actuales, tales como el dólar canadiense, el dólar estadounidense, así como monedas de hispanoamérica y de Filipinas estan basadas en el real de a 8.',
          facebook:'https://www.facebook.com/ochoreales/',
          phone:'56565656',
          image:"assets/imgs/ocho-reales.jpg"
        } 
      break;
      default:
        data = {
          name:null,
          state:null,
          about:null,
          facebook:null,
          phone:null
        }
      break;
    }
    console.log(data)
    this.navCtrl.push(BeerPage,{'data':data})
  }
}
