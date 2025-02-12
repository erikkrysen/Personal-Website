function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function scrollToPosition() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: "start"
  });
}

function goToProjects() {
  window.location.href = "../index.html#projlist";
}

window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash === '#projlist') {
    const proj = document.getElementById("projlist");
    if (proj) {
      proj.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: "start"
      });
    }
  }
});