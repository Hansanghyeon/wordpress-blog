/* eslint-disable prettier/prettier */
interface Grayscales {
  dark: string[];
  light: string[];
}

interface Colors {
  primary: string;
  bg: string[];
  text: string[];
  grayscales: Grayscales;
}

interface DarkColors extends Colors {}
interface LightColors extends Colors {}
interface StyleSystem {
  color: Colors;
}

export interface DarkStyleSystem extends StyleSystem {}
export interface LightStyleSystem extends StyleSystem {}

export default StyleSystem;
