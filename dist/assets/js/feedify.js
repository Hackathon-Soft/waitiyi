
"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function (event) {
  //Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // Popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
});


// Image Upload 
const inputEl = document.querySelector('[image-preview]');
if (inputEl === null) {
  console.log('element does NOT exist in DOM');
} else {
  console.log('element exists in DOM');
}
// if (document.querySelector('[image-preview]')) {
//   console.log("Element exists!");
// } else {
//   console.log("Element DOES NOT exist!");
// }
// if (inputEl) {
//   console.log("Element exists!");
// } else {
//   console.log("Element DOES NOT exist!");
// }