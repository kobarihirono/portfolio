document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("js-hamburger");
  const nav = document.getElementById("js-hamburgerNav");
  const navLinks = document.querySelectorAll(".l-hamburger-nav__list a");

  // ハンバーガーアイコンのクリックイベント
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("js-ham-active");
    nav.classList.toggle("js-ham-nav-active");
  });

  // ナビゲーションリンクのクリックイベント
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (
        hamburger.classList.contains("js-ham-active") &&
        nav.classList.contains("js-ham-nav-active")
      ) {
        hamburger.classList.remove("js-ham-active");
        nav.classList.remove("js-ham-nav-active");
      }
    });
  });
});
