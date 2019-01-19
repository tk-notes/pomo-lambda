const mod = (divisor) => (dividend) => (((dividend) % divisor) + divisor) % divisor;
const mod60 = mod(60);

export { mod60 };
