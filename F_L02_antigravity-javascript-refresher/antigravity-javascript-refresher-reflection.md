### 01_base_syntax.js
# Prompt
Using only 01_base_syntax.js as the target, explain first what the file contains, then after I want you to make some changes:
  - remove the _temp and $price variable then create a new one that is related to the other variables
  
  let me know first what you want to alter then make changes after I approve it
# Reflection
I learned that in the naming convention is a very important thing you should learn because there are valid and invalid variable naming. Furthermore, you should be very mindful on the capitalization or use-cases because Javascript is case-sensitive.

### 02_variables.js
# Prompt
Open 02_variables.js. Do not modify anything yet. Kindly explain to me the content and how does each variable relate to another.
# Reflection
I learned about the difference of the loose and strict equality, like how the == converts the string into a number before comparing, and how the === checks both value and type without changing anything.

### 03_functions.js
# Prompt
Implement 03_functions.js with:
  - add a greetings in greet(name), like a simple time check, "Hello, " + name ". Goodmorning/Evening it is currently" + time.
# Reflection
I have learned that you can put multiple methods within a function to make it more efficient and organized.

### 04_objects.js
# Prompt
Open 04_objects.js, explain to me why in the introduce() cannot be done in an arrow function when using the template literals
# Reflection
I learned that you cannot use an arrow function in the introduction()when using template literals, because an arrow functions do not create their own this context.

### 05_arrays.js
# Prompt
Open 05_arrays.js, compare the original array and transformed array. Tell me the difference that the .push and .shift do.
# Reflection
I learned that .push() adds the element at the end of the array, while the .shift() removes the first element of the array.

### 06_control_structures.js
# Prompt
06_control_structure.js, create another variable named studentScore then make it so the value will be log to A
# Reflection
I learned that when you make CLI create a new variable and implement it to the existing function, it would first debug it and make sure it will work with the current function, then it would alter it and debug it if problem arise.

### 07_dom.html
# Prompt
Open 07_dom.html, explain what does the:
  - getElementById("changeColorBtn")
  - addEventListener

  do?
# Reflection
I learned that the document.getElementById("changeColorBtn") searches the DOM tree for an HTML element with an id attribute matching "changeColorBtn". Additionally, the addEventListener attaches an event handler/listener function to a target element so it can respond to user actions.

### 08_essential_features.js
# Prompt
Open 08_essential_features.js., then explain to me how does the .map work and the ...numbers work?
# Reflection
I learned that the .map() is used to iterates every item in an array, and how the ...numbers spreads all the elements into a new array instead of just adding it into the old array.

### 09_tricky_parts.js
# Prompt
In 09_tricky_parts.js, differentiate the regularMethod from arrowMethod and to why the this.name doesnt work for both, then the difference of copyByReference and copyBySpread
# Reflection
I learned that the this.name doesnt work for both regularMethod and arrowMethod is because the arrowMethod do not have their own this. Instead, they bind this. lexically, and the regularMethod have dynamic this. function. In addition, I learned that copyByReference from the word itself reference, it pointers to memory addresses and is a shared memory, while the copyBySpread is an independent clone, it creates a new array which mean sit does not interfere with the original array.

### 10_let_const.js
# Prompt
Open 10_let_const.js., and explain to me the very difference of let, const, and var, and why does the var should be avoided? and if you can, please explain what is there a need for the var?
# Reflection
I learned that the const variable itself is a constant, which means it cannot be reassigned a value no matter what. On the other hand, the let variable is reassignable which means it can be changed. Lastly, the var ignores the block scope which the let and const do not. However, car should be avoided because it can lead to bugs that is why in the modern JavaScript there is little to no use of it.

### 11_arrow_functions.js
# Prompt
Open 11_arrow_functions.js then show me what it would look like if you do not use arrow function, then explain why is it better to use the arrow function.
# Reflection
I learned that the  arrow functions, single expressions don't need curly braces {} or the return keyword—they return automatically.

### 12_destructuring.js
# Prompt
Open 12_destructuring.js then explain the difference of the 3 destructuring used
# Reflection
I learned the difference of the 3 destructing used: Object Destructuring variable names must match existing keys on the object, Array Destructuring variable names do not need to match anything on the array, Function Parameter Destructuring unpacks only the required property (name) right at the parameter level.

### 13_spread_rest.js
# Prompt
Open 13_spread_rest.js. then show me the difference of the arrays before and after spreading by adding another console.log at the end that shows it did not change the original array
# Reflection
I learned that you can still print the original array even after the spreading because it does not change the original array instead it clones it into a new array.

### 14_classes_inheritance.js
# Prompt
Open 14_classes_inheritance.js, create a new class which states that the student is "enrolled at 3rd year BSIS", but before editing show me what you want to change and explain how did the extends work
# Reflection
I learned that the extends keyword establishes inheritance through the prototype chain. From the word itself inheritance, it inherits the characteristics the parent class have to the child class.

### 15_modules_export.js
# Prompt
Open 15_modules_export.js add another property under the userInfo, add student boolean as true
# Reflection
I learned that you can still add another property under an object that is imported into another file.

### 16_modules_import.js
# Prompt
Open both files:
  @15_modules_export.js
  @16_modules_import.js
  
  then make use of the added property from 15_modules_export.js, create another console.log for it
# Reflection
I learned that you can print the other property of an array into another line separated from the other properties.

### 17_logical_operators.js
# Prompt
Open 17_logical_operators.js, change both the boolean value of isAdmin and IsSubscriber, then before running it show me your prediction then compare that to the actual result
# Reflection
I learned that even though isSubscriber was switched to false, canWatch remains true because isAdmin was changed to true. With ||, a user only needs either privilege to gain access, because || (OR) is true if either side is true.

### 18_ternary_nullish.js
# Prompt 
18_ternary_nullish.js. then create an if-else statement after line 3, which states  >= 90 is "with homors" then >= 70 is "graduate"
# Reflection
I learned that by comparing the if-else and the ternary operator, the ternary operator is a much efficient and shorter (one line) version of the if-else.

### agent-subagent-skill
I learned that the agent is like the PM that oversee and connects everything, the subagent handles a supporting review, and the skill is the detailed structured way of how the code works.