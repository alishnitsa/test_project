function navScript(e) {
  for (
    let i = 0;
    i < document.querySelector(".navigation").children.length;
    i++
  ) {
    document
      .querySelector(".navigation")
      .children[i].classList.remove("active");
  }
  e.target.classList.add("active");
}

export default navScript;
