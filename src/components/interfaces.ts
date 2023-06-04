export interface RGBColor {
  a?: number | undefined;
  b: number;
  g: number;
  r: number;
}

export interface ColorProps {
  palette: boolean;
  sketchPickerColor: RGBColor;
  i: number;
  c: RGBColor;
}
