/**
 * Evaluate Function apply debounce
 * @param {Function} fn
 * @param {number} delay - unit: seconds
 * @returns {void}
 */
export const debounce = (fn, delay = 0.5) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(...args), delay * 1000);
  };
};
