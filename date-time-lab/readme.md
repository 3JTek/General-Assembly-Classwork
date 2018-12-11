---
title: Date and Time
type: lesson
duration: "1:25"
creator:
    name: Mike Hayden
    city: London
competencies: Programming
---

# Date and Time

### Objectives
*After this lesson, students will be able to:*

- Play with JavaScripts native `Date` function
- Look at how `setTimeout` works
- Look at how `setInterval` works

### Preparation
*Before this lesson, students should already be able to:*

- Should know basic JavaScript

## Date and Time

Sometimes we need to access the computer's time and date settings to make an application work. For example if we wanted to display the current time on our web page; or calculate how many days the user last logged in; or when they last made a purchase, booked a train ticked etc.

## JavaScript `Date`

`Date` is a native JavaScript constructor function. We can create a date object (an instance) like any other constructor:

```javascript
const currentDate = new Date();
```

We can now query this date instance to get the date and time:

```javascript
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
```

This will return the current hour, minute and second, of the moment __when the date instance was created__, and not the time when the getter method was called (`getHours`, `getMinutes` or `getSeconds`).

We can also get the current day, month and year as well!

```javascript
const day = currentDate.getDay();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
```

### The problem with month

Unfortunately, for reasons only known to those who made it, `getMonth` returns a number from `0 - 11`, rather than `1 - 12`, even though the `getDay` function returns a number from `1 - 31` ?!

There's not much we can do about this unfortunately, we just need to be aware of it.

## `setTimeout` and `setInterval`

Another thing that is useful it to do is to be able to run a function or block of code at a certain time in the future, or every `n` seconds.

Javascript's way of doing this is a clever set of functions `setTimeout` and `setInterval`. Let's see how we can use them:

```javascript
setTimeout(() => {
  console.log('setTimeout fired!');
  console.log(new Date());
}, 1000);
```

So in this case, callback function will be run __once__ in 1000 milliseconds, or 1 second in the future.

```javascript
setInterval(() => {
  console.log('setInterval fired!');
  console.log(new Date());
}, 1000);
```

The syntax for `setInterval` is the same, but as the name suggests it runs the code inside the callback function __every__ 1000 milliseconds, forever.

### Forever ever!?

Yep.

### Really?

Really.

### Really?!

OK, so yeah, `setInterval` will run forever, unless you store the id returned from the function and then use it to clear the timeout with `clearTimeout` or `clearInterval`. Let me show you:

```javascript
const timerId = setInterval(() => {
  console.log('setInterval fired!');
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
}, 5000);
```

The console log above will run every second, for 5 seconds, at which point the timer will be cleared from memory and stop running.

## Independent practise (60mins)

In the starter code is a single HTML document, stylesheet and JS file (comment in the JS code to begin). If you open the `index.html` in the browser you'll see two watch faces.

#### Clock

The first watch face is a simple clock:

1. Add the current time to the watch face when the page is loaded (in the format `HH:MM:SS`)
2. Make the clock tick every second.

#### Timer

The second watch face is a timer with start/stop and reset buttons

1. Make the timer start when you click the red start/stop button
2. Make the timer stop if it is running and start if it is not with the same button
3. Stop and reset the timer with the black reset button

#### Bonus

- Namespace your code
