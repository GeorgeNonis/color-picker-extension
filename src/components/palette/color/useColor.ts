import { useEffect, useState } from "react";
import { RGBColor } from "../../interfaces";

export const useColor = ({ palette }: { palette: boolean }) => {
  const [visibility, setVisibility] = useState(false);
  const [copyColor, setCopyColor] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const [color, setColor] = useState<RGBColor>({
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  });
  const { b, g, r, a } = color;

  const setColorHandler = (clr: RGBColor) => {
    setColor(clr);
    setBtnState(true);
  };

  const clearColorhandler = () => {
    setColor({
      r: 255,
      g: 255,
      b: 255,
      a: 100,
    });
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
    setColor({
      r: 255,
      g: 255,
      b: 255,
      a: 100,
    });
    setBtnState(false);
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
