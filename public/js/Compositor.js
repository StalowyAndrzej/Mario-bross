export default class Compositor {
  constructor() {
    this.layers = [];
  }

  draw(context) {
    // layer - function that draws the context
    this.layers.forEach(layer => {
      layer(context);
    });
  }
}
