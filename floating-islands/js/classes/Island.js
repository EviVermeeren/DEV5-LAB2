export default class Island {
  constructor(coordinates) {
    this.name = this.getRandomName();
    this.color = this.getRandomColor();
    this.coordinates = coordinates || { x: 0, y: 0 };
    this.element = null;
  }

  getName() {
    return this.name;
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  remove() {
    // JS animations api, fade out
    // remove the element when the animation ended
  }

  getRandomName() {
    // array with 10 random island names
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island",
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];

    // return a random name from the array
  }
  render() {
    const islandElement = document.createElement("div");
    islandElement.classList.add("island");
    islandElement.style.background = this.color;
    islandElement.style.left = this.coordinates.x + "px";
    islandElement.style.top = this.coordinates.y + "px";
    islandElement.textContent = this.name;

    this.element = islandElement;
    document.getElementById("app").appendChild(islandElement);
  }
}
