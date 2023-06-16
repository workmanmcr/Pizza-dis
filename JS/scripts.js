function Pizza(toppings, size){
  this.toppings = toppings; 
  this.size = size;
}

Pizza.prototype.sizeCost = function() {
  let baseCost = 0; 
  if (this.size === "small"){
    baseCost = 10;
  }
    else if (this.size === "medium"){
      baseCost = 15;
    } else if (this.size === "large"){
      baseCost = 20;
    }

  let sizeCost = baseCost;

  return totalCost;
}
Pizza.prototype.toppingCost = function() {
  
  if (this.toppings === "cheese") {
    baseCost = 2;
  } else if (this.toppings === "peperoni") {
    baseCost = 4;
  } else if (this.topping === "suasage"){
    baseCost =  6; 
  }

  return baseCost;
}
Pizza.prototype.totalCost