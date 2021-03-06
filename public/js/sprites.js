import { loadImage } from "./loaders.js";
import SpriteSheet from "./SpriteSheet.js";

export function loadMarioSprite() {
  return loadImage("/image/characters.gif").then(image => {
    console.log("Image loaded", image);
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define("idle", 276, 44, 16, 16);
    return sprites;
  });
}

export function loadBackgroundSprites() {
  return loadImage("/image/tiles.png").then(image => {
    console.log("Image loaded", image);
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.defineTile("ground", 0, 0);
    sprites.defineTile("sky", 3, 23);
    return sprites;
  });
}
