export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  const newCount = count + 1;

  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, newCount);
}
