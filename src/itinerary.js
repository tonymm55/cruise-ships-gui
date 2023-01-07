(function exportItinerary() {
  class Itinerary {
    constructor(_ports) {
      this.ports = _ports;
      console.log(_ports);
    } 
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
}());  

// // methods:
//     setSail() {
//       this.currentPort = 'Dover';
//     }
//     shipDock(port) {
//       this.currentPort = port;
//     }

// const ship = new Ship('Dover');

// ship.setSail();

// module.exports = Itinerary;