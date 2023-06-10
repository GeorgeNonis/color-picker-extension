import { useEffect, useState } from "react";
import { DEFAULT_COLORS } from "../../config";

export const usePalette = () => {
  const [palette, setPalette] = useState(false);
  /**
   * Chrome API
   */

  // useEffect(() => {
  //   chrome.storage.sync.get(["colors"], (result: any) => {
  //     const { colors } = result;
  //     if (colors === undefined) {
  //       chrome.storage.sync.set({ colors: DEFAULT_COLORS }, () => {});
  //     }
  //   });
  // }, []);

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
