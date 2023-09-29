import { rgbaFromArgb } from "@material/material-color-utilities";

export const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const argbToHex = (color) => {
  const rgba = rgbaFromArgb(color)
  const hex = rgbToHex(rgba.r, rgba.g, rgba.b)
  return hex
}