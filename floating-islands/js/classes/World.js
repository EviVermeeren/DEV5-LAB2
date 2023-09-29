import Island from "./Island.js";

export default class World {
  constructor() {
    this.islands = [];
    this.hookEvents();
    this.load();
  }

  hookEvents() {
    document.getElementById("btnSave").addEventListener("click", () => {
      this.save();
      console.log("savedIsClicked");
    });

    document.getElementById("btnLoad").addEventListener("click", () => {
      this.loadAndRenderIslands();
      console.log("loadIsClicked");
    });

    document.getElementById("btnDelete").addEventListener("click", () => {
      this.delete();
      console.log("deleteIsClicked");
    });
  }

  save() {
    if (this.islands.length > 0) {
      const savedIslands = this.islands.map((island) => ({
        image: island.image, // Include the image property
        coordinates: island.coordinates,
      }));

      localStorage.setItem("islands", JSON.stringify(savedIslands));
      console.log("Islands saved to localStorage.");
    } else {
      console.warn("No islands to save.");
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
        const { image, coordinates } = islandData; // Include the image property
        const island = new Island(coordinates);
        island.image = image; // Set the image property
        island.render();
        this.islands.push(island);
      });
    } else {
      console.warn("No saved islands found in localStorage.");
    }
  }

  delete() {
    localStorage.removeItem("islands");
    console.log("Islands deleted from localStorage.");
    location.reload();
  }

  getCoordinates() {
    const itemWidth = 100;
    const itemHeight = 100;

    const minX = itemWidth / 2;
    const maxX = window.innerWidth - itemWidth / 2;
    const minY = itemHeight / 2;
    const maxY = window.innerHeight - itemHeight / 2;

    const x = minX + Math.random() * (maxX - minX);
    const y = minY + Math.random() * (maxY - minY);

    return { x, y };
  }

  addIsland() {
    const coordinates = this.getCoordinates();
    const island = new Island(coordinates);

    island.render();
    this.islands.push(island);
  }
}
