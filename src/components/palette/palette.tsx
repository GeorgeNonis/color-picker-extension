import { RGBColor } from "react-color";
import Color from "./color";
import { usePalette } from "./usePalette";

const Palette = ({ sketchPickerColor }: { sketchPickerColor: RGBColor }) => {
  const { clearPaletteHandler, colors, palette } = usePalette();
  return (
    <div className="palettediv">
      <div className="palettewithcolors">
        {colors.map((c, i) => {
          return (
            <Color
              key={i}
              palette={palette}
              sketchPickerColor={sketchPickerColor}
            />
          );
        })}
      </div>
      <button className="clearpalette" onClick={clearPaletteHandler}>
        Clear Palette
      </button>
    </div>
  );
};
export default Palette;
