---------------------------------------------  Answers to Question -----------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------
1. Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll.

| Method                              | Returns        | Notes                                 |
| ----------------------------------- | -------------- | ------------------------------------- |
| `getElementById(id)`                | Single element | Selects element by **ID**             |
| `getElementsByClassName(className)` | HTMLCollection | Selects **all elements** with a class |
| `querySelector(selector)`           | Single element | First element matching CSS selector   |
| `querySelectorAll(selector)`        | NodeList       | All elements matching CSS selector    |

------------------------------------------------------------------------------------------------------------------------------
 2. Create & Insert a New Element

Steps:

* Create element:
const newDiv = document.createElement('div');

* *  Add content/attributes: 
 newDiv.textContent = 'Hello World'; newDiv.className = 'my-div';

* * * Insert into DOM:
 const container = document.getElementById('container'); container.appendChild(newDiv);

-------------------------------------------------------------------------------------------------------------------------------

 3. Event Bubbling

 * Event starts at target element → bubbles up to parents.

* Example:

child.addEventListener('click', () => console.log('Child clicked'));
parent.addEventListener('click', () => console.log('Parent clicked'));

* Click output:

Child clicked
Parent clicked

* Diagram:

Click Event
   |
  [Child Button] <-- target
   |
  [Parent Div]  <-- bubbles up

----------------------------------------------------------------------------------------------------------------------------------

  4. Event Delegation

* Single listener on parent handles child events.

* Works for dynamically added elements.

* Example:

list.addEventListener('click', (e) => {
  if (e.target.nodeName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});


* Diagram:

[UL#myList]  <-- parent listens
   |
   |-- [LI]  <-- click bubbles here
   |-- [LI]


----------------------------------------------------------------------------------------------------------------------------------


5. preventDefault() vs stopPropagation()

| Method              | Purpose                                               | Example               |
| ------------------- | ----------------------------------------------------- | --------------------- |
| `preventDefault()`  | Prevent default action (form submit, link navigation) | `e.preventDefault()`  |
| `stopPropagation()` | Stop event from bubbling                              | `e.stopPropagation()` |


---------------------------------------------------------------------------------------------------------------------------------
***************************************Diagrams JavaScript DOM and Event Handling Essentials************************************
----------------------------------------------------------------------------------------------------------------------------------

<img src="./img/JavaScript DOM and Event Handling Essentials.png">
