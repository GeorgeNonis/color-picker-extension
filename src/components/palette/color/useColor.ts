import { useEffect, useState } from "react";
import { RGBColor } from "../../interfaces";
import { DEFAULT_COLORS, DEFAULT_WHITE } from "../../../config";

interface useColorProps {
  palette: boolean;
  i: number;
  c: RGBColor;
  colors: RGBColor[];
}

export const useColor = ({ palette, i, c, colors }: useColorProps) => {
  const DEFAULT_WHITE_STRG = JSON.stringify(DEFAULT_WHITE);
  const C_STRG = JSON.stringify(c);
  const [visibility, setVisibility] = useState(false);
  const [copyColor, setCopyColor] = useState(false);
  const [btnState, setBtnState] = useState(C_STRG !== DEFAULT_WHITE_STRG);

  const { b, g, r, a } = c;
  const [color, setColor] = useState<RGBColor>({
    ...c,
  });

  const setColorHandler = (clr: RGBColor) => {
    setColor(clr);
    setBtnState(true);
    colors[i] = clr;

    chrome.storage.sync.set({ colors }, () => {});
  };

  const clearColorhandler = () => {
    const clr = { r: 255, g: 255, b: 255, a: 100 };
    setColor(clr);
    colors[i] = clr;
    chrome.storage.sync.set({ colors }, () => {});
    setBtnState(false);
  };

  const copyColorHandler = () => {
    navigator.clipboard.writeText(`rgba(${r},${g},${b},${a})`);
    setVisibility(false);
    setCopyColor(true);
  };

  const handlers = {
    setColorHandler,
    clearColorhandler,
    copyColorHandler,
    setVisibility,
  };

  const values = {
    copyColor,
    color,
    btnState,
    visibility,
  };

  useEffect(() => {
    if (palette) {
      setColor({
        r: 255,
        g: 255,
        b: 255,
        a: 100,
      });
      localStorage.setItem("colors", JSON.stringify(DEFAULT_COLORS));
      setBtnState(false);
    }
  }, [palette]);

  useEffect(() => {
    if (!copyColor) return;

    const time = setTimeout(() => {
      setCopyColor(false);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [copyColor]);

  return { values, handlers };
};
