export function timer(callback) {
  setTimeout(() => {
    callback && callback();
  }, 1000);
}

export function infiniteTimer(callback) {
  setTimeout(() => {
    callback && callback();
    setTimeout(() => {
      infiniteTimer(callback);
    }, 10000);
  }, 1000);
}
