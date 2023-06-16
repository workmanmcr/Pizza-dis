# _{Get a Pizza Dis}_

#### By _**{Mike Workman}**_

#### _{Get a Pizza Dis is a fast and simple way to order pizza}_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description 
Get a Pizza Dis is an application developed to calculate the price of a pizza you want to order using a constructor function with prototype methods. this will allow you to pick any size pizza you want with a variety of toppings and give you the calcullated cost of the pizza. once you have selected your size and picked your toppings click on the "Total price" button to see your cost. 

[GetaPizzaDis](https://workmanmcr.github.io/Pizza-dis/)

Here are a List of test for the business logic below:

Describe: pizza()

Test: "it should creat a constructor"
Code: 
Pizza();
Expected Output: {
  this.toppings = toppings; 
  this.size = size;
}

Describe: sizeCost 
Test: "it shoudl create a prototype for calculatting total cost of size"
Code: 
Pizza.sizeCost();
Expected Output: undefined

Test: "it should return the cost of a small pizza"
code: 
myPizza.sizeCost()
Expected Output: 10 

Test: "it should return the cost of a medium pizza"
code: 
myPizza.sizeCost()
Expected Output: 15

Test: "it should return the cost of a large pizza"
code: 
myPizza.sizeCost()
Expected Output: 20

Describe: toppingCost 
Test: "it shoud create a prototype for calculating total cost per topping"
Code: 
Pizza.totalCost();
Expected Output: 2

Test: "it shoud create a prototype for calculating total cost per topper"
Code: 
Pizza.totalCost();
Expected Output: 4

Test: "it shoud create a prototype for calculating total cost per topper"
Code: 
Pizza.totalCost();
Expected Output: 6

Describe: totalCost() 
Test: "it shoud create a prototype for calculating total cost of pizza with size and toppings"
Code: 
Pizza.totalCost("cheese", "large");
Expected Output: 20

Test: "it shoud create a prototype for calculating total cost of pizza with size and multiple toppings"
Code: 
Pizza.totalCost("cheese", "peperoni" "large");
Expected Output: 26



## Setup/Installation Requirements

* _Clone the repository or download the code files._
* _Open the `index.html` file in a web browser._
* _In the web browser, you will see an input field where you can pick you size of pizza and toppings_
* _Click the "Total price" button to execute the callculate Function._
* _The output will be displayed below the "total Price" button, showing the total cost of the pizza size and toppings selected._


## Known Bugs

* _No known bugs at this time_

## License

MIT License

Copyright (c) [2023] [Micheal Workman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
