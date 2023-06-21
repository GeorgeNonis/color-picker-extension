import { useState } from "react";
import useEyeDropper from "use-eye-dropper";
import { BsEyedropper } from "react-icons/bs";
import { EyeDropProps } from "./interfaces";

const Eyedropper = ({ hexToRGB }: EyeDropProps) => {
  const { open, close, isSupported } = useEyeDropper();
  const [color, setColor] = useState("#fff");
  const [error, setError] = useState();
  // useEyeDropper will reject/cleanup the open() promise on unmount,
  // so setState never fires when the component is unmounted.
  const pickColor = () => {
    open()
      .then((color) => {
        console.log({ color });
        hexToRGB(color.sRGBHex);
        setColor(color.sRGBHex);
      })

      .catch((e) => {
        console.log(e);
        if (!e.canceled) setError(e);
      });
  };
  return (
    <>
      {isSupported() ? (
        <BsEyedropper
          onClick={pickColor}
          style={{ cursor: "pointer", width: "1.5rem", height: "1.5rem" }}
        />
      ) : (
        <span>EyeDropper API not supported in this browser</span>
      )}
      {!!error && <span>{error}</span>}
    </>
  );
};
export default Eyedropper;
