function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0, // Scroll to 250px from the top
    behavior: 'smooth', // Add smooth scrolling
  });
}

function scrollToPosition() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: "start"
  });
}