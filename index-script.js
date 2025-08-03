function addToCart(button) {
  button.innerText = "Added!";
  button.disabled = true;
  setTimeout(() => {
    button.innerText = "Add to Cart";
    button.disabled = false;
  }, 2000);
}
