import { useEffect, useState } from "react";
import { DEFAULT_COLORS } from "../../config";
import { RGBColor } from "../interfaces";

export const usePalette = () => {
  const [palette, setPalette] = useState(false);
  const [colors, setcolors] = useState<RGBColor[]>([]);
  /**
   * Chrome API
   */

  useEffect(() => {
    chrome.storage.sync.get(["colors"], (result: any) => {
      const { colors } = result;
      if (colors === undefined) {
        chrome.storage.sync.set({ colors: DEFAULT_COLORS }, () => {
          setcolors(DEFAULT_COLORS);
        });
      } else {
        setcolors(colors);
      }
    });
  }, []);

  const clearPaletteHandler = () => {
    setPalette(true);

    setTimeout(() => {
      setPalette(false);
    }, 250);
  };

  return { colors, clearPaletteHandler, palette, setPalette };
};
