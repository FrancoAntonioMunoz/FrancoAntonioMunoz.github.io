function generate() { 
  var subject = document.getElementById("subject").value
  var body = document.getElementById("body").value

  var mailto = 'mailto:contacto@klearning.cl';
  if (subject) {
    mailto += '?subject='+subject;
  }
  if (body) {
    mailto += '&body='+body;
    
  }
  window.open(mailto)
}

window.onload = function(){
  var btn = document.getElementById("generate");
  btn.onclick = generate;
}