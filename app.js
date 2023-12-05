const video = document.querySelector(".video-container");
// video.playBackRate = 2;
const btn = document.querySelector(".btn");
const icon = document.querySelector(".fas");

btn.addEventListener("click", () => {
  console.log("btn clicked");
  if (btn.classList.contains("pause") && icon.classList.contains("fa-pause")) {
    console.log("playing");
    btn.classList.remove("pause");
    btn.classList.add("play");
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    video.play();
  } else {
    console.log("paused");
    btn.classList.remove("play");
    btn.classList.add("pause");
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    video.pause();
  }
});
// 22nov2023tue 2015
