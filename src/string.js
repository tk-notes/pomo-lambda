const split = (separator) => (text) => text.split(separator);
const splitByColon = split(':');

const toString = (number) => number.toString();

export { splitByColon, toString };
