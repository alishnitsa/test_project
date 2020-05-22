function viewPass() {
  var x = document.getElementById("typing");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default viewPass;
