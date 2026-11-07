// Browser-oriented examples: run in a page or adapt with Node timers.

function debounce(callback, delay) {
  let timerId;
  return (...args) =>{
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
}

function throttle(callback, delay) {
  let waiting = false;
  return (...args) =>{
    if (waiting) return;
    callback(...args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

// Debounce waits until calls stop for `delay`.
// Throttle allows at most one call per time window (leading-edge version).
