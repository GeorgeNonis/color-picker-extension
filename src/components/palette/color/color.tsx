import { useColor } from "./useColor";
import { ColorProps } from "../../interfaces";

const Color = ({ ...rest }: ColorProps) => {
  const { palette, sketchPickerColor, i, c, colors } = rest;
  const { values, handlers } = useColor({ palette, i, c, colors });
  const { b, g, r, a } = values.color;
  return (
    <div className="colordiv">
      {values.copyColor && (
        <div className="copiedcolor">Copied {`rgba(${r},${g},${b},${a})`}!</div>
      )}
      <button
        className="clear"
        onClick={() => handlers.setColorHandler(sketchPickerColor)}
        disabled={values.btnState}
      >
        Add
      </button>
      <button
        className="clear"
        onClick={handlers.clearColorhandler}
        disabled={!values.btnState}
      >
        Clear
      </button>
      <div
        onMouseEnter={() =>
          values.btnState ? handlers.setVisibility(true) : undefined
        }
        onMouseLeave={() =>
          values.btnState ? handlers.setVisibility(false) : undefined
        }
        onClick={values.btnState ? handlers.copyColorHandler : undefined}
        className="color"
        style={{
          backgroundColor: `rgba(${r},${g},${b},${a})`,
          cursor: `${!values.btnState ? "unset" : "pointer"}`,
        }}
      >
        {values.visibility && (
          <div
            className="colortext"
            style={{
              cursor: `${!values.btnState ? "unset" : "pointer"}`,
            }}
          >{`rgba(${r},${g},${b},${a})`}</div>
        )}
      </div>
    </div>
  );
};
export default Color;
