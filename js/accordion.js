const faqBoxs = document.querySelectorAll(".faq__box")

faqBoxs.forEach(faqBox => {
    faqBox.addEventListener("click", () => {
        faqBox.classList.toggle("faq__active")
    })
})
