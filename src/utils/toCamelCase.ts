export const toCamelCase = (key: string): string =>
  key.replace(/_./g, (str: string): string => str.slice(-1).toUpperCase());
