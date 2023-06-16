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
  if (this.toppings === "cheese") {
    baseCost = 2;
  } else if (this.toppings === "pepperoni") {
    baseCost = 4;
  } else if (this.toppings === "sausage") {
    baseCost = 6;
  }

  return baseCost;
};

Pizza.prototype.totalCost = function() {
  let sizeCost = this.sizeCost();
  let toppingCost = this.toppingCost();
  let totalCost = sizeCost + toppingCost;

  return totalCost;
};
