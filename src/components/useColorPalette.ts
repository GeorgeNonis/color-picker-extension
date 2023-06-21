import { useState } from "react";
import { RGBColor } from "./interfaces";

export const useColorPalette = () => {
  const [sketchPickerColor, setSketchPickerColor] = useState<RGBColor>({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });

  const hexToRGB = (hex: string, alpha: number | undefined = 1) => {
    hex = hex.toUpperCase();
    console.log({ hex });
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const rgba = {
      r: r,
      g: g,
      b: b,
      a: alpha,
    };

    setSketchPickerColor(rgba);
  };

  return {
    sketchPickerColor,
    setSketchPickerColor,
    hexToRGB,
  };
};
