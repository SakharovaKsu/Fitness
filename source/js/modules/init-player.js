import {loadScript} from './load-script';

export const initPlayer = () => {
  const containerElement = document.querySelector('[data-video]');

  if (!containerElement) {
    return;
  }

  const linkElement = containerElement.querySelector('[data-control]');
  const youtubeElement = containerElement.querySelector('[data-youtube]');

  // Делаем кнопку из ссылки
  const controlElement = document.createElement('button');
  controlElement.className = linkElement.className;
  controlElement.setAttribute('style', linkElement.getAttribute('style'));
  controlElement.innerHTML = linkElement.innerHTML;
  containerElement.replaceChild(controlElement, linkElement);

  loadScript('https://www.youtube.com/player_api', () => {
    window.onYouTubePlayerAPIReady = () => {
      const youtubePlayer = new window.YT.Player(youtubeElement.id, {
        events: {
          onStateChange(event) {
            if (event.data === 0) {
              containerElement.classList.remove('is-active');
            }
          },
        },
        videoId: youtubeElement.id,
      });

      controlElement.addEventListener('click', () => {
        containerElement.classList.add('is-active');
        youtubePlayer.playVideo();
      });
    };
  });
};
