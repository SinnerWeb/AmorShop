const addToCartButtons = document.querySelectorAll(".cloth__block button");

const selectedItems = [];

function clearBtn() {
  selectedItems.splice(0, selectedItems.length);
  const cartElement = document.querySelector(".buy");

  const cartHtml = selectedItems.map((item) => {
    return `<div class"bay__block">${item.name} - ${item.price}</div>`;
  });

  cartElement.innerHTML = cartHtml.join("");
}

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const item = event.target.parentNode;

    const name = item.querySelector(".name").textContent;
    const price = item.querySelector(".price strong").textContent;

    selectedItems.push({
      name: name,
      price: price,
    });

    console.log(selectedItems);

    const cartElement = document.querySelector(".buy");

    const cartHtml = selectedItems.map((item) => {
      return `<div class"bay__block">${item.name} - ${item.price}</div>`;
    });

    cartElement.innerHTML = cartHtml.join("");
  });
});
