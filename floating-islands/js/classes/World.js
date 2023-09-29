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

    document.getElementById("btnLoad").addEventListener("click", () => {
      this.loadAndRenderIslands();
      console.log("loadIsClicked");
    });
  }

  save() {
    const savedIslands = localStorage.getItem("islands");
    if (savedIslands) {
      const parsedIslands = JSON.parse(savedIslands);
      console.log("Islands loaded from localStorage.");
      console.log(parsedIslands);

      parsedIslands.forEach((islandData) => {
        const { name, color, coordinates } = islandData;
        const island = new Island(coordinates);
        island.name = name;
        island.color = color;
        island.render();
        this.islands.push(island);
      });
    } else {
      console.warn("No saved islands found in localStorage.");
    }
  }

  load() {
    const savedIslands = localStorage.getItem("islands");
    if (savedIslands) {
      this.islands = JSON.parse(savedIslands);
      console.log("Islands loaded from localStorage.");
      console.log(this.islands);
    } else {
      console.warn("No saved islands found in localStorage.");
    }
  }

  loadAndRenderIslands() {
    const savedIslands = localStorage.getItem("islands");
    if (savedIslands) {
      const parsedIslands = JSON.parse(savedIslands);
      console.log("Islands loaded from localStorage.");
      console.log(parsedIslands);

      parsedIslands.forEach((islandData) => {
        const { name, color, coordinates } = islandData;
        const island = new Island(coordinates);
        island.name = name;
        island.color = color;
        island.render();
        this.islands.push(island);
      });
    } else {
      console.warn("No saved islands found in localStorage.");
    }
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
