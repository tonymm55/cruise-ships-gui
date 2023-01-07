(function exportController() {
  class Controller {
        constructor() {
            this.initialiseSea();
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
    }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Port = Controller;
  }
}());