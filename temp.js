// Use window.onload to make sure AOS is initialized after all elements are loaded
window.onload = function () {
    AOS.init({
      duration: 800, // Duration of animation in milliseconds
      offset: 100, // Offset (in pixels) from the top of the page to trigger animations
      easing: 'ease-in-out', // Easing type ('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out')
    });
  };
  