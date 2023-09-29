export default class Island {
  constructor(coordinates) {
    this.image = this.getRandomImageURL();
    this.coordinates = coordinates || { x: 0, y: 0 };
  }

  getRandomImageURL() {
    const imageUrls = [
      "./media/blue.png",
      "./media/bulb.png",
      "./media/charm.png",
      "./media/eve.png",
      "./media/mon.png",
      "./media/muewt.png",
      "./media/pika.png",
      "./media/pok.png",
      "./media/puff.png",
      "./media/worm.png",
    ];

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }

  render() {
    const islandElement = document.createElement("div");
    islandElement.classList.add("island");
    islandElement.style.backgroundImage = `url(${this.image})`;

    islandElement.style.left = this.coordinates.x + "px";
    islandElement.style.top = this.coordinates.y + "px";
    islandElement.textContent = this.name;

    this.element = islandElement;
    document.getElementById("app").appendChild(islandElement);

    //animate the island to bounce up and down using JS web animations API
    const keyframes = [
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" },
      { transform: "translateY(0px)" },
    ];
    const options = {
      duration: 1000,
      iterations: Infinity,
    };
    islandElement.animate(keyframes, options);
  }
}
