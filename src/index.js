import './main.scss';

// CUSTOM CURSOR EFFECT
const customCursor = function () {
   const cursorEl = document.querySelector('.cursor');

   // all event listeners on mouse
   const mouseEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      handleLinkHoverEvents();
      handleImageHoverEvents();
   };

   // get the values on mouse move
   const onMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      // update the cursor on mouse move
      cursorEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
   };

   // click effect
   const onMouseDown = () => {
      cursorEl.classList.add('is-clicked');
   };

   const onMouseUp = () => {
      cursorEl.classList.remove('is-clicked');
   };

   // hide the cursor when it's out off screen range
   const onMouseEnter = () => {
      cursorEl.classList.remove('is-hidden');
   };

   // show the cursor when it's in screen range
   const onMouseLeave = () => {
      cursorEl.classList.add('is-hidden');
   };

   // custom cursor on links or buttons hover
   const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .link').forEach((el) => {
         el.addEventListener('mouseover', () =>
            cursorEl.classList.add('is-link-hovered')
         );
         el.addEventListener('mouseout', () =>
            cursorEl.classList.remove('is-link-hovered')
         );
      });
   };

   // custom cursor on image hover
   const handleImageHoverEvents = () => {
      document.querySelectorAll('.image').forEach((el) => {
         el.addEventListener('mouseover', () =>
            cursorEl.classList.add('image-cursor')
         );
         el.addEventListener('mouseout', () =>
            cursorEl.classList.remove('image-cursor')
         );
      });
   };

   // execute the events listeners
   mouseEventListeners();
};

// when content is loaded
document.addEventListener('DOMContentLoaded', () => {
   // excute the function
   customCursor();
})