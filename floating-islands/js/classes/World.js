import Island from "./Island.js";

class World {
  constructor() {
    this.islands = []; // a good place to keep track of your islands
    this.hookEvents(); // let's kick things of by hooking up events
  }

  hookEvents() {
    // hook events like clicking buttons to a specific function
    document.getElementById("btnSave").addEventListener("click", () => {
      this.save();
      console.log("savedIsClicked");
    });
  }

  save() {
    if (this.islands.length > 0) {
      const savedIslands = this.islands.map((island) => ({
        name: island.name,
        color: island.color,
        coordinates: island.coordinates,
      }));

      localStorage.setItem("islands", JSON.stringify(savedIslands));
      console.log("Islands saved to localStorage.");
    } else {
      console.warn("No islands to save.");
    }
  }

  load() {
    // load islands from localstorage into array
    // loop over the array and addIslands()
  }

  getCoordinates() {
    // return coordinates within the screen at random, feel free to change it up!
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2) * randomSign,
    };
  }

  addIsland() {
    const coordinates = this.getCoordinates();
    const island = new Island(coordinates);

    island.render();
    this.islands.push(island);
  }

  moveIsland(island) {
    // this might be a good point to animate the islands with JS Animations API
  }
}

export default World;
