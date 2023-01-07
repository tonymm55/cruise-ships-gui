// class Port {
//     constructor(_name) {
//       this.name = _name;
//       this.ships = [];
//       console.log(_name);
//     } 
//     addShip(ship) {
//       this.ships.push(ship);
//     }
//     removeShip(ship) {
//       const index = this.ships.indexOf(ship);
//       if (index !== -1) {
//         this.ships.splice(index, 1);
//         console.log(ship);
//       }
//     }
//   }

// module.exports = Port;

(function exportPort() {
  class Port {
    constructor(_name) {
      this.name = _name;
      this.ships = [];
    }
  
    addShip(ship) {
      this.ships.push(ship);
    }

    removeShip(ship) {
      this.ships = this.ships.filter(dockedShip => dockedShip !== ship);
      console.log(ship);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
  const port = new Port('Dover');
  const titanic = {name: 'Titanic'};
  const queenMary = {name: 'Queen Mary'};

})();

// const port = new Port('Dover');
// const titanic = {name: 'Titanic'};
// const queenMary = {name: 'Queen Mary'};