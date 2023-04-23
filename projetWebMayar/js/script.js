let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function controleemail() 
{
        var email = document.getElementById("email").value;
        var x = email.indexOf('@');          
        var x1 = email.lastIndexOf('.');
        var suff = email.substring (x+1 , x1);
        for(i=0 ; i<suff.length ; i++){
            if ((suff.charAt(i).toUpperCase()<'A')||(suff.charAt(i).toUpperCase()>'Z')){
                alert("le suffixe doit obligatoirement alphabetique !");
                return false ;
            }
        }
		if (document.getElementById("psw").value.length<9)
		{
		    alert("Votre mot de passe doit contenir au moins 9 caracteres");
			psw.focus();
		return false;
		}
}
