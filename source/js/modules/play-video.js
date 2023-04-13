// export const playVideo = () => {
//   if (document.querySelector('.description__link')) {
//     const playButton = document.querySelector('.description__link');
//     let YT = window.YT;
//     // eslint-disable-next-line no-unused-vars
//     let player;
//     playButton.addEventListener('click', (evt) => {
//       evt.preventDefault();
//     });
//     playButton.addEventListener('click', function onYouTubeIframeAPIReady() {
//       player = new YT.Player('player', {
//         height: '100%',
//         width: '100%',
//         videoId: '9TZXsZItgdw',
//         events: {
//           'onReady': videoPlay,
//         },
//       });
//     });

//     const videoPlay = (event) => {
//       event.target.playVideo();
//     };
//   }
// };

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
