# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/Frontend%20Mentor%20-%20FAQ%20Accordion%20Card1.png)
![](./images/Frontend%20Mentor%20-%20FAQ%20Accordion%20Card2.png)

### Links

- Solution URL: [https://github.com/YangLongWang/Frontend-Mentor-FAQ-Accordion-Card](https://github.com/YangLongWang/Frontend-Mentor-FAQ-Accordion-Card)
- Live Site URL: [https://yanglongwang.github.io/Frontend-Mentor-FAQ-Accordion-Card/](https://yanglongwang.github.io/Frontend-Mentor-FAQ-Accordion-Card/)

## My process

### Built with

- HTML5
- SCSS
- Flexbox
- Mobile-first workflow

### What I learned

- using JS to create accordion effect

To see how you can add code snippets, see below:

```js
function handleClick(event) {
  const target = event.target.parentElement.getAttribute("id");

  if (target) {
    const turnoff = document.querySelectorAll(".hidden");
    turnoff.forEach((i) => {
      i.style.display = "none";
      i.parentElement.previousElementSibling.style.fontWeight = "";
      console.log(
        (i.parentNode.previousSibling.previousSibling.childNodes[3].style.rotate =
          "")
      );
    });

    const ele = document.getElementById(target);

    if (ele.nextSibling.nextSibling.childNodes[1].style.display == "block") {
      ele.nextSibling.nextSibling.childNodes[1].style.display = "none";
    } else {
      ele.nextSibling.nextSibling.childNodes[1].style.display = "block";
      ele.style.fontWeight = "700";
      ele.childNodes[3].style.rotate = "180deg";
    }
  }
}
```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)
- Frontend Mentor - [@Longyang Wang](https://www.frontendmentor.io/profile/YangLongWang)
