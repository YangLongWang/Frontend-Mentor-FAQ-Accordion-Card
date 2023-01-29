const questions = document.querySelectorAll(".question-title");

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
      // ele.style.fontWeight = "";
    } else {
      ele.nextSibling.nextSibling.childNodes[1].style.display = "block";
      ele.style.fontWeight = "700";
      ele.childNodes[3].style.rotate = "180deg";
    }
  }
}

questions[0].addEventListener("click", handleClick);
questions[1].addEventListener("click", handleClick);
questions[2].addEventListener("click", handleClick);
questions[3].addEventListener("click", handleClick);
questions[4].addEventListener("click", handleClick);
