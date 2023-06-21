import { json } from "stream/consumers";

export const DEFAULT_COLORS = [
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
  {
    r: 255,
    g: 255,
    b: 255,
    a: 100,
  },
];

export const DEFAULT_WHITE = { a: 100, b: 255, g: 255, r: 255 };
// export const DEFAULT_WHITE = { r: 255, g: 255, b: 255, a: 100 };

const white = {
  r: 255,
  g: 255,
  b: 255,
  a: 100,
};

JSON.stringify(DEFAULT_WHITE) === JSON.stringify(white);
