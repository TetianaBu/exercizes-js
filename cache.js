const cache = (func) => {
  let cached = [];
  return function (...args) {
    const fromCache = cached.find(
      (cacheRecord) =>
        cacheRecord.args.length === args.length &&
        cacheRecord.args.every((arg, ind) => arg === args[ind])
    );
    if (fromCache) {
      return fromCache.result;
    }
    const result = func(...args);
    cached.push({ args, result });
    return result;
  };
};