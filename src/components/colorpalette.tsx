import { SketchPicker } from "react-color";
import "../App.css";
import { useColorPalette } from "./useColorPalette";
import Palette from "./palette";
import Eyedropper from "./eyedrop/eyedrop";

const ColorPallete = () => {
  const { hexToRGB, setSketchPickerColor, sketchPickerColor } =
    useColorPalette();

  return (
    <div
      className="App"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: 0 }}
    >
      <div className="sketchpicker">
        <SketchPicker
          className="palette"
          onChange={(color) => {
            setSketchPickerColor(color.rgb);
          }}
          color={sketchPickerColor}
        />
        <Eyedropper hexToRGB={hexToRGB} />
      </div>
      <Palette sketchPickerColor={sketchPickerColor} />
    </div>
  );
};

export default ColorPallete;
