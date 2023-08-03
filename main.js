const myElements = document.querySelectorAll('.myElement');

// Loop through all elements with class "myElement"
myElements.forEach((element) => {
  element.addEventListener('mouseover', function () {
    element.style.cursor = 'pointer';
  });

  element.addEventListener('click', function () {
    // perintah menuju link sesuai yang di-click
  });
});


console.info("tes")