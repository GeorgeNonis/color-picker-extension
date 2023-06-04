import { useState } from "react";

export const usePalette = () => {
  const [palette, setPalette] = useState(false);
  const colors = [...Array(10)];

  const clearPaletteHandler = () => {
    setPalette(!palette);
  };

  return { colors, clearPaletteHandler, palette, setPalette };
};
