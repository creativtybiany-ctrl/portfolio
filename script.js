// عناصر الفيديوهات
const videos = document.querySelectorAll("iframe");
const profileFrame = document.querySelector(".profile-frame");

// حركة عند الـ scroll للفيديوهات
window.addEventListener("scroll", () => {
  videos.forEach(video => {
    const rect = video.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      video.style.opacity = "1";
      video.style.transform = "scale(1)";
      video.style.transition = "transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease";
    }
  });

  // حركة خلفية بسيطة (سحب)
  const scrollY = window.scrollY;
  document.body.style.backgroundPosition = `center ${scrollY * 0.3}px`;
});

// Hover effect للفيديوهات
videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.style.transform = "scale(1.05)";
    video.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
  });
  video.addEventListener("mouseleave", () => {
    video.style.transform = "scale(1)";
    video.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  });
});

// Hover effect لصورة البروفايل
profileFrame.addEventListener("mouseenter", () => {
  profileFrame.style.transform = "scale(1.2)";
  profileFrame.style.boxShadow = "0 25px 60px rgba(0,0,0,0.4)";
});
profileFrame.addEventListener("mouseleave", () => {
  profileFrame.style.transform = "scale(1)";
  profileFrame.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
});
