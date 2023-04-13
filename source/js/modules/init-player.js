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

  window.onYouTubePlayerAPIReady = () => {
    // eslint-disable-next-line no-undef
    const youtubePlayer = new YT.Player(youtubeElement.id, {
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
};

// export const playVideo = (e, t, r) => {
//   r.r(t);
//   const s = r("./js/utils/load-script.js");
//   let a = !1;
//   t.default = (e) => {
//     const t = e.querySelector('[data-control]');
//     const r = e.querySelector('[data-youtube]');
//     let o = null;
//     const l = document.createElement('button');

//     l.className = t.className,
//     l.setAttribute("style", t.getAttribute("style")),
//     l.innerHTML = t.innerHTML,
//     e.replaceChild(l, t),
//     l.addEventListener("click", ()=>{
//       e.classList.add("is-active"),
//       o.playVideo()
//     });
//     const n = ()=>{
//       window.onYouTubePlayerAPIReady = () => {
//         o = new YT.Player(r.id,{
//           events: {
//             onStateChange(t) {
//               0 === t.data && e.classList.remove("is-active")
//             },
//           },
//           videoId: r.id,
//         });
//       };
//     }
//     ;
//     a ? n() : Object(s.default)("https://www.youtube.com/player_api", n, ()=> a = !0)
//   }
// }
