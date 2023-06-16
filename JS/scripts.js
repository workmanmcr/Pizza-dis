function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizeCost = function() {
  let baseCost = 0;
  if (this.size === "small") {
    baseCost = 10;
  } else if (this.size === "medium") {
    baseCost = 15;
  } else if (this.size === "large") {
    baseCost = 20;
  }

  return baseCost;
};

Pizza.prototype.toppingCost = function() {
  let baseCost = 0;
  for (let i = 0; i < this.toppings.length; i++) {
    let topping = this.toppings[i];
    if (topping === "cheese") {
      baseCost += 2;
    } else if (topping === "pepperoni") {
      baseCost += 4;
    } else if (topping === "sausage") {
      baseCost += 6;
    }
  }

  return baseCost;
};

Pizza.prototype.totalCost = function() {
  let sizeCost = this.sizeCost();
  let toppingCost = this.toppingCost();
  let totalCost = sizeCost + toppingCost;

  return totalCost;
};
const pizzaForm = document.getElementById('pizza-form');
const sizeSelect = document.getElementById('size');
const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]');
const resultDiv = document.getElementById('result');

// Event listener for form submission
pizzaForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get selected size
  const selectedSize = sizeSelect.value;

  // Get selected toppings
  const selectedToppings = [];
  toppingsCheckboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedToppings.push(checkbox.value);
    }
  });

  // Create a new Pizza object
  const pizza = new Pizza(selectedToppings, selectedSize);

  // Calculate total cost
  const totalCost = pizza.totalCost();

  // Display the result
  resultDiv.innerHTML = `Total Cost: $${totalCost}`;
});
  

