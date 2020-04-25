function AlertPage() {
  alert("Thank you for subscribing!");
  return false;
}
function submitPayment() {
  var fullname = document.forms["myForm"]["fullname"].value;
  var cc = document.forms["myForm"]["cc"].value;
  var date = document.forms["myForm"]["date"].value;
  if ((fullname == "") || (cc == "") || (date == "")) {
    alert("Remember to fill in all fields!");
    return false;
} else{
    alert("Great, you're all signed up!")
}
}
