// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isStrictlyObject = (value: any): boolean => {
  return (
    typeof value === 'object' &&
    value instanceof Object &&
    !Array.isArray(value) &&
    value.constructor !== Date
  );
};
