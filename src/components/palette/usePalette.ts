import { useState } from "react";
import { DEFAULT_COLORS } from "../../config";

export const usePalette = () => {
  const [palette, setPalette] = useState(false);
  if (localStorage.getItem("colors") === null) {
    localStorage.setItem("colors", JSON.stringify(DEFAULT_COLORS));
  }
  const obj = localStorage.getItem("colors")!;
  const colors = JSON.parse(obj);
  const clearPaletteHandler = () => {
    setPalette(true);

    setTimeout(() => {
      setPalette(false);
    }, 250);
  };

  return { colors, clearPaletteHandler, palette, setPalette };
};
