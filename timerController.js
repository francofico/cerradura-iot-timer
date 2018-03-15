const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const delay = require('delay');
var xhr = new XMLHttpRequest();
var lockPuerta;
module.exports = class TimerController {
  
  constructor(view, lock) {
    this.view = view;
	  lockPuerta = lock;

    this._titulo = view.querySelector('#titulo');
    this._banner = view.querySelector('#banner');
    this._message = view.querySelector('#message');
    
    var boton = document.getElementById('open');

    
    boton.addEventListener('click', function(){
      console.log("Se presionó el botón");
      lockPuerta.open();
      delay(10000).then(()=> {
    		lockPuerta.close();
      });

    });

  }
  
}
