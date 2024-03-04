export type ColorCode<T extends readonly string[]> = {
  [K in T[number]]: number;
};
