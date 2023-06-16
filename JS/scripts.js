function Pizza(toppings, size){
  this.toppings = toppings; 
  this.size = size;
}

Pizza.prototype.totalCost = function() {
  let baseCost; 
  if (this.size === "small"){
    baseCost = 10;
  }
}