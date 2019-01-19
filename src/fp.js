const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

export { compose };
