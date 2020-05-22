function openChange() {
  document.getElementsByClassName("change_wrapper")[0].style.display = "flex";
}

function closeChange() {
  document.getElementsByClassName("change_wrapper")[0].style.display = "none";
}

export { openChange, closeChange };
