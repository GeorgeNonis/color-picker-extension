import { useState } from "react";
import { RGBColor } from "./interfaces";

export const useColorPalette = () => {
  const [sketchPickerColor, setSketchPickerColor] = useState<RGBColor>({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });

  return {
    sketchPickerColor,
    setSketchPickerColor,
  };
};
