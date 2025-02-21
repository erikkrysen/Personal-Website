document.addEventListener("DOMContentLoaded", () => {
    const elementsToBlur = document.querySelectorAll('.textArea, .list, .undercontent, .buttons.code, .buttons.design');
    function blurElements() {
        elementsToBlur.forEach(element => {
            element.classList.add('blurred');
        });
      }
  
    function removeBlur() {
      elementsToBlur.forEach(element => {
        element.classList.remove('blurred');
      });
    }
    
    const focusphoto = document.getElementById('photobutton');
    focusphoto.addEventListener('mouseenter', () => blurElements());
    focusphoto.addEventListener('mouseout', removeBlur);
});