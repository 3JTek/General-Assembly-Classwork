![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# DOM Lab

### Introduction

From today's folder in your classwork directory, create a new folder called `dom-lab`, and add the following files:

```bash
mkdir dom-lab
cd dom-lab
touch index.html
mkdir js
touch js/app.js
```

Link your JS file in the `<head>` of your `index.html`. You should write all of your solutions to the tasks below in your `app.js` file.

**Note:** You will need to wrap your JS in a DOMContentLoaded event listener.

```js
window.addEventListener('DOMContentLoaded', () => {
	// code here
});
```

### Tasks

1. Store the `<body>` element inside a const called "body".
2. Create a `<h1>` and store it in a const called `heading`.
3. Using `innerHTML` add "I am a heading" inside the tag.
4. Append the heading to the body of the HTML.
5. Make the `<h1>` grey.
6. Give it a border of 2px solid green.
7. Give it 20px of padding.
8. Use JavaScript to find the height of the `<h1>` (including the padding and border) and then console log it. (You should get `81`).
9. Create a `<div>` and store it in a const called `box`.
10. Add the string "I am a div" inside the `<div>`.
11. Append the div to the body of the HTML.
12. Give the div a class of "box".
13. Give the div an id of "single".
14. Console log the children of the `<body>`.
15. Give the div a data attribute of `data-id='1'`;
16. Find the vertical offset position of the div (how far down it is from the top of the page) and console log it. (You should get `124`).

### Resources

* [List of DOM properties and methods](http://www.w3schools.com/jsref/dom_obj_all.asp)
