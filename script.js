let OwnFormInputs = document.querySelectorAll(".own-form-contact-page")

OwnFormInputs.forEach((elements) => {
    elements.addEventListener("click", ()=> {
        elements.style.backgroundColor="#343a40"
        elements.style.color="white"
    })
})