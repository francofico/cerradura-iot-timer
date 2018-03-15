const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const delay = require('delay');
var xhr = new XMLHttpRequest();

module.exports = class TimerController {
  constructor(view) {
    this.view = view;

    this._titulo = view.querySelector('#titulo');
    this._banner = view.querySelector('#banner');
    this._message = view.querySelector('#message');
    
  var boton = document.getElementById('open');
  boton.addEventListener('click', function(){
    console.log("Se presionó el botón");
    
    xhr.open("POST","http://cerradura-iot.herokuapp.com/api/open",true);
    xhr.send();
    console.log("Status open: " + xhr.status)
    
    delay(10000).then(()=> {
      xhr.open("POST","http://cerradura-iot.herokuapp.com/api/close",true);
      xhr.send();
      console.log("Status close: " + xhr.status);
    });



  })


  }

};
