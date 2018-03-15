const Domoto = require('domoto');
const ChildItemMenu = require('domoto/childItemMenu');
const TimerController = require('./timerController')
const viewPath = require('path').resolve(__dirname, './view.html');
/*const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const delay = require('delay');
var xhr = new XMLHttpRequest();*/

module.exports = class DomotoTimerLock extends Domoto {
  constructor() {
    super('cerradura-iot-timer');

    this.description = 'Timer';
    this.itemMenu.iconLeft = 'clock';

    const view = this.addView(viewPath);
    view.on('load', this._onLoadView.bind(this));

  }

  _onLoadView(view) {

	const controller = new TimerController(view);
    this.itemMenu.on('click', this.viewManager.show(view));
  }

};

