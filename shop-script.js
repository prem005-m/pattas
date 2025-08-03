function changeQty(button, change) {
  const product = button.closest('.product');
  const input = product.querySelector('input');
  let qty = parseInt(input.value) + change;
  if (qty < 0) qty = 0;
  input.value = qty;

  const price = parseFloat(product.dataset.price);
  const total = product.querySelector('.total');
  total.textContent = `₹${(price * qty).toFixed(2)}`;

  updateTotal();
}

function updateTotal() {
  let totalQty = 0;
  let totalPrice = 0;

  document.querySelectorAll('.product').forEach(product => {
    const qty = parseInt(product.querySelector('input').value);
    const price = parseFloat(product.dataset.price);
    totalQty += qty;
    totalPrice += price * qty;
  });

  document.getElementById('totalQty').textContent = totalQty;
  document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

window.onload = updateTotal;



// Existing quantity logic
function changeQty(button, change) {
  const product = button.closest('.product');
  const input = product.querySelector('input');
  let qty = parseInt(input.value) + change;
  if (qty < 0) qty = 0;
  input.value = qty;

  const price = parseFloat(product.dataset.price);
  const total = product.querySelector('.total');
  total.textContent = `₹${(price * qty).toFixed(2)}`;

  updateTotal();
}

function updateTotal() {
  let totalQty = 0;
  let totalPrice = 0;

  document.querySelectorAll('.product').forEach(product => {
    const qty = parseInt(product.querySelector('input').value);
    const price = parseFloat(product.dataset.price);
    totalQty += qty;
    totalPrice += price * qty;
  });

  document.getElementById('totalQty').textContent = totalQty;
  document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

window.onload = updateTotal;

// New: Search popup toggle
function toggleSearch() {
  const popup = document.getElementById('searchPopup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('searchIcon').addEventListener('click', function(e) {
  e.preventDefault();
  toggleSearch();
});

// New: Page search filtering
function searchPage() {
  const term = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsContainer = document.getElementById("searchSuggestions");
  suggestionsContainer.innerHTML = "";

  const products = document.querySelectorAll(".product");
  let matchCount = 0;

  products.forEach(product => {
    const text = product.innerText.toLowerCase();
    const title = product.querySelector(".eng-title")?.innerText || "";

    if (text.includes(term)) {
      product.style.display = "flex";
      if (term.length > 0 && matchCount < 10) {
        const suggestion = document.createElement("div");
        suggestion.textContent = title;
        suggestion.onclick = () => {
          document.getElementById("searchInput").value = title;
          searchPage();
        };
        suggestionsContainer.appendChild(suggestion);
        matchCount++;
      }
    } else {
      product.style.display = "none";
    }
  });

  if (term.length === 0) {
    suggestionsContainer.innerHTML = "";
    products.forEach(p => p.style.display = "flex");
  }
}





