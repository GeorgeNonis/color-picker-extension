import { SketchPicker } from "react-color";
import "../App.css";
import { useColorPalette } from "./useColorPalette";
import Palette from "./palette";

const ColorPallete = () => {
  const { setSketchPickerColor, sketchPickerColor } = useColorPalette();

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
      </div>
      <Palette sketchPickerColor={sketchPickerColor} />
    </div>
  );
};

export default ColorPallete;
