const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  if (navigator.clipborad) {
    navigator.clipboard
      .writeText(text)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  } else {
    alert("Feature not available, please copy manually!")
  }
});
