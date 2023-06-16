# _{Roboger's Hood}_

#### By _**{Mike Workman}**_

#### _{Roboger's Hood turns numbers into beeps and boops}_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description 
Roboger's Hood is fun application that will allow you change any numer into a fun string of predefined words and phrases by utilizing javascripts arrays and looping abilities. 

[ROBOGER'S HOOD](https://workmanmcr.github.io/roboger-js/)

Here are a List of test for the JavaScript below:

Describe: returnBeep()

Test: "it should replace the number 1 with the word beep"
Code: function returnBeep(number) {
  if (number === 1) {
    return "beep";
returnBeep(1);
Expected Output: beep
passed

Test: "it should replace any number with 1 in it with the word beep"
Code:function returnBeep(number) {
  if (number.toString().includes('1')) {
    return "beep";
returnBeep(716);
Expected Output: beep
passsed 

Describe: returnBoop()
Test: "it should replace the number 2 with the word boop"
code: function returnBoop(number) {
  if (number === 2) {
    return "boop";
returnBoop(2)
Expected Output: boop 
passed
Test: "it should replace any number with 2 in it with the word boop"
code: function returnBoop(number) {
  if (number.toString().includes('2')) {
    return "boop";
 
returnBoop(526)
Expected Output: boop
passed 


Describe: neighbor()
Test: "it should replace the number 3 with the phrase "won't you be my neighbor?" "
code: function neighbor(number) {
  if (number === 3) {
 
neighbor(3)
Expected Output: "won't you be my neighbor?"
passed

Test: "it should replace any number with  3 in it with the phrase "won't you be my neighbor?" "
code: function neighbor(number) {
  if (number.toString().includes('3')) {
 
neighbor(537)
Expected Output: "won't you be my neighbor?"
passed

Test: "it should replace 3 with "won't you be my neighbor?" and pick 3 over 2 "
code: function neighbor(number) {
  if (number.toString().includes('3')) {
    return "Won't you be my neighbor?";
} else if (number.toString().includes('2')) {
    return "boop";
 
neighbor(23)
Expected Output: "won't you be my neighbor?"
passed

Test: "it should select the highest number and return the promt from said highest number"
code: function neighbor(number) {
  if (number.toString().includes('3')) {
    return "Won't you be my neighbor?";
} else if (number.toString().includes('2')) {
    return "boop";
} else if (number.toString().includes('1')) {
  return "beep"; 
 
neighbor(213)
Expected Output: "won't you be my neighbor?"
passed

Describe: list()

Test: "it should return a list of numbers starting from 0 to the entered number"
Code: function list(number) {
  var numbers = [];
  for (var i = 0; i <= number; i++) {
    numbers.push(i);
list(8);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]
passed

Describe: neighbor()

Test: "it should use the list function as a call back to insert beep, beep, and "won't you be my neighbor?" 
 code: function neighbor(number, callback) {
  var output = [];
  for (var i = 0; i <= number; i++) {
    if (i.toString().includes('3')) {
      output.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')) {
      output.push("boop");
    } else if (i.toString().includes('1')) {
      output.push("beep");
    } else {
      output.push(i);
    }
  }
  neighbor(6)
  Expected outcome [0, 'beep', 'boop', "Won't you be my neighbor?", 4, 5, 6]
passed 

## Setup/Installation Requirements

* _Clone the repository or download the code files._
* _Open the `index.html` file in a web browser._
* _In the web browser, you will see an input field where you can enter a number. This number represents the maximum value for the range of numbers to be processed._
* _Click the "ROBOGERFY IT!!" button to execute the Neighbor Function._
* _The output will be displayed below the input field, showing the processed numbers based on the rules of the Neighbor Function._


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