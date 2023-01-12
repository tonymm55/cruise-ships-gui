(function exportController() {
  class Controller {
        constructor(ship) {
          this.ship = ship;
          this.initialiseSea();

          document.querySelector('#sailbutton').addEventListener('click', () => {
            this.setSail();
          });
        }
        
        initialiseSea() {
            const backgrounds = [
                './images/water0.png',
                './images/water1.png',
            ];
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
                console.log("Interval Count");
            }, 1000);
        }

        renderPorts(_ports) {
          const portsElement = document.querySelector('#ports');
          portsElement.style.width = '0px';
        
            // This section needs a review, esp line 26! 
            _ports.forEach((port, index) => {
              const newPortElement = document.createElement('div');
              newPortElement.className = 'port';
           
              newPortElement.dataset.portName = port.name;
              newPortElement.dataset.portIndex = index;

              portsElement.appendChild(newPortElement);
              const portsElementWidth = parseInt(portsElement.style.width, 10);
              portsElement.style.width = `${portsElementWidth + 256}px`;
            });
        }

        renderShip() {
          this.ship = ship;
          
          const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
          const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`); 
        
          
          const shipElement = document.querySelector('#ship');
          shipElement.style.top = `${portElement.offsetTop + 32}px`;
          shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        }

        setSail() {
          this.ship = ship

          const currentPortIndex = this.ship.itinerary.ports.indexOf(ship.currentPort);

          const nextPortIndex = currentPortIndex + 1;

          const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}"]`); 
          
          if (!nextPortElement) {
            return alert('End of the line, Get Off!!!!');
          }

          const shipElement = document.querySelector('#ship');

          
            
        ship.setSail();
          const sailInterval = setInterval(() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if (shipLeft === (nextPortElement.offsetLeft - 32)) {
            clearInterval(sailInterval);
            }

            shipElement.style.left = `${shipLeft + 1}px`;
            shipPosition +=1;
          }, 10);
          
        ship.dock();

        }
      }
  
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = Controller;
      } else {
        window.Controller = Controller;
      }
}());