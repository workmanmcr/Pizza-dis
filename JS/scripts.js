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
const pizzaForm = document.getElementById("pizza-form");
const sizeSelect = document.getElementById("size");
const toppingCheckBox = document.querySelector('input[name="toppings"]');
const resultDiv = document.getElementById("result");

pizzaForm.addEventListener('submit', function(event)) {
  event.preventDefault();
}

