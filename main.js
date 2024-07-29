import "./style.css";

const button = document.querySelector(".content .button")
const email = document.getElementById("email")
const error = document.querySelector(".form-group span:last-child")
const thanks = document.getElementsByTagName("dialog")[0]
const content = document.querySelector(".content")
const picture = document.getElementsByTagName("picture")[0]

function validateMinimal(str) {
  return str.length >= 5 && str.indexOf('@') > -1 && str.indexOf('.') > -1
}

button.addEventListener("click", (e) => {
  if (!email.value || !email || !validateMinimal(email.value)) {
    e.preventDefault();
    error.style.display = "block"
    return
  } else {
    const message = `A confirmation email has been sent to <span class="subscriber-email">${email.value}</span>.`
    const p = thanks.querySelector("p")  
    p.innerHTML = message
    picture.style.display = "none"
    content.style.display = "none"

    thanks.style.display = "grid"
    thanks.showModal()
    e.preventDefault()
  }
});

const closeButton = thanks.querySelector(".close")

closeButton.addEventListener("click", (e) => {
  thanks.close()
  thanks.style.display = "none"
  picture.style.display = "block"
  content.style.display = "grid"
  email.value = ""
});
