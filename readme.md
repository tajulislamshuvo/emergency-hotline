1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
=> getElementById means select item by id name.
  getElementsByClassName means select all the item by class name.
   querySelector means select single item by class name, tag name, id name.
   querySelectorAll means select all item of specific class name, tag name, id name.


2. How do you **create and insert a new element into the DOM**?
=>  creat: const creat = document.creatElement('tagName').
=>  insert: parentElement.appendChild(creat);

3. What is **Event Bubbling** and how does it work?
=> Event bubbling means first select the targeted item then select the parent item and again and again it select the parent element.


4. What is **Event Delegation** in JavaScript? Why is it useful?
=> Event Delegation means set addEventListner on the parent. it help to reduce  propagation on code.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
=> preventDefault() help to stop button for submission.
=> stopPropagation() help to stop Event bubbling.

---

