export const componentLoader = (lazyComponent, remainingAttempts) => {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (remainingAttempts === 1) {
            reject(error);
          }

          componentLoader(lazyComponent, remainingAttempts - 1).then(resolve, reject);
        });
      }, 1500);
  });
};
