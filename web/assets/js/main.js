function scrollFunc() {
    let menu= document.getElementById("home");
    var rect = menu.getBoundingClientRect();
    if (window.scrollY > 100) {
      document.getElementById("menu").style.backgroundColor = "rgba(123,123,12,0.6)";
    }
    else{
      document.getElementById("menu").style.backgroundColor = "";
    }
  }