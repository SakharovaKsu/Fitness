export const loadScript = (src, onLoad, callback) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = src;

  scriptElement.addEventListener('load', onLoad);

  if (callback) {
    callback(scriptElement);
  }

  document.body.append(scriptElement);
};
