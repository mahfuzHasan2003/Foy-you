const firstPage = document.getElementById("first-page");
const valoNa = document.getElementById("valo-na");
const valo = document.getElementById("valo");
const dekhboNa = document.getElementById("dekhbo-na")
const dekhbo = document.getElementById("dekhbo");

function forValoNa(){
   firstPage.style.display = "none";
   valoNa.style.display = "block";
}
function forValo(){
   valo.style.display = "block";
   firstPage.style.display = "none";
}
function forDekhboNa(){
   dekhboNa.style.display = "block";
   valo.style.display = "none";
}
function forDekhbo(){
   dekhbo.style.display = "block";
   valo.style.display = "none";
}