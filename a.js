//  button:
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//dark mode
//  let darkElement = document.getElementById('dark')
//  darkElement.addEventListener('click',function darkmode(){
//    document.documentElement.classList.toggle('dark')
//    })

// function clickFunction() {
//   if ()
// }

// function myFunction() {
//   let darkElement = document.getElementById('dark');
//   darkElement.classList.toggle("dark");
// }


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
}


function validate () {
  var name = document.getElementById('name').value ;
  var num = document.getElementById('num').value ;
  var message = document.getElementById('message').value ;


 if ( !name || !num || !message) {
    alert('لطفا فرم را کامل پر کنید.');
    return false;

 }
 else {
  alert(" با موفقیت ارسال شد.")
  return true;
 }
}







