export const playVideo = () => {
  if (document.querySelector('.description__link')) {
    const playButton = document.querySelector('.description__link');
    let YT = window.YT;
    // eslint-disable-next-line no-unused-vars
    let player;
    playButton.addEventListener('click', (evt) => {
      evt.preventDefault();
    });
    playButton.addEventListener('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '9TZXsZItgdw',
        events: {
          'onReady': videoPlay,
        },
      });
    });

    const videoPlay = (event) => {
      event.target.playVideo();
    };
  }
};
