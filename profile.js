let up = document.getElementsByClassName("pro")[0];
let up1 = document.getElementsByClassName("pro1")[0];
const bot=document.querySelector("button");
const for1=document.querySelector("form");
let a=document.querySelector("a");
function fil(){
  up1.click();
}
function cli(){
  a.click();
}
up.addEventListener("change", function (dets) {
  up1.click();
});
const form = document.querySelector("form");
const fileInput = document.querySelector(".pro1");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const sm=document.querySelectorAll("small");
  const name = document.getElementById("fullname").value.trim();
  const age = document.getElementById("age").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const bio = document.getElementById("bio").value.trim();
  const urlInput = document.querySelector('input[type="url"]').value;
  let imageData = "";
  if (name.length < 3) {
    sm[0].innerText="Must be more than 3 characters"
    sm[0].style.color="red";
  }
  else{
    sm[0].innerText=""
  }
  if (!age || isNaN(age) || age < 1 || age > 120) {
    sm[1].innerText="Enter the age between 1 to 120"
    sm[1].style.color="red";
    return;
  }
  else{
    sm[1].innerText=""
  }
  if (profession.length < 2) {
    sm[2].innerText="profession  is required"
    sm[2].style.color="red";
    return;
  }
  else{
    sm[2].innerText=""
  }
  if (bio.length < 10) {
    sm[3].innerText="Bio must be greater than 10 characters"
    sm[3].style.color="red";
    return;
  }
  else{
    sm[3].innerText=""
  }
  if (!fileInput.files[0] && !urlInput) {
    sm[4].innerText="Please upload a photo or provide an image URL."
    sm[4].style.color="red";
    return
  }
  else{
    sm[4].innerText=""
  }
  if (fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function () {
      imageData = reader.result;
      saveAndRedirect();
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    imageData = urlInput;
    saveAndRedirect();
  }
  if(fileInput.files[0] && imageData  ){
    sm[4].innerText="Upload only one"
    sm[4].style.color="red"
    return
  }
  else{
    sm[4].innerText="";
  }
  function saveAndRedirect() {
    localStorage.setItem("profileData", JSON.stringify({
      name,
      age,
      profession,
      bio,
      image: imageData
    }));
    window.location.href = "card.html";
  }
});
